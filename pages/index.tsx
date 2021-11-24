import type { NextPage } from "next"
import { useState } from "react"
import useSWR from "swr"
import { useAllDocs, usePouch } from "use-pouchdb"
import { v4 as uuidv4 } from "uuid"
import type { Human } from "./api/human"

type Entry = {
  text: string
}

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Home: NextPage = () => {
  const db = usePouch<Entry>()
  const { rows } = useAllDocs<Entry>({
    include_docs: true
  })
  const [tempNote, setTempNote] = useState("")

  const { data: humanData, mutate } = useSWR<Human>(
    `/api/human?name=${tempNote}`,
    fetcher
  )

  return (
    <div
      style={{
        backgroundColor: "#333",
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        overflow: "auto",
        padding: "0 32px"
      }}>
      <h1
        style={{
          color: "#fff"
        }}>
        {/* if found human, show their data, else show not human */}
        {humanData
          ? `FOUND HUMAN: ${humanData.name}, AGE: ${humanData.age}, DESC: ${humanData.description}`
          : "NO HUMAN FOUND FOR THIS DATA"}
      </h1>
      <input
        type="text"
        value={tempNote}
        style={{
          marginTop: 160,
          width: "100%",
          maxWidth: 320
        }}
        placeholder="Type your thought, and press enter"
        onChange={(event) => {
          setTempNote(event.target.value)
        }}
        onKeyDown={(event) => {
          // if enter, add note
          if (event.key === "Enter") {
            if (event.ctrlKey) {
              fetch(`/api/human?name=${tempNote}`, {
                method: "PATCH",
                body: JSON.stringify({
                  description: "HELLO WORLD"
                })
              }).then(() => mutate())

              return
            }

            db.put({
              _id: uuidv4(),
              text: tempNote
            })
            setTempNote("")
          }
        }}
      />
      <ul
        style={{
          width: "100%",
          padding: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
        {rows.map((row) => {
          return (
            <li
              key={row.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%"
              }}>
              <input
                style={{
                  width: "100%"
                }}
                value={row.doc?.text}
              />
              <button
                onClick={() => {
                  db.remove(row.doc!)
                }}>
                X
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Home
