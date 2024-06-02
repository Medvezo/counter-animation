import React from "react";
import Counter from "./components/Counter";

const HomePage: React.FC = () => {
	return (
		<main className="w-full min-h-screen flex justify-center items-center flex-wrap flex-col lg:flex-row ">
			<div className="flex flex-col justify-start items-center gap-5 ">
				<h2 className="text-4xl">Simple Counter</h2>
				<span className="text-3xl font-bold " id="counter1">0</span>
				<Counter
					selector="counter1"
					current={0}
					target={100}
					duration={3000}
					letter="+"
				/>
			</div>
		</main>
	);
};

export default HomePage;
