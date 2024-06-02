import React, { useEffect, useState } from "react";

interface CounterProps {
	selector: string;
	current: number;
	target: number;
	duration: number;
	letter?: string;
	slowEnd?: boolean;
}

const Counter: React.FC<CounterProps> = ({
	selector,
	current,
	target,
	duration,
	letter = "",
	slowEnd = false,
}) => {
	const [count, setCount] = useState(current);

	useEffect(() => {
		const stepTime = Math.abs(Math.floor(duration / target));

		const increment = () => {
			if (count < target) {
				setCount((prevCount) => prevCount + 1);
			}
		};

		const adjustStepTime = () => {
			if (slowEnd && count > target * 0.9) {
				const remaining = target - count;
				const slowdownFactor = Math.pow(
					1.5,
					10 * (1 - remaining / (target * 0.1))
				); 
				return stepTime * slowdownFactor;
			}
			return stepTime;
		};

		const timer = setTimeout(increment, adjustStepTime());

		return () => clearTimeout(timer);
	}, [count, target, duration, slowEnd]);

	useEffect(() => {
		const counterElement = document.getElementById(selector);
		if (counterElement) {
			counterElement.innerText = count.toString() + letter;
		}
	}, [count, selector, letter]);

	return null;
};

export default Counter;
