import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import CameraPopup from './CameraPopup';
import PlayerPopup from './PlayerPopup';
import { useState } from 'react';
import Link from 'next/link';

function GameLayout({data, link, saveResult}) {
	const [index, setIndex] = useState(0);
	const [img1, setImage1] = useState("");
	const [img2, setImage2] = useState("");
	
	return (
	<div className='h-screen w-screen flex flex-col bg-orange-300'>
		<div className="p-4 item justify-evenly flex flex-col md:flex-row md:max-w-full md:space-x-4 h-full text-2xl">
			
			
			{/* Image Container */}
			<div className="relative md:w-1/2 md:h-full md:order-2 rounded-md h-2/3 flex flex-col justify-center items-center">
				<div className='relative'>
					<Image src={data[index].img} fill={false} className='object-contain' priority={true} alt={data[index].alt}></Image>
					{/* Quadratino importante */}
					<div 
						className={`absolute bg-white rounded-full overflow-clip items-center justify-center flex`} 
						style={{ left: `${data[index].left1}%`, top: `${data[index].top1}%`, width: `${data[index].width1}%`, height: `${data[index].height1}%` }}>
							{img1 == "" 
								? <p>1</p> 
								: <img src={data[index].screenshot[0]} className='w-[180%] h-[180%] object-cover'></img>}
					</div>
					<div 
						className={`absolute bg-white rounded-full overflow-clip items-center justify-center flex`} 
						style={{ left: `${data[index].left2}%`, top: `${data[index].top2}%`,  width: `${data[index].width2}%`, height: `${data[index].height2}%` }}>
							{img2 == "" 
								? <p>2</p> 
								: <img src={data[index].screenshot[1]} className='w-[180%] h-[180%] object-cover'></img>}
					</div>
				</div>
				<div className='flex flex-row'>
					<CameraPopup setScreen={(x) => {data[index].screenshot[0] = x; setImage1(x)}}/>
					<CameraPopup setScreen={(x) => {data[index].screenshot[1] = x; setImage2(x)}}/>
				</div>
			
			</div>
			
			{/* Text and Button */}
			<div className="mt-2 h-1/2 md:w-1/2 md:h-full md:mt-0 md:order-3  rounded-md flex flex-col items-center md:p-4">
				<p className="text-white h-[70%] mt-4 md:text-4xl lg:text-6xl  w-full md:p-2 text-balance whitespace-normal overflow-scroll border-dotted border-4 border-white">{data[index].text}</p>
				{index == 0 
					? <PlayerPopup index={index} setIndex={setIndex} title="Done!"/> 
					: <Link 
						href={link} 
						onClick={() => saveResult(data)}
						className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 w-32 md:w-64 md:mt-16 justify-center items-center flex"><p>Next Stage!</p></Link>
				}
			</div>
		</div>
	</div>
	)
}

export default GameLayout