import { useAppContext } from '@/context/AppContext';
import React from 'react'

function startgame() {
	const AppContext = useAppContext();
	const handleInputChange = (index, event) => {
		const newValue = event.target.value;
		AppContext.updateName(index, newValue);
		console.log(AppContext.players);
	  };

	return (
	<div className='w-screen h-screen bg-slate-600 flex flex-col items-center justify-center'>
		{AppContext.players.map((str, index) => (
    		<div key={index} className='m-4 flex flex-row'>
            	<p>{index + 1}</p>
            	<input
              		type="text"
              		value={str}
              		onChange={(event) => handleInputChange(index, event)}
            	/>
        	</div>
      	))}
		<button onClick={AppContext.addPlayer}>+</button>
		<button onClick={AppContext.removePlayer}>-</button>
	</div>
	)
}

export default startgame;