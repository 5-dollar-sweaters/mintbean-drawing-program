import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma/prisma';

export default async function drawings(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed ' });
  }

  const queryString = await req.query.ownerId;

  const drawings: any = await prisma.drawing.findMany({
    where: {
      ownerId: queryString,
    },
  });
  res.json(drawings);
}
