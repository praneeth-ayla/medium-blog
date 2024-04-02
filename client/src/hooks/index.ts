import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../config";

export interface Blog {
	author: {
		name: string;
	};
	title: string;
	content: string;
	id: string;
	postedOn: string;
	published: boolean;
	authorId: string;
}

export const useBlog = ({ id }: { id: string }) => {
	const [loading, setLoading] = useState(true);
	const [blog, setBlog] = useState<Blog>();

	useEffect(() => {
		axios
			.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
			.then((response) => {
				setBlog(response.data.blog);
				setLoading(false);
			});
	}, [id]);

	return {
		loading,
		blog,
	};
};
export const useBlogs = () => {
	const [loading, setLoading] = useState(true);
	const [blogs, setBlogs] = useState<Blog[]>([]);

	useEffect(() => {
		axios
			.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
			.then((response) => {
				setBlogs(response.data.blogs);
				setLoading(false);
			});
	}, []);

	return {
		loading,
		blogs,
	};
};

export interface User {
	id: string;
	name: string;
	email: string;
	posts: Blog[];
}

export function useUserData(id: string) {
	const [loading, setLoading] = useState(true);
	const [userData, setuserData] = useState<User>();

	useEffect(() => {
		axios
			.get(`${BACKEND_URL}/api/v1/user/${id}`, {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
			.then((response) => {
				setuserData(response.data.user);
				setLoading(false);
			});
	}, []);

	return {
		loading,
		userData,
	};
}
