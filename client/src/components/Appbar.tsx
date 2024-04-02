import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import Logo from "./Logo";

export default function Appbar({ name }: { name: string }) {
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
						name={name}
						size="big"></Avatar>
				</div>
			</div>
		</div>
	);
}
