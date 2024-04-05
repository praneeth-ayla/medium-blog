export default function Logout() {
	async function handleLogout() {
		localStorage.removeItem("token");
	}
	return (
		<div
			className="cursor-pointer"
			onClick={() => handleLogout()}>
			Logout
		</div>
	);
}
