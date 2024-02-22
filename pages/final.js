import React from 'react'
import { useAppContext } from '@/context/AppContext';
import Frame from '@/components/Frame';


function final() {
	const AppContext = useAppContext();
	const result2 = AppContext.result2;
	const result4 = AppContext.result4;
	const result5 = AppContext.result5;
	console.log(result2)
	console.log(AppContext.result2)
	if(result2 == null || result4 == null || result5 == null) return <p>loading</p>
	return (
		<div className='bg-purple-500 p-8 w-screen items-center justify-center'>
			<Frame data={result2[0]}/>
			<Frame data={result2[1]}/>
			<Frame data={result4[0]}/>
			<Frame data={result4[1]}/>
			<Frame data={result5[0]}/>
			<Frame data={result5[1]}/>
		</div>
  	)
}

export default final