import { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import EditorPreview from "../components/Editor_Preview";
import PostblogBtn from "../components/PostblogBtn";
import { useParams, useNavigate } from "react-router-dom";
import { useBlog } from "../hooks";

export default function Editor({ edit }: { edit: boolean }) {
	const navigate = useNavigate();
	const { id } = useParams();
	const [title, setTitle] = useState("");
	const [markdown, setMarkdown] = useState("# Write Markdown");
	const { blog, loading } = edit
		? useBlog({ id: id || "" })
		: { blog: null, loading: false };

	useEffect(() => {
		if (edit && !loading && blog) {
			setTitle(blog.title);
			setMarkdown(blog.content);
		}
	}, [edit, loading, blog]);

	async function postOrEditBlog(
		id: string,
		title: string,
		markdown: string,
		published: boolean
	) {
		const url = edit
			? `${BACKEND_URL}/api/v1/blog`
			: `${BACKEND_URL}/api/v1/blog`;
		const method = edit ? "put" : "post";

		try {
			const response = await axios[method](
				url,
				{ id, title, content: markdown, published },
				{
					headers: {
						Authorization: localStorage.getItem("token"),
					},
				}
			);
			console.log(response.data.message);
			navigate("/blogs");
		} catch (error) {
			console.error("Error:", error);
			// Handle error
		}
	}

	return (
		<div>
			<Appbar write={false} />
			{loading ? (
				<div>Loading...</div>
			) : (
				<>
					<PostblogBtn
						id={id || ""}
						markdown={markdown}
						title={title}
						postBlog={postOrEditBlog}
					/>
					<EditorPreview
						markdown={markdown}
						title={title}
						setMarkdown={setMarkdown}
						setTitle={setTitle}
					/>
				</>
			)}
		</div>
	);
}
