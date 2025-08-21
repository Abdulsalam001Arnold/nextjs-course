

import { NextResponse } from 'next/server';

// export async function GET(request: Request) {
//     const {searchParams} = new URL(request.url);
//     const type = searchParams.get('type');
//     const limit = searchParams.get('limit') || '10';

//     try{
//         return NextResponse.json(
//             {
//                 type,
//                 limit,
//                 message: `Products of type ${type} with limit ${limit} found`,
//             }
//         )
//     }catch(err){
//         return NextResponse.json({error: 'Something went wrong'}, {status: 500, statusText: 'error'});
//     }
// }

// export async function GET(req: Request){
//     try{
//         const {searchParams} = new URL(req.url)
//         const tags = searchParams.getAll('tag')
//         return NextResponse.json({
//             tags,
//             message: `Tags found: ${tags.join(', ')}`,
//         })
//     }catch(err){
//         return NextResponse.json({
//             error: `Something went wrong: ${err instanceof Error ? err.message : 'Unknown error'}`,
//         })
//     }
// }


type ProductQuery = {
    category?: string,
    limit?: number,
}

export async function GET(request: Request) {
    try{
        const {searchParams} = new URL(request.url);
        const query: ProductQuery = {
            category: searchParams.get('category') || undefined,
            limit: searchParams.get('limit') ? Number(searchParams.get('limit')) : undefined,
        }
        return NextResponse.json(query)
    }catch(err: Error | any){
        console.error('Error processing request:', err);
        return NextResponse.json({
            error: `An error has occured: ${err.message || 'Unknown error'}`,
        })
    }
}