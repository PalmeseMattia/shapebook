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
				<img src={data.screenshot[0]} className='w-[180%] h-[180%] object-cover'></img>
		</div>
		<div 
			className={`absolute bg-white rounded-full overflow-clip`} 
			style={{ left: `${data.left2}%`, top: `${data.top2}%`,  width: `${data.width2}%`, height: `${data.height2}%` }}>
				<img src={data.screenshot[1]} className='w-[180%] h-[180%] object-cover'></img>
		</div>
	</div>
  )
}

export default Frame