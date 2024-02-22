import React, { useEffect, useState } from 'react'
import { useStep3Context } from '@/context/Step3Context';
import ConnectionLayout from '@/components/ConnectionLayout';
import { Howl } from 'howler';

function getMultipleRandom(arr, num) {
	const shuffled = [...arr].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, num);
}

function step3() {
	const Step3Context = useStep3Context();
	const [data, setData] = useState();
	const [isLoading, setLoading] = useState(true)
	
	useEffect(() => {
		const sound1 = new Howl({
			src: ['/musiche/Shape-Book-03.wav'],
			autoplay: true,
			loop: true,
			volume: 1.0,
		  });
		sound1.play()
		setData(Step3Context.level);	//mettere sempre le stesse 2 immagini
		setLoading(false);
		return () => {
			// Scarica entrambi i suoni quando il componente viene smontato
			sound1.unload();
		};
	}, [])

	if(isLoading) return <p>Loading</p>
	return (
		<div>
			<ConnectionLayout data={data} link="step4"/>
		</div>
	)
}


export default step3