import React, { useState } from "react";

export default function App(): JSX.Element {
	const [title, setTitle] = useState("");
	const [counter, setCounter] = useState(0);

	import("wasm").then(module => {
		setTitle(module.office_works());
	});

	return (
		<div>
			<h3>{title}</h3>
			<span>{counter}</span>
			<br />
			<button onClick={() => setCounter(counter + 1)}>Increase</button>
			<button onClick={() => setCounter(counter - 1)}>Decrease</button>
		</div>
	);
}