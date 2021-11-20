import type { NextPage } from "next"
import { useState } from "react"
import { useAllDocs, usePouch } from "use-pouchdb"
import { v4 as uuidv4 } from "uuid"

type Entry = {
  text: string
}

const Home: NextPage = () => {
  const db = usePouch<Entry>()
  const { rows } = useAllDocs<Entry>({
    include_docs: true
  })
  const [tempNote, setTempNote] = useState("")

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
