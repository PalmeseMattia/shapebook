import React, { useEffect, useState } from 'react'
import { useStep1Context } from '@/context/Step1Context';
import ConnectionLayout from '@/components/ConnectionLayout';

function getMultipleRandom(arr, num) {
	const shuffled = [...arr].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, num);
}

function Step1() {
	const Step1Context = useStep1Context();
	const [data, setData] = useState();
	const [isLoading, setLoading] = useState(true)
	
	useEffect(() => {
		setData(Step1Context.level);	//mettere sempre le stesse 2 immagini
		setLoading(false);
	}, [])

	if(isLoading) return <p>Loading</p>
	return (
		<div>
			<ConnectionLayout data={data} link="step2"/>
		</div>
	)
}


export default Step1