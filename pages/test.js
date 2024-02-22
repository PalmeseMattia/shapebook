import GameLayout from '@/components/GameLayout'
import React, { useEffect, useState } from 'react'
import { useStep5Context } from '@/context/Step5Context';
import Image from 'next/image';
function test() {
	const livello = 5;
	const index = 0;
	const Step5Context = useStep5Context();
	const [data, setData] = useState([Step5Context.level[livello]]);
	const [isLoading, setLoading] = useState(true);
	const [img1, setImage1] = useState("");
	const [img2, setImage2] = useState("");

	useEffect(() => {
		setLoading(false);
	}, [])

	if(isLoading) return <p>Loading</p>
	return (
	<div className="relative md:w-1/2 md:h-full md:order-2 bg-orange-400 rounded-md h-2/3 flex flex-col justify-center items-center">
				<div className='relative'>
					<Image src={data[index].img} fill={false} className='object-contain' priority={true} alt={data[index].alt}></Image>
					{/* Quadratino importante */}
					<div 
						className={`absolute bg-white rounded-full`} 
						style={{ left: `${data[index].left1}%`, top: `${data[index].top1}%`, width: `${data[index].width1}%`, height: `${data[index].height1}%` }}>
							{img1 == "" 
								? <p>Stringa vuota</p> 
								: <img src={data[index].screenshot[0]}></img>}
					</div>
					<div 
						className={`absolute bg-orange-950 rounded-full`} 
						style={{ left: `${data[index].left2}%`, top: `${data[index].top2}%`,  width: `${data[index].width2}%`, height: `${data[index].height2}%` }}>
							{img2 == "" 
								? <p>Stringa vuota</p> 
								: <img src={data[index].screenshot[1]}></img>}
					</div>
				</div>
			</div>
  )
}

export default test