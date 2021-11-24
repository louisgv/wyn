/**
 * /api/human
 * Returns information about a person
 */

import type { NextApiRequest, NextApiResponse } from "next"

export type Human = {
  name: string
  age: number
  description?: string
}

const humanData: Record<string, Human> = {
  lab: {
    name: "L❤☮🤚",
    age: 25
  }
}

// REST API request: req, res: response
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.query

  if (typeof name !== "string") {
    return res.status(400).end()
  }

  const normalizedName = name.toLowerCase()

  if (req.method === "PATCH") {
    const { description } = JSON.parse(req.body)
    humanData[normalizedName].description = description
    return res.status(200).end()
  }

  const human = humanData[normalizedName]

  if (!human) {
    return res.status(404).end()
  }

  // Get data from your database
  res.status(200).json(human)
}
