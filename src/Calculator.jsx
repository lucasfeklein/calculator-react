import { useState } from "react"

export default function Calculator() {

    const [display, setDisplay] = useState('0')
    const [oldDisplay, setOldDisplay] = useState('0')
    const [operator, setOperator] = useState()

    function handleClick(e) {

        const value = e.target.innerText

        if (value === 'C') {
            setDisplay('0')
            setOldDisplay('0')
        } else if (value === "←") {
            setDisplay(display.slice(0, -1))
        } else if (value === '+') {
            setOldDisplay(display)
            setOperator('+')
            setDisplay('0')
        } else if (value === '×') {
            setOldDisplay(display)
            setOperator('×')
            setDisplay('0')
        } else if (value === '÷') {
            setOldDisplay(display)
            setOperator('/')
            setDisplay('0')
        } else if (value === '-') {
            setOldDisplay(display)
            setOperator('-')
            setDisplay('0')
        } else if (value === '=') {
            if (operator === '+') {
                setDisplay(Number(display) + Number(oldDisplay))
            } else if (operator === '×') {
                setDisplay(Number(display) * Number(oldDisplay))
            } else if (operator === '-') {
                setDisplay(Number(oldDisplay) - Number(display))
            } else if (operator === '÷') {
                setDisplay(Number(oldDisplay) / Number(display))
            }
        } else if (display[0] === '0') {
            setDisplay(display.substring(1) + value)
        } else {
            setDisplay(prevDisplay => prevDisplay + value)
        }
    }

    return (
        <div className="calculator-container">
            <div className="screen">{display ? display : 0}</div>
            <button onClick={handleClick} className="c-button">C</button>
            <button onClick={handleClick}>&larr;</button>
            <button onClick={handleClick} className="operator">&divide;</button>
            <button onClick={handleClick}>7</button>
            <button onClick={handleClick}>8</button>
            <button onClick={handleClick}>9</button>
            <button onClick={handleClick} className="operator">&times;</button>
            <button onClick={handleClick}>4</button>
            <button onClick={handleClick}>5</button>
            <button onClick={handleClick}>6</button>
            <button onClick={handleClick} className="operator">-</button>
            <button onClick={handleClick}>1</button>
            <button onClick={handleClick}>2</button>
            <button onClick={handleClick}>3</button>
            <button onClick={handleClick} className="operator">+</button>
            <button onClick={handleClick} className="zero-button">0</button>
            <button onClick={handleClick} className="operator">=</button>
        </div>
    )
}