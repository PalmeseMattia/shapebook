import { AppProvider } from "@/context/AppContext";
import "@/styles/globals.css";
import localFont from 'next/font/local'
import { Step1Provider } from "@/context/Step1Context";
 
// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './ProtestRiot-Regular.ttf' })

export default function App({ Component, pageProps }) {
	return (
	<AppProvider>
		<Step1Provider>
			<main className={myFont.className}>
				<Component {...pageProps}/>
			</main>
		</Step1Provider>
	</AppProvider>
	);
}
