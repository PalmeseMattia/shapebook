import React from 'react'
import Image from 'next/image'

function ConnectionFrame({data}) {
  return (
	<div>
		<Image src={data.img} fill={false} className='object-contain' priority={true} alt=""></Image>
	</div>
  )
}

export default ConnectionFrame