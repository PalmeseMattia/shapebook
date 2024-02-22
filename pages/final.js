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
			<p>{result2[0].text}</p>

			<Frame data={result2[1]}/>
			<p>{result2[1].text}</p>
			
			<Frame data={result4[0]}/>
			<p>{result4[0].text}</p>
			
			<Frame data={result4[1]}/>
			<p>{result4[1].text}</p>
			
			<Frame data={result5[0]}/>
			<p>{result5[0].text}</p>

			<Frame data={result5[1]}/>
			<p>{result5[1].text}</p>
		</div>
  	)
}

export default final