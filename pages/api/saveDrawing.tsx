import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma/prisma';

export default async function saveDrawing(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed ' });
  }

  const drawingData = JSON.parse(req.body);

  const savedDrawing: any = await prisma.drawing.create({
    data: {
      id: drawingData.sketchId,
      owner: { connect: { id: drawingData.userId } },
    },
  });
  res.json(savedDrawing);
}
