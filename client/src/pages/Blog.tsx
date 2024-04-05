import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import Appbar from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";

export default function Blog() {
	const { id } = useParams();
	const { blog, loading } = useBlog({ id: id || "" });
	if (loading) {
		return <div>loading....</div>;
	}
	return (
		<div>
			<Appbar write={true} />
			<div className="flex justify-center ">
				<div className="flex flex-col justify-center w-5/6 ">
					<FullBlog blog={blog!} />
				</div>
			</div>
		</div>
	);
}
