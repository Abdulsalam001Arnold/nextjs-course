import { resolve } from "path";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    website: string;
    phone: string;
}

export default async function ServerFetch() {
    await new Promise((resolve) => setTimeout(resolve, 4000))
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: User[] = await res.json();
    console.log(data);
    return(
        <div className="">
            {data.map((user) => (
                <div className="mb-5" key={user.id}>
                    <h3>{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>Username: {user.username}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>
                </div>
            ))}
        </div>
    )
};
