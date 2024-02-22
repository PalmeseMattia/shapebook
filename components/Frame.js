import React from 'react'
import Image from 'next/image'

function Frame({data}) {
  return (
	<div className='relative'>
		<Image src={data.img} fill={false} className='object-contain' priority={true} alt=""></Image>
		{/* Quadratino importante */}
		<div 
			className={`absolute bg-white rounded-full overflow-clip`} 
			style={{ left: `${data.left1}%`, top: `${data.top1}%`, width: `${data.width1}%`, height: `${data.height1}%` }}>
				{img1 == "" 
					? <p>o</p> 
					: <img src={data.screenshot[0]} className='w-[120%] h-[120%] object-cover'></img>}
		</div>
		<div 
			className={`absolute bg-orange-950 rounded-full overflow-clip`} 
			style={{ left: `${data.left2}%`, top: `${data.top2}%`,  width: `${data.width2}%`, height: `${data.height2}%` }}>
				{img2 == "" 
					? <p>o</p> 
					: <img src={data.screenshot[1]} className='w-[100%] h-[100%] object-cover'></img>}
		</div>
	</div>
  )
}

export default Frame