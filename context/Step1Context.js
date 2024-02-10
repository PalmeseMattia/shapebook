import { createContext, useContext, useState } from 'react';
import almiro from "../public/img/almiro.png";
import ramina from "../public/img/ramina.png";
import lancitonto from "../public/img/lancitonto.png";
import rosetta from "../public/img/rosetta.png";
import bofonia from "../public/img/bofonia.png";
import ditirello from "../public/img/ditirello.png";

const Step1Context = createContext();

export function Step1Provider({ children }) {
	const level = [
		{
			img:	almiro,
			text:	"Nella cucina del castello viveva Almiro, il Mago pasticcione.\
					Mentre preparava la torta di fagioli del mercoledì, gli cadde un\
					alambicco dentro il calderone",
			alt:	"Almiro che col sedere fa cadere un alambicco nel calderone mentre inforna la torta"
		},
		{
			img:	ramina,
			text:	"Nelle stalle del castello sonnecchiava Ramina, la garzona\
					dello stalliere. Ramina non si era accorta di aver lasciato aperta la\
					porta della stalla, e Tombolone, lo stallone preferito della regina,\
					ne aveva approfittato per farsi una galoppata",
			alt:	"Ramina si sveglia sulla paglia e spaventata vede Tombolone correre nel prato"
		},
		{
			img:	lancitonto,
			text:	"Nell'arena del castello, Ser Lancitonto si allena a mangiare\
					dei fagioli. Vuole vincere il torneo di puzzette per conquistare il\
					titolo di \"Principe Venticello\" e fama imperitura",
			alt:	"Lancitonto mangia fagioli e uno Scoiattolo sviene per aver annusato la puzzetta di Lancitonto"
		},
		{
			img:	rosetta,
			text:	"Nel salone del castello, la Principessa Rosetta si allena di\
					nascosto con la mazza da guerra. Immagina di combattere contro\
					un feroce drago albino, ma durante la lotta colpisce per errore la\
					magica corona del regno.",
			alt:	"Dall'immaginazione di Rosetta il drago la guarda colpire per errore la corona"
		},
		{
			img:	bofonia,
			text:	"Nella sala degli specchi del castello, la vanitosa Dama\
					Bofonia si pavoneggia davanti al suo gigantesco riflesso. Nel\
					frattempo, Boffio, l'altezzoso gato della Dama, si specchia a fianco\
					della sua padrona, cimentandosi in bizzarre pose dinamiche",
			alt:	"Dama Bofonia si specchia e Boffio sta per andare a sbattere sullo specchio."
		},
		{
			img:	ditirello,
			text:	"Nella sala degli strumenti del castello, Ditirello il menestrello\
					prova una ballata. Ad udire la sua voce sgraziata, il mandolino si\
					rifiuta di suonare.",
			alt:	"Ditirello canta molto stonato ed il mandolino non lo sopporta."
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