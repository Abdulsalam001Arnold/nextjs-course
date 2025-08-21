type Author = {
    id: number;
    name: string;
}

export async function Author({userId}: {userId: number}) {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data: Author = await response.json()
    return(
        <div>
            <p className="text-gray-700">Author Name: {data.name}</p>
        </div>
    )
};
