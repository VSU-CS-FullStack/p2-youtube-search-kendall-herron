import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
// import "./index.css";
// import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";

const API_KEY = "AIzaSyCq0zxXoVnlu9k5QtwKQvK0kIZifhwKeL8";

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
};
// App();
ReactDOM.render(<App />, document.getElementById("root"));
// registerServiceWorker();
