import { db } from "./db";
import { currentUser } from "@clerk/nextjs/server";

export const syncUser = async () => {
  const user = await currentUser();
  if (!user) return null;

  const dbUser = await db.user.upsert({
    where: { clerkId: user.id },
    update: {
      email: user.emailAddresses[0].emailAddress,
      firstName: user.firstName,
      lastName: user.lastName,
    },
    create: {
      clerkId: user.id,
      email: user.emailAddresses[0].emailAddress,
      firstName: user.firstName,
      lastName: user.lastName,
    },
  });

  return dbUser;
};
