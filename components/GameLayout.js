import React from 'react';
import Image from 'next/image';
import CameraPopup from './CameraPopup';

function GameLayout({data}) {

	return (
	<div className='h-screen w-screen flex flex-col'>
		<div className="p-4 item justify-evenly bg-white flex flex-col md:flex-row md:max-w-full md:space-x-4 h-full text-2xl">
			{/* Image Container */}
			<div className="md:w-1/2 md:h-full md:order-2 bg-orange-400 rounded-md h-2/3 flex flex-col justify-center items-center">
				<Image src={data.img} fill={false} className='object-contain' priority={true} alt={data.alt}></Image>
				<div className='flex flex-row'>
					<CameraPopup/>
					<CameraPopup/>
				</div>
			</div>
			{/* Text and Button */}
			<div className="mt-2 h-1/2 md:w-1/2 md:h-full md:mt-0 md:order-3 bg-green-400 rounded-md flex flex-col items-center md:p-4">
				<p className="text-white h-[70%] mt-4 md:text-4xl lg:text-6xl bg-red-400 w-full md:p-2 text-balance">{data.text}</p>
				<button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 w-32 md:w-64 md:mt-16">Go on</button>
			</div>
    	</div>
	</div>
	)
}

export default GameLayout