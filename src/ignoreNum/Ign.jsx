import { useState } from "react"

export const Ign = () => {

    const [tries, setTries] = useState(0)
    const [num, setNum] = useState(Math.floor(Math.random() * 1000))
    const [message, setMessage] = useState("")
    const [value, setValue] = useState("")
    console.log(num)

    const restart = () => {
        setNum(Math.floor(Math.random() * 1000))
        setTries(0)
        setMessage("")
    }

    const check = (e) => {
        setTries(tries + 1)
        if (tries < 10)
            if (e > num)
                setMessage("biggest...")
            else
                setMessage("less...")
    }
//יייייייי
    return <>
        <h1>Welcom to the game!!</h1>
        <h6>You need to put a number to guess the num</h6>
        {tries < 10 && num!=value ? <>
            <input placeholder="Input a number from 1 to 1000 and press OK" onBlur={(e) => setValue(+e.currentTarget.value)}></input>
            <button onClick={() => check(value)}>OK</button>
            {num != value && <h3>{message}</h3>}
        </>
            : tries>=10 && <h1>YouLose!! your chance has passed! you geusse more than ten guesses!
                The number was {num}. You  can try again...</h1>
        }
        {num == value && <h1>Good!!! you did it!! the num of your guesses is {tries}</h1>}
        <button onClick={restart}>For start a new game click here</button>
    </>
}