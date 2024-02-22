import React, { useEffect, useState } from 'react'
import { useStep1Context } from '@/context/Step1Context';
import ConnectionLayout from '@/components/ConnectionLayout';
import { Howl } from 'howler';

function getMultipleRandom(arr, num) {
	const shuffled = [...arr].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, num);
}

function Step1() {
	const Step1Context = useStep1Context();
	const [data, setData] = useState();
	const [isLoading, setLoading] = useState(true)

	
	useEffect(() => {
		const sound1 = new Howl({
			src: ['/musiche/ShapeBook01.wav'],
			autoplay: true,
			loop: true,
			volume: 1.0,
		  });
		sound1.play()
		setData(Step1Context.level);	//mettere sempre le stesse 2 immagini
		setLoading(false);
		return () => {
			// Scarica entrambi i suoni quando il componente viene smontato
			sound1.unload();
		};
	}, [])

	if(isLoading) return <p>Loading</p>
	return (
		<div>
			<ConnectionLayout data={data} link="step2"/>
		</div>
	)
}


export default Step1