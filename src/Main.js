import React from 'react'

export default function Main({piclist, handleClick}) {
    
    let images = piclist.map(({ id, url, name }) => (
		<div className='single_pic_div' key={id}>
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
        <div className='all_pics_div'>
			{images}
		</div>
    )
}
