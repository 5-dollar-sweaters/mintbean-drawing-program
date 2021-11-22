import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma/prisma";

export default async function deleteDrawing(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not allowed " });
  }
  type Data = { id: string };

  const deleteDrawing = await prisma.drawing.delete({
    where: {
      id: req.body.id,
    },
  });
  res.json(deleteDrawing);
}
