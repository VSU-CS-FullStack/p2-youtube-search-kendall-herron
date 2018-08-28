import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const API_KEY = "AIzaSyBNWxTGfnnsvn7CacFilp4vVRv6SOKAbEE";

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
