
'use client'

import { useState, useEffect } from "react"

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    website: string;
    phone: string;
}
export default function ClientFetch() {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try{
                const res = await fetch('https://jsonplaceholder.typicode.com/users')
                if(res.status === 200){
                    const data = await res.json()
                    console.log(data)
                    setUsers(data)
                }
                setError(res.statusText || 'Something went wrong')
            }catch(err){
                console.error(err)
                setError('Failed to fetch users')
            }finally{
                setLoading(false)
            }
        }
        fetchUsers()
    }, [])
    return(
        <div className="">
            {users.length > 0 && (
                <ul>
                    {users.map((user) => (
                        <li className="mb-5" key={user.id}>
                            <h3>{user.name}</h3>
                            <p>Email: {user.email}</p>
                            <p>Username: {user.username}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Website: {user.website}</p>
                        </li>
                    )
                    )}
                </ul>
            )}
        </div>
    )
};
