import { useParams } from "react-router-dom";
import { useUserData } from "../hooks";
import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import Avatar from "../components/Avatar";

export default function User() {
	const { id } = useParams();

	const { loading, userData } = useUserData(id!);

	if (loading) {
		<Appbar write={true}></Appbar>;
		return <div>loading.....</div>;
	}

	return (
		<div>
			<Appbar write={true} />
			<div>
				<div className="p-6 px-32 overflow-y-auto text-2xl font-bold first-letter:uppercase">
					{userData?.name}'s Posts:
				</div>
				<div className="grid pt-6 lg:grid-cols-10">
					<div className="col-span-7 border-r">
						<div className="flex justify-center">
							<div className="flex flex-col justify-center w-5/6 max-w-screen-lg gap-7 md:w-2/3">
								{userData?.posts.map((blog) => {
									return (
										<BlogCard
											authorId={blog.authorId}
											key={blog.id}
											id={blog.id}
											authorName={userData.name}
											content={blog.content}
											title={blog.title}
											publishedDate="2 April 2024"
										/>
									);
								})}
							</div>
						</div>
					</div>
					<div className="hidden p-3 px-10 lg:col-span-3 lg:block">
						<div className="pb-8 text-slate-500">Author: </div>
						<div className="flex items-center gap-5 ">
							<Avatar
								size="big"
								name={userData?.name!}></Avatar>
							<div className="text-3xl font-extrabold text-slate-800 first-letter:uppercase">
								{userData?.name}
							</div>
						</div>
						<div className="pt-6 text-lg font-medium">
							Total Posts: {userData?.posts.length}
							<br />
							Last Upload: {userData?.posts[0].postedOn}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
