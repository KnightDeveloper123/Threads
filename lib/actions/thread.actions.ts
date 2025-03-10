"use server"

import { revalidatePath } from "next/cache";
import Thread from "../models/thread.models";
import User from "../models/user.models";
import { connectToDB } from "../mongoose";

interface Params {
    text: string;
    author: string;
    communityId: string | null;
    path: string;
}

export async function createThread({ text, author, communityId, path }: Params) {
    try {
        connectToDB();
        const createThread = await Thread.create({ text, author, community: null });
        await User.findByIdAndUpdate(author, {
            $push: { threads: createThread._id }
        })
        revalidatePath(path);
    } catch (error: any) {
        throw new Error(`Failed to add post: ${error.message}`);
    }
}