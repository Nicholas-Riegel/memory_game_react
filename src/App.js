import React, {useState, useEffect} from 'react'

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
		setPiclist(piclist1)
	}

	useEffect(() => {
		shuffle(piclist)
	}, [score])

	const handleClick = (e) => {
		if (piclist.find(x => x.name === e.target.name).clicked === false) {
			const newPiclist = piclist.map(x => x.id === parseInt(e.target.id) ? { ...x, clicked: true } : x)
			setPiclist(newPiclist)
			setScore(score + 1)
		} else {
			setScore(0)
			setPiclist(PicList)
			console.log('YOU LOSE!');
		}
	}

	let images = piclist.map(({ id, url, name }) => (
		<div className='single_pic_div'>
			<img
				key={id}
				id={id}
				src={url}
				alt={name}
				name={name}
				onClick={(e)=>handleClick(e)}
			/>
		</div>
	))

	return (
		<div className='main'>
			<h2>Score: {score}</h2>
			<div className='all_pics_div'>
				{images}
			</div>
    	</div>
  	)
}