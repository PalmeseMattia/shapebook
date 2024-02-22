import React from 'react';
import { Button, Modal, Box } from '@mui/material';
import Webcam from 'react-webcam';
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';
import camera from "../public/camera.svg";

function CameraPopup({setScreen}) {
	const AppContext = useAppContext();
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return(
		<div className=' flexjustify-center items-center'>
			<Button onClick={handleOpen}>
				<Image src={camera} className='object-contain h-1/6' alt='tasto per scattare una foto'/>
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				className='h-full w-full flex items-center justify-center p-4'
			>
				<Box className="flex flex-col items-center justify-center p-12 bg-slate-100 rounded-2xl">
	  				<Webcam
	    				audio={false}
	    				screenshotFormat="image/jpeg"	
						mirrored={true}
	  				>
	    			{({ getScreenshot }) => (
	    				<button
	    					onClick={() => {
	    						setScreen(getScreenshot());
								handleClose();
	    				}}
	    				>
							<div className='flex flex-row items-center'>
								<Image src={camera} className='object-contain h-1/6' alt='tasto per scattare una foto'/>
								<div className='h-20 w-20 bg-red-400 text-white items-center justify-center flex rounded-full'>
									<button onClick={handleClose} className='w-full h-full'>Chiudi</button>
								</div>
							</div>
						</button>
	    			)}
	  				</Webcam>
				</Box>
			</Modal>
		</div>
	)
}

export default CameraPopup;