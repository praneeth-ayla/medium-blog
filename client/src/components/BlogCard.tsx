import Avatar from "../pages/Avatar";

interface BlogCardProps {
	authorName: string;
	title: string;
	content: string;
	publishedDate: string;
}

export default function BlogCard({
	authorName,
	title,
	content,
	publishedDate,
}: BlogCardProps) {
	return (
		<div className="pb-3 border-b border-slate-200">
			<div className="flex items-center gap-3 ">
				<Avatar name={authorName}></Avatar>
				<div className="text-base">{authorName} </div>
				<div className="pb-3 text-2xl font-bold text-slate-400">.</div>
				<div className="text-sm text-slate-400">{publishedDate}</div>
			</div>
			<div className="pt-2 text-2xl font-bold">{title}</div>
			<div className="font-thin">{content.slice(0, 100)}...</div>
			<div>{`${Math.ceil(content.length / 500)} minutes read`}</div>
			{/* <div className="pt-3 "></div> */}
		</div>
	);
}
