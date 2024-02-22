import GameLayout from '@/components/GameLayout'
import React, { useEffect, useState } from 'react'
import { useStep2Context } from '@/context/Step2Context';
import { useAppContext } from '@/context/AppContext';

function getMultipleRandom(arr, num) {
	const shuffled = [...arr].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, num);
}

function step2() {
	const Step2Context = useStep2Context();
	const AppContext = useAppContext();
	const [data, setData] = useState();
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		setData(getMultipleRandom(Step2Context.level, 2));	
		setLoading(false);
	}, [])

	if(isLoading) return <p>Loading</p>
	return (
		<div>
			<GameLayout data={data} link="step3" saveResult={(d) => AppContext.setResult2(d)}/>
		</div>
	)
}


export default step2