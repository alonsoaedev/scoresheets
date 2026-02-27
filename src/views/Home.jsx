import { useState } from 'react'

export default function Home() {
    const [count, setCount] = useState(0)
    
    return <>
        <h1>Scoresheet</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
}