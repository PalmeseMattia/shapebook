import { createContext, useContext, useState } from 'react';
import connect_3_A from "../public/img/3_raccordo_A.jpg";
import connect_3_B from "../public/img/3_raccordo_B.png";

const Step3Context = createContext();

export function Step3Provider({ children }) {
	const level = [
		{
			img:	connect_3_A,
			text:	"Una gigantesca esplosione sconvolge la quiete \
			del castello di Zucchero",
			alt:	"Almiro che col sedere fa cadere un alambicco nel calderone mentre inforna la torta"
		},
		{
			img:	connect_3_B,
			text:	"Presa alla sprovvista, la Regina rotola giù \
			dal trono e si arrabbia quando tutti i nobili scoppiano a ridere nel \
			vedere le sue mutande con dei cagnolini.",
			alt:	"Ramina si sveglia sulla paglia e spaventata vede Tombolone correre nel prato"
		},
	]
	return (
		<Step3Context.Provider value={{level}}>
			{children}
		</Step3Context.Provider>
	);
}

export function useStep3Context() {
	return useContext(Step3Context);
}