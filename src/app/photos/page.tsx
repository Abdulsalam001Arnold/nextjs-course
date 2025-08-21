import Link from "next/link"



export default function Photos() {
    const photos = [
        {id: 1, title: 'Landscape'},
        {id: 2, title: 'Street'},
        {id: 3, title: 'Gaming'},
        {id: 4, title: 'Outdoors'},
    ]
    return(
        <div className="min-h-screen">
            <h1>Gallery</h1>
            <ul className="flex flex-col gap-[6px]">
                {photos.map((p) => (
                    <li key={p.id}>
                        <Link href={`photos/${p.id}`}>{p.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};
