import React, {useEffect, useState} from "react";

export default function App(): JSX.Element {
	const [title, setTitle] = useState("");
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		import("wasm").then(module => {
			setTitle(module.greet_from_rust());
		});
	}, []);

	return (
		<div>
			<h3>{title}</h3>
			<span>{counter}</span>
			<br />
			<button onClick={() => setCounter(counter - 1)}>Decrease</button>
			<button onClick={() => setCounter(counter + 1)}>Increase</button>
		</div>
	);
}