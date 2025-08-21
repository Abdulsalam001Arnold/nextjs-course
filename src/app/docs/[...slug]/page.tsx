
export default function page({params}: any) {
    
    return(
        <div>
            <h2>Docs nested dynamic routes - {params.slug.join(' / ')}</h2>
        </div>
    )
};
