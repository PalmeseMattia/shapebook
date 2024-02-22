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
	return (
		<div>
			<Frame data={result2}/>
		</div>
  	)
}

export default final