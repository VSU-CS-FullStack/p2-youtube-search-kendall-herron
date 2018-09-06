import React, { Component } from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import "bootstrap/dist/css/bootstrap.min.css"; // import Bootstrap CSS library
import "./index.css"; // in addition, import our own CSS specs
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyCq0zxXoVnlu9k5QtwKQvK0kIZifhwKeL8";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};
	}

		YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
			// ES6 syntax for this.setState({ videos: videos});
			this.setState({ videos:
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}
	render() {
		return (
			<div>
				<SearchBar />
				<div classname="row">
					<VideoDetail video={this.state.selectedVideo} />
					<VideoList
                        // callback function
                        onVideoSelect={selectedVideo =>
                            this.setState({ selectedVideo })
                        }
                        videos={this.state.videos}
                    />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
