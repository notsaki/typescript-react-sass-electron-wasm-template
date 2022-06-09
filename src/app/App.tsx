import React, { useState } from "react";
import "./app.scss";

export default function App(): JSX.Element {
	const [counter, setCounter] = useState(0);

	return (
		<div className={"app"}>
			<span>{counter}</span>
			<br />
			<div className={"actions"}>
				<button onClick={() => setCounter(counter - 1)}>Decrease</button>
				<button onClick={() => setCounter(counter + 1)}>Increase</button>
			</div>
		</div>
	);
}