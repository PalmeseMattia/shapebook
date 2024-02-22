import { createContext, useContext, useState } from 'react';
import conclusion_5_A from "../public/img/5_A.png";
import conclusion_5_B from "../public/img/5_B.png";
import conclusion_5_C from "../public/img/5_C.png";
import conclusion_5_D from "../public/img/5_D.png";
import conclusion_5_E from "../public/img/5_E.png";
import conclusion_5_F from "../public/img/5_F.png";

const Step5Context = createContext();

export function Step5Provider({ children }) {
	const level = [
		{
			img:	conclusion_5_A,
			text:	"Nonostante gli immensi disastri, il pasticcione Almiro è fiero \
					di esser riuscito a prepare la miglior torta di fagioli del reame. \
					servitori che dovranno pulire il pastrocchio non sono però \
					altrettanto contenti.",
			alt:	"TODO",
			screenshot:	[],
			left1: "41",
			top1 : "47",
			width1: "7",
			height1: "11",
			left2: "54",
			top2 : "47",
			width2: "8",
			height2: "12",
		},
		{
			img:	conclusion_5_B,
			text:	"Stufa di correre dietro a Tombolone, Ramina decide di \
					lasciare il suo lavoro. Invece di continuare a fare la garzona \
					diventa l'apprendista di Boffio.",
			alt:	"TODO",
			screenshot:	[],
			left1: "36",
			top1 : "79",
			width1: "9",
			height1: "12",
			left2: "42",
			top2 : "22",
			width2: "16",
			height2: "16",
		},
		{
			img:	conclusion_5_C,
			text:	"Grazie all'essenza di fagioli purissima Ser Lancitonto vince la \
			competizione \"Duello di Puzzette\", ma prima che venga \
			incoronato \"Principe Venticello\", tutti i giudici della gara \
			svengono dalla puzza.",
			alt:	"TODO",
			screenshot:	[],
			left1: "36",
			top1 : "79",
			width1: "9",
			height1: "12",
			left2: "51",
			top2 : "22",
			width2: "5",
			height2: "9",
		},
		{
			img:	conclusion_5_D,
			text:	"La principessa Rosetta è terrorizzata di ammettere la sua \
			colpa. Tenta allora di ricostruire la magica corona andata in \
			frantumi con le corde del mandolino.",
			alt:	"TODO",
			screenshot:	[],
			left1: "46",
			top1 : "32",
			width1: "16",
			height1: "18",
			left2: "44",
			top2 : "74",
			width2: "16",
			height2: "18",
		},
		{
			img:	conclusion_5_E,
			text:	"Dama Bofonia è rientrata nelle sue stanze e si dedica alla sua \
			attività preferita: truccare il suo gatto. Nel paraglia però, le si sono \
			rotti gli occhiali.",
			alt:	"TODO",
			screenshot:	[],
			left1: "33",
			top1 : "37",
			width1: "9",
			height1: "16",
			left2: "55",
			top2 : "22",
			width2: "14",
			height2: "18",
		},
		{
			img:	conclusion_5_F,
			text:	"A causa dell'esplosione i vestiti di Ditirello si sono strappati \
			ed impolverati. Tuttavia i suoi fan sembrano apprezzare questa \
			novità.",
			alt:	"TODO",
			screenshot:	[],
			left1: "40",
			top1 : "24",
			width1: "12",
			height1: "18",
			left2: "78",
			top2 : "72",
			width2: "6",
			height2: "9",
		},
	]
	return (
		<Step5Context.Provider value={{level}}>
			{children}
		</Step5Context.Provider>
	);
}

export function useStep5Context() {
	return useContext(Step5Context);
}