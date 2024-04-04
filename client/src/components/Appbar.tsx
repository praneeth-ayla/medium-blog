import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import Logo from "./Logo";
import { useUserDetails } from "../hooks";

export default function Appbar() {
	const userDetails = useUserDetails(localStorage.getItem("token"));
	return (
		<div
			className="p-2 px-10 border-b"
			title="home">
			<div className="flex justify-between">
				<Link
					className="flex"
					to={"/blogs"}>
					<Logo />
				</Link>
				<div className="flex gap-20">
					<Avatar
						name={userDetails.name}
						size="big"></Avatar>
				</div>
			</div>
		</div>
	);
}
