import React, {useState, useEffect} from 'react'

import PicList from './PicList'
import Main from './Main'
import Sidebar from './Sidebar'

export default function App() {
	const [piclist, setPiclist] = useState(PicList)
	const [score, setScore] = useState(0)
	const [highScore, setHighScore] = useState(0)

	const shuffle = (x) => {
		let piclistA = [...x]
		let piclistB = []
		while (piclistA.length > 0) {
			let i = Math.floor(Math.random() * piclistA.length)
			piclistB.push(...piclistA.splice(i, 1))
		}
		setPiclist(piclistB)
	}

	useEffect(() => {
		shuffle(piclist)
		if (score > highScore) {
			setHighScore(highScore + 1)
		}
		// eslint-disable-next-line
	}, [score])

	const handleClick = (e) => {
		if (piclist.find(x => x.id === parseInt(e.target.id)).clicked === false) {
			const newPiclist = piclist.map(
					x => x.id === parseInt(e.target.id) ?
					{ ...x, clicked: true } :
					x
				)
			setPiclist(newPiclist)
			setScore(score + 1)
		} else {
			setScore(0)
			setPiclist(PicList)
		}
	}

	const reset = () => {
		setScore(0)
		setHighScore(0)
	}

	return (
		<div>
			<header>
				<h1>Memory Game</h1>
				<h3>Try to click on each image only once!</h3>
			</header>
			<main>
				<Sidebar
					score={score}
					highScore={highScore}
					reset={reset}
					setHighScore={setHighScore}
				/>
				<Main
					piclist={piclist}
					handleClick={handleClick}
				/>
			</main>
    	</div>
  	)
}