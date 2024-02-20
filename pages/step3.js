import React, { useEffect, useState } from 'react'
import { useStep3Context } from '@/context/Step3Context';
import ConnectionLayout from '@/components/ConnectionLayout';

function getMultipleRandom(arr, num) {
	const shuffled = [...arr].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, num);
}

function step3() {
	const Step3Context = useStep3Context();
	const [data, setData] = useState();
	const [isLoading, setLoading] = useState(true)
	
	useEffect(() => {
		setData(Step3Context.level);	//mettere sempre le stesse 2 immagini
		setLoading(false);
	}, [])

	if(isLoading) return <p>Loading</p>
	return (
		<div>
			<ConnectionLayout data={data} link="step4"/>
		</div>
	)
}


export default step3