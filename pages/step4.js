import GameLayout from '@/components/GameLayout'
import React, { useEffect, useState } from 'react'
import { useStep4Context } from '@/context/Step4Context';
import { useAppContext } from '@/context/AppContext';
import { Howl } from 'howler';

function getMultipleRandom(arr, num) {
	const shuffled = [...arr].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, num);
}

function Step4() {
	const AppContext = useAppContext();
	const Step4Context = useStep4Context();
	const [data, setData] = useState();
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const sound1 = new Howl({
			src: ['/musiche/Shape-Book-04.wav'],
			autoplay: true,
			loop: true,
			volume: 1.0,
		  });
		sound1.play();
		setData(getMultipleRandom(Step4Context.level, 2));
		setLoading(false);
		return () => {
			// Scarica entrambi i suoni quando il componente viene smontato
			sound1.unload();
		};
	}, [])

	if(isLoading) return <p>Loading</p>
	return (
		<div>
			<GameLayout data={data} link="step5"  saveResult={(d) => AppContext.setResult4(d)}/>
		</div>
	)
}


export default Step4