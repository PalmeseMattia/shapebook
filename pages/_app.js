import { AppProvider } from "@/context/AppContext";
import "@/styles/globals.css";
import localFont from 'next/font/local'
import { Step1Provider } from "@/context/Step1Context";
import { Step2Provider } from "@/context/Step2Context";
import { Step3Provider } from "@/context/Step3Context";
import { Step4Provider } from "@/context/Step4Context";
import { Step5Provider } from "@/context/Step5Context";
import { Step6Provider } from "@/context/Step6Context";
 
// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './ProtestRiot-Regular.ttf' })

export default function App({ Component, pageProps }) {
	return (
	<AppProvider>
		<Step6Provider>
		<Step5Provider>
		<Step4Provider>
		<Step3Provider>
		<Step2Provider>
		<Step1Provider>
			<main className={myFont.className}>
				<Component {...pageProps}/>
			</main>
		</Step1Provider>
		</Step2Provider>
		</Step3Provider>
		</Step4Provider>
		</Step5Provider>
		</Step6Provider>
	</AppProvider>
	);
}
