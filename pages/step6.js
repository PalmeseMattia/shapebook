import React, { useEffect, useState } from 'react'
import { useStep6Context } from '@/context/Step6Context';
import ConnectionLayout from '@/components/ConnectionLayout';

function getMultipleRandom(arr, num) {
	const shuffled = [...arr].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, num);
}

function Step6() {
	const Step6Context = useStep6Context();
	const [data, setData] = useState();
	const [isLoading, setLoading] = useState(true)
	
	useEffect(() => {
		setData(Step6Context.level);	//mettere sempre le stesse 2 immagini
		setLoading(false);
	}, [])

	if(isLoading) return <p>Loading</p>
	return (
		<div>
			<ConnectionLayout data={data} link="final"/>
		</div>
	)
}


export default Step6