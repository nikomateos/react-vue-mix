import React, { useState } from 'react'

export const ReactComponent:React.FC =()=>{

    const [count, setCounter] = useState(0)

    const onClick = () => {
        setCounter(count + 1);
    }
    return (
        <button onClick={onClick}>React Button {count}</button>
    )
}