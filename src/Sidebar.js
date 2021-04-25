import React from 'react'

export default function Sidebar({
    score,
    highScore,
    reset,
    setHighScore
}) {
    return (
        <div className='sidebar'>
            {score === 12 ? <h2>You Win!</h2> : <h2>Score: {score}</h2> }
            {score === 12 ? (setHighScore(0), <h2>Maximum score (12) achieved!</h2>) : <h2>High Score: {highScore}</h2>}
            <button onClick={reset}>Reset</button>
        </div>
    )
}
