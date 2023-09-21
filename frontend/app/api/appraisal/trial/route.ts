import { NextResponse } from "next/server"
import { Server_Endpoint } from "../../../../constants/Server_Endpoint"

export async function POST(request: Request) {
    try {
        const domainName: string = await request.json()
        const res = await fetch(`${Server_Endpoint}/domain/appraise-trial`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({domainName})
        })

        const data = await res.json()
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json(error)
    }
}