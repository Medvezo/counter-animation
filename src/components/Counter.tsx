// Counter.tsx
import React, { useEffect, useState } from "react";

interface CounterProps {
	selector: string;
	current: number;
	target: number;
	duration: number;
	letter?: string;
}

const Counter: React.FC<CounterProps> = ({
	selector,
	current,
	target,
	duration,
	letter = "",
}) => {
	const [count, setCount] = useState(current);

	useEffect(() => {
		const increment = () => {
			if (count < target) {
				setCount((prevCount) => prevCount + 1);
			}
		};

		const stepTime = Math.abs(Math.floor(duration / target));
		const timer = setInterval(increment, stepTime);

		return () => clearInterval(timer);
	}, [count, target, duration]);

	useEffect(() => {
		const counterElement = document.getElementById(selector);
		if (counterElement) {
			counterElement.innerText = count.toString() + letter;
		}
	}, [count, selector, letter]);

	return null;
};

export default Counter;
