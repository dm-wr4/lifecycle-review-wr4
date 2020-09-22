import React, {useState, useEffect} from 'react' 

const Hooks = (props) => {
    const [count, setCount] = useState(0)
    

    useEffect(() => {
        console.log('useEffect 1', count)
        setCount(count+1)
    }, [])

    useEffect(() => {
        console.log('useEffect 2', count, props.number)
    }, [count, props.number])

    console.log(count, props)
    return (
        <div>
            Hooks.js
            <button onClick={() => setCount(count+1)}>+</button>
            <button onClick={() => props.biggify()}>Biggify</button>
        </div>
    )

}

export default Hooks