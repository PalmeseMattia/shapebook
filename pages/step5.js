import GameLayout from '@/components/GameLayout'
import React, { useEffect, useState } from 'react'
import { useStep5Context } from '@/context/Step5Context';

function getMultipleRandom(arr, num) {
	const shuffled = [...arr].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, num);
}

function Step5() {
	const Step5Context = useStep5Context();
	const [data, setData] = useState();
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		setData(getMultipleRandom(Step5Context.level, 2));	
		setLoading(false);
	}, [])

	if(isLoading) return <p>Loading</p>
	return (
		<div>
			<GameLayout data={data} link="step6"/>
		</div>
	)
}


export default Step5