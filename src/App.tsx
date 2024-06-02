import React from "react";
import Counter from "./components/Counter";

const HomePage: React.FC = () => {
	return (
		<main className="w-full min-h-screen flex justify-center items-center gap-10 lg:gap-16 flex-wrap flex-col lg:flex-row ">
			<div className="flex flex-col justify-start items-center gap-5 ">
				<h2 className="text-4xl">Simple Counter</h2>
				<span className="text-3xl font-bold " id="simple-counter">
					0
				</span>
				<Counter
					selector="simple-counter"
					current={0}
					target={100}
					duration={3000}
					letter="+"
				/>
			</div>

			<div className="flex flex-col justify-start items-center gap-5 ">
				<h2 className="text-4xl">Slow-end Counter</h2>
				<span className="text-3xl font-bold " id="slow-end-counter">
					0
				</span>
				<Counter
					selector="slow-end-counter"
					current={0}
					target={300}
					duration={3000}
					letter="$"
					slowEnd
				/>
			</div>
		</main>
	);
};

export default HomePage;
