import React from 'react'
import { useAppContext } from '@/context/AppContext';
import Frame from '@/components/Frame';
import { useStep1Context } from '@/context/Step1Context';
import { useStep3Context } from '@/context/Step3Context';
import { useStep6Context } from '@/context/Step6Context';
import ConnectionFrame from '@/components/ConnectionFrame';


function final() {
	const AppContext = useAppContext();
	const Step1Context = useStep1Context();
	const Step3Context = useStep3Context();
	const Step6Context = useStep6Context();
	const result2 = AppContext.result2;
	const result4 = AppContext.result4;
	const result5 = AppContext.result5;
	console.log(result2)
	console.log(AppContext.result2)
	if(result2 == null || result4 == null || result5 == null) return <p>loading</p>
	return (
		<div className='bg-purple-500 p-8 w-screen items-center justify-center text-4xl flex flex-col text-white'>
			{/* Intro */}
			<ConnectionFrame data={Step1Context.level[0]}/>
			<p className='p-8'>{Step1Context.level[0].text}</p>

			<ConnectionFrame data={Step1Context.level[1]}/>
			<p>{Step1Context.level[1].text}</p>

			{/* Step2 */}
			<Frame data={result2[0]}/>
			<p>{result2[0].text}</p>

			<Frame data={result2[1]}/>
			<p>{result2[1].text}</p>

			{/* Step3 */}
			<ConnectionFrame data={Step3Context.level[0]}/>
			<p>{Step3Context.level[0].text}</p>

			<ConnectionFrame data={Step3Context.level[1]}/>
			<p>{Step3Context.level[1].text}</p>

			{/* Step4 */}
			<Frame data={result4[0]}/>
			<p>{result4[0].text}</p>
			
			<Frame data={result4[1]}/>
			<p>{result4[1].text}</p>

			{/* Step5 */}
			<Frame data={result5[0]}/>
			<p>{result5[0].text}</p>

			<Frame data={result5[1]}/>
			<p>{result5[1].text}</p>

			{/* Step6 */}
			<ConnectionFrame data={Step6Context.level[0]}/>
			<p>{Step6Context.level[0].text}</p>

			<ConnectionFrame data={Step6Context.level[1]}/>
			<p>{Step6Context.level[1].text}</p>
		</div>
  	)
}

export default final