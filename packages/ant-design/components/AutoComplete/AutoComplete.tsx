import React, { useCallback, useState } from 'react'

const AutoComplete = () => {
    function debounce(fn, wait) {
        let timer;
        return (...args) => {
            clearTimeout(timer)
            timer = setTimeout(() => fn(...args), wait);
        }
    }
    const debunleInput = useCallback(debounce(onInput, 300), [])

    function onInput(event) {
        setList(data.filter(item => item.includes(event.target.value)));
    }
    const data = ['111', '222', '12211', '444', '333'];
    const [list, setList] = useState([]);

    return (
        <>
            <input type="txte" onChange={debunleInput} />
            <ul>
                {list.map((item: string, index: number) => { return <li key={index}>{item}</li> })}
            </ul>
        </>
    )
}

export default AutoComplete;