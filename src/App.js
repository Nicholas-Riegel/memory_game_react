import React, {useState} from 'react'

import PicList from './PicList'

export default function App() {
	const [piclist, setPiclist] = useState(PicList)
	const [score, setScore] = useState(0)

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

	let images = piclist.map(({ id, url, name }) => (
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
			<h2>Score: { score }</h2>
			{images}
    	</div>
  	)
}