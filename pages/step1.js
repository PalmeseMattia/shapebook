import GameLayout from '@/components/GameLayout'
import React, { useEffect, useState } from 'react'
import { useStep1Context } from '@/context/Step1Context';

function getMultipleRandom(arr, num) {
	const shuffled = [...arr].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, num);
  }

function step1() {
	const Step1Context = useStep1Context();
	const [data, setData] = useState();
	const [isLoading, setLoading] = useState(true)
	
	useEffect(() => {
		setData(getMultipleRandom(Step1Context.level, 2));	
		setLoading(false);
	}, [])

	if(isLoading) return <p>Loading</p>
	return (
		<div>
			<GameLayout data={data[0]}/>
		</div>
	)
}


export default step1 