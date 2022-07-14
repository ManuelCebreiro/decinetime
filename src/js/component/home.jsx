import React from "react";
import Body from "./body.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div clasName="row">
			<h1>Bienvenido a decinetime tour</h1></div>
			<Body/>
			<div clasName="row"></div>
		</div>
	);
};

export default Home;
