import React from 'react'

export default function Sidebar({score, highScore, reset}) {
    return (
        <div className='sidebar'>
            <h2>Score: {score}</h2>
            <h2>High Score: {highScore}</h2>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
