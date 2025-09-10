import { useState, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("ini adalah useEffect");
    }, [count]);

    function handleClick() {
        const newCount = count + 1;
        setCount(newCount);
        console.log(count);
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={handleClick}>Tambah</button>
        </>
    );
}