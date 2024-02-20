import { createContext, useContext, useState } from 'react';
import evo4_A from "../public/img/4_A.png";
import evo4_B from "../public/img/4_B.png";
import evo4_C from "../public/img/4_C.png";


const Step4Context = createContext();

export function Step4Provider({ children }) {
	const level = [
		{
			img:	evo4_A,
			text:	"Dopo la sua poderosissima puzzetta, Ser Lancitonto si avvia \
			soddisfatto verso la cucina, guidato da un forte odore di fagioli. In \
			cucina il calderone di Almiro è esploso, schizzando tutte le pareti \
			di essenza di fagioli purissima",
			alt:	"TODO"
		},
		{
			img:	evo4_B,
			text:	"Per il frastuono provocato dai mille specchi distrutti, il gatto \
			Boffio e la Dama Bofonia saltano giù dalla finestra. Precipitano \
			proprio su Ramina che è appena riuscita a risalire in groppa a \
			Tombolone",
			alt:	"TODO"
		},
		{
			img:	evo4_C,
			text:	"Con un colpo mal mirato, la principessa Rosetta ha spezzato \
			la magica corona del regno, che esplode distruggendo il salone. Il \
			pavimento crolla proprio sulla testa del povero Ditirello",
			alt:	"TODO"
		},
	]
	return (
		<Step4Context.Provider value={{level}}>
			{children}
		</Step4Context.Provider>
	);
}

export function useStep4Context() {
	return useContext(Step4Context);
}