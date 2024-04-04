import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks";

export default function Blogs() {
	const { loading, blogs } = useBlogs();

	if (loading) {
		<Appbar></Appbar>;
		return <div>loading.....</div>;
	}

	return (
		<div>
			<Appbar />
			<div className="flex justify-center pt-16">
				<div className="flex flex-col justify-center w-5/6 gap-7 lg:w-1/2 md:w-2/3">
					{blogs.map((blog) => {
						return (
							<BlogCard
								authorId={blog.authorId}
								key={blog.id}
								id={blog.id}
								authorName={blog.author.name}
								content={blog.content}
								title={blog.title}
								publishedDate="2 April 2024"
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
