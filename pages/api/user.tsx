import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../lib/prisma/prisma';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default async function user(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession(req, res);
  // console.log(session);
  let activeUser;
  if (session) {
    activeUser = await prisma.user.upsert({
      where: {
        email: session?.user?.email,
      },
      update: {
        image: session?.user?.picture,
      },
      create: {
        email: session?.user?.email,
        image: session?.user?.picture,
      },
    });
    console.log(activeUser);
    res.json(activeUser);
  } else {
    res.status(500).send({ error: 'failed to fetch data' });
  }
}
