import { connectMongoDB, disconnectMongoDB } from "@/libs/MongoConnect";
import { USER, UserModel} from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
export const runtime = 'edge'

export default async function handler(req: NextRequest): Promise<NextResponse>{
    if(req.method !== 'POST'){
        return NextResponse.json({message: "Only post request are allowed"}, {status: 405});
    }

    try {
        connectMongoDB();
        const body = await req.json();
        const userData:UserModel = body.newAccount;
        const usr = new USER(userData);
        await usr.save();

        return NextResponse.json({message: "User Created"}, {status: 201});

    } catch (error) {
        return NextResponse.json({message: "Internal server Error", error}, {status: 500});
    }
}