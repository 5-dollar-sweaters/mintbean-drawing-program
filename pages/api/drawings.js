// import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma/prisma';

export default async function drawings(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed ' });
  }

  const query = await req.query.ownerId;

  const drawings = await prisma.drawing.findMany({
    where: {
      ownerId: query,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  res.json(drawings);
}
