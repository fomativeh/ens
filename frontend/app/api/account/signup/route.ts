import { NextResponse } from "next/server"
import { Server_Endpoint } from "../../../../constants/Server_Endpoint"

type formCredentials = {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    plan:string
}

export async function POST(request: Request) {
    try {
        const credentials: formCredentials = await request.json()
        console.log(credentials)
        const res = await fetch(`${Server_Endpoint}/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(credentials)
        })

        const data = await res.json()
        console.log(data)
        return NextResponse.json({data})
    } catch (error) {
        return NextResponse.json({ error })
    }
}