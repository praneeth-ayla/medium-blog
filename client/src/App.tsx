import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import User from "./pages/User";

function App() {
	return (
		// <div className="font-serif">
		<BrowserRouter>
			<Routes>
				<Route
					path="/signup"
					element={<Signup></Signup>}></Route>
				<Route
					path="/signin"
					element={<Signin></Signin>}></Route>
				<Route
					path="/blogs"
					element={<Blogs></Blogs>}></Route>
				<Route
					path="/blog/:id"
					element={<Blog></Blog>}></Route>
				<Route
					path="/user/:id"
					element={<User></User>}></Route>
			</Routes>
		</BrowserRouter>
		// </div>
	);
}

export default App;
