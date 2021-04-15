import React, {useState} from 'react'

import PicList from './PicList'

export default function App() {
	const [piclist, setPiclist] = useState(PicList)
	const [score, setScore] = useState(0)

	const shuffle = (x) => {
		let piclist0 = [...x]
		let piclist1 = []
		while (piclist0.length > 0) {
			let i = Math.floor(Math.random() * piclist0.length)
			piclist1.push(...piclist0.splice(i, 1))
		}
		return piclist1
	}

	const handleClick = (e) => {
		if (piclist.find(x => x.name === e.target.name).clicked === false) {
			const newPiclist = piclist.map(x => x.id === parseInt(e.target.id) ? { ...x, clicked: true } : x)
			setPiclist(newPiclist)
			setScore(score + 1)
		} else {
			setScore(0)
			console.log('YOU LOSE!');
		}
	}
	
	let picArray = shuffle(piclist)

	let images = picArray.map(({ id, url, name }) => (
		<img
			key={id}
			id={id}
			src={url}
			alt={name}
			name={name}
			onClick={(e)=>handleClick(e)}
		/>
	))

	return (
		<div>
			<h2>Score: {score}</h2>
			{images}
    	</div>
  	)
}