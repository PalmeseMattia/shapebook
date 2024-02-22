import { createContext, useContext, useState } from 'react';
import evo_4_A from "../public/img/4_A.png";
import evo_4_B from "../public/img/4_B.png";
import evo_4_C from "../public/img/4_C.png";


const Step4Context = createContext();

export function Step4Provider({ children }) {
	const level = [
		{
			img:	evo_4_A,
			text:	"Dopo la sua poderosissima puzzetta, Ser Lancitonto si avvia \
			soddisfatto verso la cucina, guidato da un forte odore di fagioli. In \
			cucina il calderone di Almiro è esploso, schizzando tutte le pareti \
			di essenza di fagioli purissima",
			alt:	"TODO",
			screenshot:	["",""],
			left1: "48",
			top1 : "39",
			width1: "8",
			height1: "12",
			left2: "65",
			top2 : "26",
			width2: "7",
			height2: "14",
		},
		{
			img:	evo_4_B,
			text:	"Per il frastuono provocato dai mille specchi distrutti, il gatto \
			Boffio e la Dama Bofonia saltano giù dalla finestra. Precipitano \
			proprio su Ramina che è appena riuscita a risalire in groppa a \
			Tombolone",
			alt:	"TODO",
			screenshot:	["",""],
			left1: "34",
			top1 : "25",
			width1: "7",
			height1: "12",
			left2: "58",
			top2 : "18",
			width2: "6",
			height2: "12",
		},
		{
			img:	evo_4_C,
			text:	"Con un colpo mal mirato, la principessa Rosetta ha spezzato \
			la magica corona del regno, che esplode distruggendo il salone. Il \
			pavimento crolla proprio sulla testa del povero Ditirello",
			alt:	"TODO",
			screenshot:	["",""],
			left1: "34",
			top1 : "44",
			width1: "11",
			height1: "14",
			left2: "65",
			top2 : "53",
			width2: "6",
			height2: "11",
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