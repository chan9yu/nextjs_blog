'use client';

import { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>count: {count}</p>
			<button onClick={() => setCount(prev => prev + 1)}>+1</button>
		</div>
	);
};

export default Counter;
