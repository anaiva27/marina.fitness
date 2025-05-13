import { useEffect } from "react";
import "./App.css";
import { Routes } from "./Routes";
import Footer from "./Footer";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	useHistory,
} from "react-router-dom";
import { SamadhiRetreat } from "./SamadhiRetreat/SamadhiRetreat";
import { Samadhi } from "./Samadhi/Samadhi";
import { WellnessRetreat } from "./WellnessRetreat/WellnessRetreat";
import { MizataRetreat } from "./MizataRetreat/MizataRetreat";

function App() {
	return (
		<Router>
			<Switch>
				<Route
					path="/mizata-retreat"
					component={MizataRetreat}
				/>
				{/* <Route path="/wellness-retreat" component={WellnessRetreat} /> */}
				<Route
					path="/retreat"
					component={SamadhiRetreat}
				/>
				<Route
					path="/samadhi"
					component={Samadhi}
				/>
				<Route
					path="/"
					component={Routes}
				/>
				<Route
					path="*"
					component={<Redirect />}
				/>
			</Switch>
		</Router>
	);
}

export default App;

const Redirect = () => {
	const history = useHistory();
	// const navigate = useNavigate();
	useEffect(() => {
		// navigate("/");
		history.pushState("/");
	}, []);
	return null;
};
