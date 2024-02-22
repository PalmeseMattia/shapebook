import React from 'react'
import {Modal, Box } from '@mui/material';

function PlayerPopup({index, setIndex, title}) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false)
		setIndex(1);
	};

	return(
		<div className=' flexjustify-center items-center'>
			<button 
				onClick={handleOpen} 
				className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 w-32 md:w-64 md:mt-16">
				<p>{title}</p>
			</button>
			<Modal
				open={open}
				onClose={handleClose}
				className='h-full w-full flex items-center justify-center p-4'
			>
				<div className="flex flex-col items-center justify-center p-12 bg-slate-100 rounded-2xl">
	  				<p>Passa il telefono</p>
				</div>
			</Modal>
		</div>
	)
}


export default PlayerPopup