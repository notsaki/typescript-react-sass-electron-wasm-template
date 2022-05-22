import React, { useEffect, useState } from "react";
import "./app.scss";

export default function App(): JSX.Element {
	const [title, setTitle] = useState("");
	const [value, setValue] = useState("");
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		import("wasm").then(module => {
			setTitle(module.greet_from_rust());
			setValue(module.test("Counter"));
		});
	}, []);

	return (
		<div className={"app"}>
			<h3>{title}</h3>
			<span>{value}</span>
			<span>{counter}</span>
			<br />
			<div className={"actions"}>
				<button onClick={() => setCounter(counter - 1)}>Decrease</button>
				<button onClick={() => setCounter(counter + 1)}>Increase</button>
			</div>
		</div>
	);
}