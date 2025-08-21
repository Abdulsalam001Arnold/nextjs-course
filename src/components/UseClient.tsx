
"use client"
import { UserButton } from "@clerk/nextjs"
export default function UseClient() {
    return(
        <nav>
            <div className="flex justify-end p-4">
                <UserButton  />
            </div>
        </nav>
    )
};
