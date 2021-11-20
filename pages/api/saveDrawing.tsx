import { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma/prisma';

export default async function saveDrawing(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed ' });
  }

  const drawingData = JSON.parse(req.body);
  console.log(drawingData);
  const savedDrawing = await prisma.drawing.create({
    data: {
      data: drawingData?.data,
      title: drawingData?.title,
      owner: { connect: { id: drawingData?.ownerId } },
    },
  });
  res.json(savedDrawing);
}
