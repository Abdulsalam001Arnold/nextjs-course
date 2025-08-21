


type AlbumProps = {
    userId: number;
    id: number;
    title: string;
}

type PostProps = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const controller = new AbortController()
const timeout = setTimeout(() => controller.abort(), 5000)

 async function fetchAlbums(userId: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`, {
        signal: controller.signal
    })

    return res.json()
}

 async function fetchPosts(userId: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    return res.json()
}


export default async function Profile({params}: {
    params: Promise<{id: string}>
}) {
    const {id} = await params;
    const getPosts = fetchPosts(id)
    const getAlbums = fetchAlbums(id)
    const [posts, albums] = await Promise.all([getPosts, getAlbums])

    return(
        <div className="min-h-screen">
            Profile
            <h2 className="text-3xl font-bold mb-4">User ID: {id}</h2>
            <h3 className="text-2xl font-semibold mb-4">Posts</h3>
            <ul className="mb-8">
                {posts.map((post: PostProps) => (
                    <li key={post.id} className="mb-4">
                        <h4 className="font-bold text-xl">{post.title}</h4>
                        <p>{post.body}</p>
                    </li>
                ))}
                </ul>
            <h3 className="text-2xl font-semibold mb-4">Albums</h3>
            <ul>
                {albums.map((album: AlbumProps) => (
                    <li key={album.id} className="mb-4">
                        <h4 className="font-bold text-xl">{album.title}</h4>
                    </li>
                ))}
            </ul>
        </div>
    )
}


