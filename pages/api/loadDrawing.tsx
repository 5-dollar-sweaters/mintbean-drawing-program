import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma/prisma';

export default async function loadDrawing(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed ' });
  }

  const drawingData = JSON.parse(req.body);
  // console.log(drawingData);
  const savedDrawing: any = await prisma.drawing.create({
    data: {
      data: drawingData.data,
      owner: { connect: { id: drawingData.ownerId } },
    },
  });
  res.json(savedDrawing);
}
