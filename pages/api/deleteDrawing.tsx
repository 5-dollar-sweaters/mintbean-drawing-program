import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma/prisma';

export default async function deleteDrawing(req, res) {
  const query = await req.query.drawingId;
  await console.log(query);
  const deleteDrawing = await prisma.drawing.delete({
    where: {
      id: query,
    },
  });
  res.json(deleteDrawing);
}
