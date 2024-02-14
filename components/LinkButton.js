import React, { Children } from 'react'
import Link from 'next/link'

function LinkButton({onClick, text, link}) {
	return (
	<button 
		onClick={onClick} 
		className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 w-32 md:w-64 md:mt-16">
		<p>{text}</p>
		<Link href={link}/>
	</button>
	)
}

export default LinkButton