import React from 'react'

export default function Main({piclist, handleClick}) {
    
    let images = piclist.map( ({ id, url, name, clicked }) => (
		<div
			className='single_pic_div'
			key={id}
			id={id}
			name={name}
			onClick={(e) => handleClick(e)}
			// style={clicked === true ? { background: 'grey' } : { background: 'none' }}
			>
			<img
				id={id}
				src={url}
				alt={name}
			/>
		</div>
	))

    return (
        <div className='all_pics_div'>
			{images}
		</div>
    )
}
