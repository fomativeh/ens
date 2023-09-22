import { NextResponse } from "next/server"
import { Server_Endpoint } from "../../../../constants/Server_Endpoint"

export async function POST(request: Request) {
    try {
        const userID: string = await request.json()
        const res = await fetch(`${Server_Endpoint}/user/${userID}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })

        const data = await res.json()
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json(error)
    }
}