import React, { useState } from "react";

export default function App(): React.ReactElement {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<span>{counter}</span>
			<br />
			<button onClick={() => setCounter(counter + 1)}>Increase</button>
			<button onClick={() => setCounter(counter - 1)}>Decrease</button>
		</div>
	);
}