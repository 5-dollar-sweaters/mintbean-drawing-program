import prisma from '../../lib/prisma/prisma';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function user(req, res) {
  const session = getSession(req, res);
  console.log(session.user.email);
  const activeUser = await prisma.user.findFirst({
    where: {
      email: session.user.email,
    },
    include: {
      drawings: true,
    },
  });
  console.log(activeUser);
  res.json(activeUser);
});
