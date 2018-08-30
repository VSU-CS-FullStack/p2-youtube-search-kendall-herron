import React, { Component } from "react";
// import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";

const API_KEY = "AIzaSyCq0zxXoVnlu9k5QtwKQvK0kIZifhwKeL8";

// const App = () => {
// 	return (
// 		<div>
// 			<SearchBar />
// 		</div>
// 	);
// };

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { videos: [] };
		YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
			// ES6 syntax for this.setState({ videos: videos});
			this.setState({ videos });
		});
	}
	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
