import { NextApiRequest } from "next";

type Body = {
  search: string;
};

export async function GET(req: NextApiRequest) {
  const search = req.body.search;
  //scrape
}
