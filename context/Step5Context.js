import { createContext, useContext, useState } from 'react';
import Conclusion_5_A from "../public/img/5_A.png";
import Conclusion_5_B from "../public/img/5_B.png";
import Conclusion_5_C from "../public/img/5_C.png";
import Conclusion_5_D from "../public/img/5_D.png";
import Conclusion_5_E from "../public/img/5_E.png";
import Conclusion_5_F from "../public/img/5_F.png";

const Step5Context = createContext();

export function Step5Provider({ children }) {
	const level = [
		{
			img:	Conclusion_5_A,
			text:	"Nonostante gli immensi disastri, il pasticcione Almiro è fiero \
					di esser riuscito a prepare la miglior torta di fagioli del reame. \
					servitori che dovranno pulire il pastrocchio non sono però \
					altrettanto contenti.",
			alt:	"TODO",
			screenshot:	[]
		},
		{
			img:	Conclusion_5_B,
			text:	"Stufa di correre dietro a Tombolone, Ramina decide di \
					lasciare il suo lavoro. Invece di continuare a fare la garzona \
					diventa l'apprendista di Boffio.",
			alt:	"TODO",
			screenshot:	[]
		},
		{
			img:	Conclusion_5_C,
			text:	"Grazie all'essenza di fagioli purissima Ser Lancitonto vince la \
			competizione \"Duello di Puzzette\", ma prima che venga \
			incoronato \"Principe Venticello\", tutti i giudici della gara \
			svengono dalla puzza.",
			alt:	"TODO",
			screenshot:	[]
		},
		{
			img:	Conclusion_5_D,
			text:	"La principessa Rosetta è terrorizzata di ammettere la sua \
			colpa. Tenta allora di ricostruire la magica corona andata in \
			frantumi con le corde del mandolino.",
			alt:	"TODO",
			screenshot:	[]
		},
		{
			img:	Conclusion_5_E,
			text:	"Dama Bofonia è rientrata nelle sue stanze e si dedica alla sua \
			attività preferita: truccare il suo gatto. Nel paraglia però, le si sono \
			rotti gli occhiali.",
			alt:	"TODO",
			screenshot:	[]
		},
		{
			img:	Conclusion_5_F,
			text:	"A causa dell'esplosione i vestiti di Ditirello si sono strappati \
			ed impolverati. Tuttavia i suoi fan sembrano apprezzare questa \
			novità.",
			alt:	"TODO",
			screenshot:	[]
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