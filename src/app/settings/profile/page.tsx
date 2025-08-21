"use client"
import React, {useState} from "react"
import { useRouter } from "next/navigation"

export default function Page() {
    const [email, setEmail] = useState("")
    const router = useRouter()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(email && email !== ""){
            alert(`Your email is: ${email}`)
            router.push('/')
        }
        
    }
    return(
        <div>
            <h2>This is the profile settings page</h2>
            <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter your email" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
            {email}
            <input type="submit" value="Click to submit" />
            </form>
        </div>

    )
};
