import GameLayout from '@/components/GameLayout'
import React, { useEffect, useState } from 'react'
import { useStep4Context } from '@/context/Step4Context';

function getMultipleRandom(arr, num) {
	const shuffled = [...arr].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, num);
}

function Step4() {
	const Step4Context = useStep4Context();
	const [data, setData] = useState();
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		setData(getMultipleRandom(Step4Context.level, 2));
		setLoading(false);
	}, [])

	if(isLoading) return <p>Loading</p>
	return (
		<div>
			<GameLayout data={data} link="step5"/>
		</div>
	)
}


export default Step4