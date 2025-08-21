
'use client'
import { useEffect } from "react"

export default function error({error, reset}: {error: Error, reset: () => void}) {
    useEffect(() => {
        console.error('Error:', error);
        // Optionally, you can log the error to an error reporting service here
        // e.g., Sentry, LogRocket, etc.

    }, [error])
    return(
        <div className="min-h-screen">
            <p>
                Error message:
                {error.message}
            </p>
           <button onClick={() => reset()}>
            Try again
           </button>
        </div>
    )
};
