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
    <div>
      <input
        type="text"
        onChange={(event) => {
          setTempNote(event.target.value)
        }}
      />
      <button
        onClick={() => {
          db.put({
            _id: uuidv4(),
            text: tempNote
          })
          setTempNote("")
        }}>
        Add
      </button>
      <ul>
        {rows.map((row) => {
          return <li key={row.id}>{row.doc?.text}</li>
        })}
      </ul>
    </div>
  )
}

export default Home
