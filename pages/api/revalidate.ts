import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check for secret to confim this is a valid request
  if (req.headers["authorization"] !== process.env.REVALIDATION_SECRET) {
    return res.status(401).json({ message: "Invalid token" })
  }

  try {
    await res.unstable_revalidate("/berichte")
    return res.json({ revalidate: true })
  } catch (err) {
    return res.status(500).send("Error revalidating")
  }
}
