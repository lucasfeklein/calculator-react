import { useState } from "react"

export default function Calculator() {

    const [display, setDisplay] = useState('')
    const [oldDisplay, setOldDisplay] = useState('')
    const [operator, setOperator] = useState('')
    // set aux to true when an operator is clicked to start a new string of number instead of reseting display to '0' everytime
    const [aux, setAux] = useState(false)
    const [equation, setEquation] = useState('')

    function handleClick(e) {

        const value = e.target.innerText

        if (value === 'C') {
            setDisplay('')
            setOldDisplay('')
            setOperator('')
            setEquation('')
        } else if (value === "←") {
            setDisplay(display.slice(0, -1))
        } else if (value === '+') {
            setOldDisplay(display)
            setOperator('+')
            setAux(true)
        } else if (value === '×') {
            setOldDisplay(display)
            setOperator('×')
            setAux(true)
        } else if (value === '÷') {
            setOldDisplay(display)
            setOperator('÷')
            setAux(true)
        } else if (value === '-') {
            setOldDisplay(display)
            setOperator('-')
            setAux(true)
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
            setOperator('=')
            setAux(true)
            setEquation(prevEquation => {
                if (equation === '' && operator !== '=') {
                    return setEquation(`${oldDisplay} ${operator} ${display} =`)
                } else if (operator !== '=') {
                    return setEquation(`${prevEquation.slice(0, -1)} ${operator} ${display} =`)
                } else {
                    return ''
                }
            })
        } else if (display[0] === '0') {
            setDisplay(display.substring(1) + value)
        } else {
            if (aux === true && operator === '=') {
                setDisplay(value)
                setAux(false)
                setEquation('')
            } else if (aux === true) {
                setDisplay(value)
                setAux(false)
            } else {
                setDisplay(prevDisplay => prevDisplay + value)
            }
        }
    }

    return (
        <div className="calculator-container">
            <div className="screen">
                {equation && <span className="equation">{equation}</span>}
                <span>{display ? display : 0}</span>
            </div>
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