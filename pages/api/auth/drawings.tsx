import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma/prisma';

import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default async function user(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession(req, res);
  const activeUser = await prisma.user.findFirst({
    where: {
      email: session?.user?.email,
    },
    include: {
      drawings: true,
    },
  });
  res.json(activeUser);
}
