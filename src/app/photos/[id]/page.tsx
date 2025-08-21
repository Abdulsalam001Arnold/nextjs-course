


export default function photoPage({params}: any) {
    return(
        <div>
            <h1>Standalone Photo {params.id}</h1>
            <p>This is the full-page view — shown on direct navigation or refresh.</p>
        </div>
    )
};
