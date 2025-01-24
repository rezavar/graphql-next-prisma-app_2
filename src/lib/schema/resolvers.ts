import { Role } from '@prisma/client';
import prisma from "@/lib/prisma";


export const resolvers = {
    Query: {
        users: async () => await prisma.user.findMany({ include: { bookmarks: true } }),
        links: async () => await prisma.link.findMany({ include: { users: true } }),
    },
    Mutation: {
        createUser: async (_: any, { email, image, role }: { email: string; image?: string; role?: Role  }) => {
            return await prisma.user.create({
                data: {
                    email,
                    image,
                    role
                },
            });
        },
        createLink: async (_: any, { title, description, url, imageUrl, category }: any) => {
            return await prisma.link.create({
                data: {
                    title,
                    description,
                    url,
                    imageUrl,
                    category,
                },
            });
        },
    },
};
