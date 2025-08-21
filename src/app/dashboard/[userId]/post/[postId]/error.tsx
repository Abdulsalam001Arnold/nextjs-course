
'use client'

import { useEffect } from "react"

export default function Error({error, reset}: {error: Error, reset: () => void}) {
    
    useEffect(() => {
        console.log('Error has occured:', error)
    }, [error])

    return(
        <div className="">
            <h1>
                Something went wrong!
            </h1>

            <p>
                {error.message}
            </p>

            <button
            onClick={() => reset()}
            >
                Try again
            </button>
        </div>
    )
};
