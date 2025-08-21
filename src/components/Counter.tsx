'use client'
import React, {useState} from "react";

export default function Counter() {
    const [count, setCount] = useState(0)
    const handleDecrease = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }
    return(
        <section className="flex flex-col items-center justify-center">
            <h1>This is a counter</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>
                plus
            </button>
            <button onClick={handleDecrease}>
                minus
            </button>
        </section>
    )
};
