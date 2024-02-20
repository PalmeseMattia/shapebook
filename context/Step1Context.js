import { createContext, useContext, useState } from 'react';
import intro_1_A from "../public/img/1_Intro_A.jpg";
import intro_1_B from "../public/img/1_Intro_B.png";

const Step1Context = createContext();

export function Step1Provider({ children }) {
	const level = [
		{
			img:	intro_1_A,
			text:	"C'era una volta, in un regno ricco di fiumi e verde di \
			boschi, un grande castello di Zucchero e Glassa.",
			alt:	"TODO"
		},
		{
			img:	intro_1_B,
			text:	"La regina, una \
			strega buona e potente, governava con giustizia.",
			alt:	"TODO"
		},
	]
	return (
		<Step1Context.Provider value={{level}}>
			{children}
		</Step1Context.Provider>
	);
}

export function useStep1Context() {
	return useContext(Step1Context);
}