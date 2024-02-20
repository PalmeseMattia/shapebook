import { createContext, useContext, useState } from 'react';
import Ending_6_A from "../public/img/6_finale_A.png";
import Ending_6_B from "../public/img/6_finale_B.png";

const Step6Context = createContext();

export function Step6Provider({ children }) {
	const level = [
		{
			img:	Ending_6_A,
			text:	"La regina emana un decreto reale:",
			alt:	"TODO"
		},
		{
			img:	Ending_6_B,
			text:	" Da oggi tutti \
			dovranno indossare le mutande con i cagnolini!",
			alt:	"TODO"
		},
	]
	return (
		<Step6Context.Provider value={{level}}>
			{children}
		</Step6Context.Provider>
	);
}

export function useStep6Context() {
	return useContext(Step6Context);
}