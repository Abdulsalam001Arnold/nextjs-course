"use client"

import { useUser } from "@clerk/nextjs"

export default function Info() {
    const {user} = useUser()

    if(!user) {
        return <div>Please sign in to see your info.</div>
    }

    return(
        <div className="p-4">
            <h1 className="text-2xl font-bold">User Info</h1>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Email:</strong> {user.primaryEmailAddress?.emailAddress}</p>
            <p><strong>Full Name:</strong> {user.fullName}</p>
            <p><strong>Created At:</strong> {user.createdAt?.toLocaleDateString()}</p>
        </div>
    )

};
