import React, { useEffect, useState } from 'react'
import { useStep6Context } from '@/context/Step6Context';
import ConnectionLayout from '@/components/ConnectionLayout';
import { Howl } from 'howler';

function getMultipleRandom(arr, num) {
	const shuffled = [...arr].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, num);
}

function Step6() {
	const Step6Context = useStep6Context();
	const [data, setData] = useState();
	const [isLoading, setLoading] = useState(true)
	
	useEffect(() => {
		const sound1 = new Howl({
			src: ['/musiche/Shape-Book-06.wav'],
			autoplay: true,
			loop: true,
			volume: 1.0,
		  });
		sound1.play();
		setData(Step6Context.level);	//mettere sempre le stesse 2 immagini
		setLoading(false);
		return () => {
			// Scarica entrambi i suoni quando il componente viene smontato
			sound1.unload();
		};
	}, [])

	if(isLoading) return <p>Loading</p>
	return (
		<div>
			<ConnectionLayout data={data} link="final"/>
		</div>
	)
}


export default Step6