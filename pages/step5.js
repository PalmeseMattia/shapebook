import GameLayout from '@/components/GameLayout'
import React, { useEffect, useState } from 'react'
import { useStep5Context } from '@/context/Step5Context';
import { useAppContext } from '@/context/AppContext';

function getMultipleRandom(arr, num) {
	const shuffled = [...arr].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, num);
}

function Step5() {
	const AppContext = useAppContext();
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
			<GameLayout data={data} link="step6"   saveResult={(d) => AppContext.setResult5(d)}/>
		</div>
	)
}


export default Step5