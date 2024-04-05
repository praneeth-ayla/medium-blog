import { useFormik } from "formik";
import Appbar from "./Appbar";
import LabelInput from "./LabelInput";
import { useState } from "react";

import axios from "axios";
import { BACKEND_URL } from "../../config";

export default function Settings() {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");

	async function handleChange() {
		const body: { name?: string; password?: string } = {};
		if (name !== "") {
			body["name"] = name;
		}
		if (password !== "") {
			if (password.length >= 6) {
				body["password"] = password;
			} else {
				alert("password  should be greater than 6");
			}
		}

		if (Object.keys(body).length === 0) {
			alert("Empty fields");
		} else {
			console.log(body);
			const res = await axios.put(
				`${BACKEND_URL}/api/v1/user/update`,
				body,
				{
					headers: {
						Authorization: localStorage.getItem("token"),
					},
				}
			);
		}
	}

	return (
		<div>
			<Appbar write={true} />
			<div>
				<div className="p-6 px-32 overflow-y-auto text-2xl font-bold text-slate-700 first-letter:uppercase">
					Settings
					<br />
					<div className="text-xl font-light">
						Change your name or password or both
					</div>
					<div>
						<div className="flex flex-col items-center gap-3">
							<LabelInput
								onChange={(e) => {
									setName(e.target.value);
								}}
								label="Name"
								type="text"
								placeholder="Name"></LabelInput>
							<LabelInput
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								label="Password"
								type="password"
								placeholder="Password"></LabelInput>
							<button
								type="button"
								onClick={() => {
									handleChange();
								}}
								className="mt-5 px-32  text-white  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm  py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
								Change
							</button>
							<div className="self-start p-10 text-sm font-light ">
								Logout and login again to reflect changes
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
