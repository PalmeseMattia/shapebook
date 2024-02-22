import { createContext, useContext, useState } from 'react';


const AppContext = createContext();

export function AppProvider({ children }) {
	const [players, setPlayers] = useState(['', '', '']);
	const [imgSrc, setImgSrc] = useState(null);
	const [result2, setResult2] = useState(null);
	const [result4, setResult4] = useState(null);
	const [result5, setResult5] = useState(null);

	const updateName = (index, newValue) => {
		setPlayers((prevArray) => {
			const newArray = [...prevArray];
			newArray[index] = newValue;
			return newArray;
		});
	};

	const addPlayer = () => {
		setPlayers((prevArray) => {
			if (prevArray.length < 6) {
				const newArray = [...prevArray];
				newArray.push("");
				return newArray;
			} else {
				return prevArray;
			}
		})
	}

	const removePlayer = () => {
		setPlayers((prevArray) => {
			if (prevArray.length > 3) {
				const newArray = [...prevArray];
				newArray.pop();
				return newArray;
			} else {
				return prevArray;
			}
	})
	}

	return (
		<AppContext.Provider 
			value={{
				players,
				updateName,
				addPlayer,
				removePlayer,
				imgSrc,
				setImgSrc,
				result2,
				setResult2,
				result4,
				setResult4,
				result5,
				setResult5
			}}>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}