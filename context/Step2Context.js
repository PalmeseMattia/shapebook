import { createContext, useContext, useState } from 'react';
import pre_2_A from "../public/img/2_A.png";
import pre_2_B from "../public/img/2_B.png";
import pre_2_C from "../public/img/2_C.png";
import pre_2_D from "../public/img/2_D.png";
import pre_2_E from "../public/img/2_E.png";
import pre_2_F from "../public/img/2_F.png";

const Step2Context = createContext();

export function Step2Provider({ children }) {
	const level = [
		{
			img:	pre_2_A,
			text:	"Nella cucina del castello viveva Almiro, il Mago pasticcione.\
					Mentre preparava la torta di fagioli del mercoledì, gli cadde un\
					alambicco dentro il calderone",
			alt:	"Almiro che col sedere fa cadere un alambicco nel calderone mentre inforna la torta",
			screenshot:	[],
			top1 : "47",
			left1: "14",
			width1: "10",
			height1: "15",
			top2 : "60",
			left2: "52",
			width2: "10",
			height2: "15",
		},
		{
			img:	pre_2_B,
			text:	"Nelle stalle del castello sonnecchiava Ramina, la garzona\
					dello stalliere. Ramina non si era accorta di aver lasciato aperta la\
					porta della stalla, e Tombolone, lo stallone preferito della regina,\
					ne aveva approfittato per farsi una galoppata",
			alt:	"Ramina si sveglia sulla paglia e spaventata vede Tombolone correre nel prato",
			screenshot:	[],
			top1 : "47",
			left1: "7",
			width1: "9",
			height1: "13",
			top2 : "27",
			left2: "52",
			width2: "10",
			height2: "13",
		},
		{
			img:	pre_2_C,
			text:	"Nell'arena del castello, Ser Lancitonto si allena a mangiare\
					dei fagioli. Vuole vincere il torneo di puzzette per conquistare il\
					titolo di \"Principe Venticello\" e fama imperitura",
			alt:	"Lancitonto mangia fagioli e uno Scoiattolo sviene per aver annusato la puzzetta di Lancitonto",
			screenshot:	[],
			left1: "43",
			top1 : "38",
			width1: "17",
			height1: "18",
			left2: "85",
			top2 : "49",
			width2: "8",
			height2: "12",
		},
		{
			img:	pre_2_D,
			text:	"Nel salone del castello, la Principessa Rosetta si allena di\
					nascosto con la mazza da guerra. Immagina di combattere contro\
					un feroce drago albino, ma durante la lotta colpisce per errore la\
					magica corona del regno.",
			alt:	"Dall'immaginazione di Rosetta il drago la guarda colpire per errore la corona",
			screenshot:	[],
			left1: "40",
			top1 : "40",
			width1: "17",
			height1: "16",
			left2: "45",
			top2 : "61",
			width2: "8",
			height2: "12",
		},
		{
			img:	pre_2_E,
			text:	"Nella sala degli specchi del castello, la vanitosa Dama\
					Bofonia si pavoneggia davanti al suo gigantesco riflesso. Nel\
					frattempo, Boffio, l'altezzoso gato della Dama, si specchia a fianco\
					della sua padrona, cimentandosi in bizzarre pose dinamiche",
			alt:	"Dama Bofonia si specchia e Boffio sta per andare a sbattere sullo specchio.",
			screenshot:	[],
			left1: "21",
			top1 : "42",
			width1: "11",
			height1: "16",
			left2: "74",
			top2 : "67",
			width2: "7",
			height2: "10",
		},
		{
			img:	pre_2_F,
			text:	"Nella sala degli strumenti del castello, Ditirello il menestrello\
					prova una ballata. Ad udire la sua voce sgraziata, il mandolino si\
					rifiuta di suonare.",
			alt:	"Ditirello canta molto stonato ed il mandolino non lo sopporta.",
			screenshot:	[],
			left1: "40",
			top1 : "34",
			width1: "15",
			height1: "20",
			left2: "42",
			top2 : "67",
			width2: "14",
			height2: "21",
		},
	]
	let result;
	return (
		<Step2Context.Provider value={{level, result}}>
			{children}
		</Step2Context.Provider>
	);
}

export function useStep2Context() {
	return useContext(Step2Context);
}