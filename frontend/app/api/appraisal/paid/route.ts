import { NextResponse } from "next/server"
import { Server_Endpoint } from "../../../../constants/Server_Endpoint"

export async function POST(request: Request) {
    try {
        const credentials: { domainName: string, token: string } = await request.json()
        const res = await fetch(`${Server_Endpoint}/domain/appraise`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${credentials.token}`
            },
            body: JSON.stringify({ domainName: credentials.domainName })
        })

        const data = await res.json()
        return NextResponse.json({ data })
    } catch (error) {
        return NextResponse.json({ error })
    }
}