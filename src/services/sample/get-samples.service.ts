import { prisma } from "../../lib/prisma";

export const getSampleServices = async () => {
    try {
        const sample = await prisma.sample.findMany();
        return getSampleServices;
    } catch (error) {
        throw error;
    }
}