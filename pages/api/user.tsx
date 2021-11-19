import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from 'lib/prisma/prisma';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default async function user(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession(req, res);
  let activeUser;
  if (session) {
    activeUser = await prisma.user.upsert({
      where: {
        email: session?.user?.email,
      },
      update: {
        image: session?.user?.picture,
        name: `${session?.user?.given_name} ${session?.user?.family_name}`,
      },
      create: {
        email: session?.user?.email,
        image: session?.user?.picture,
      },
    });
    res.json(activeUser);
  } else {
    res.status(500).send({ error: 'failed to fetch data' });
  }
}
