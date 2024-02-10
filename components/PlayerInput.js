import { useAppContext } from '@/context/AppContext'
import React from 'react'
import Image from 'next/image';
import inputbg from "../public/inputbg.svg";

function PlayerInput({players}) {
	const AppContext = useAppContext();
	const handleInputChange = (index, event) => {
		const newValue = event.target.value;
		AppContext.updateName(index, newValue);
	};
	
	return (
		<div className='w-full flex flex-col'>
			{players.map((p, index) => (
				<input key={index} className="my-8 w-full max-w-lg" type="text" value={p} onChange={(e) => handleInputChange(index, e)}/>
					)
				)
			}
		</div>
	)
}

export default PlayerInput