import React, { useState } from 'react';

export default function Count() {
    const [count, setCount] = useState(0)
    return (
        <> 
        <div className='main-page'>
        <>
        <h1 className='main-text'>You clicked the button {count} times</h1>
        </>
        <button onClick={() => setCount(count - 10)}>-10</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count + 10)}>+10</button>
        </div>
        </>
    )
}
