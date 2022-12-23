// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = any

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    // const fetched = await fetch(`https://api.football-data.org/v4/competitions/BSA/matches?season=${new Date().getFullYear()}&matchday=38`, {
    //   headers: {
    //     'X-Auth-Token': 'b416fd6cd75541939e85ca6e9b803ff3',
    //   }
    // })
    // const data = await fetched.json()
    res.status(200).json({})
  } catch ({ response }) {
    res.status(400).json({ error: 'Alguma coisa deu errado, tente novamente mais tarde' })
  }
}
