

import { Author } from "./author";
import { Suspense } from "react";
type Posts = {
    id: number;
    userId: number
    title: string;
    body: string;
}

export default async function PostSequential() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data: Posts[] = await res.json();
    console.log(data);
    const filteredPost = data.filter((post) => post.id % 10 === 1)
    return(
        <div className="">
            {filteredPost.map((post) => (
                <div className="" key={post.id}>
                    <h3 className="font-bold text-2xl mb-2">{post.title}</h3>
                    <p className="text-gray-700">{post.body}</p>
                    <Suspense fallback={<p>Loading........</p>}>
                    <Author userId={post.userId}/>
                    </Suspense>
                </div>
            ))}
        </div>
    )
};
