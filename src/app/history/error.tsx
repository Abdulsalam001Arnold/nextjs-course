'use client'

import { useEffect } from "react"

export default function Error({error, reset}: {error: Error, reset: () => void}) {
    useEffect(() => {
        console.error("Error in dashboard:", error);
    }, [error])
    return(
        <div className="text-center">
            <p className="text-red-600">Something went wrong!</p>
            <button onClick={() => reset()}>
                Try again
            </button>
        </div>
    )
};
