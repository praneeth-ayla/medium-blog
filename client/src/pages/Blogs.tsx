import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";

export default function Blogs() {
	return (
		<div>
			<Appbar></Appbar>
			<div className="flex justify-center ">
				{/* <div className="flex justify-center w-3/4"> */}
				<div>
					<BlogCard
						authorName="Praneeth"
						title="how to create a blog in meduim"
						content="There are many variations of passages o
                    f Lorem Ipsum available, but the majority have suffered alteration in some form,
                    by injected humour, or randomised words which don't look even slightly believable.
                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't 
                    anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators 
                    on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on
                    the Internet. It uses a dictionary of over 200 Latin words, combined with a
                    handful of model sentence structures, to generate Lorem Ipsum which looks 
                    reasonable. The generated Lorem Ipsum is therefore always free from repet
                    ition, injected humour, or non-characteristic words etc."
						publishedDate="2 April 2024"></BlogCard>
				</div>
			</div>
		</div>
	);
}
