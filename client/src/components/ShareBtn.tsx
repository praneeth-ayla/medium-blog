export default function ShareBtn({ link }: { link: string }) {
	return (
		<div className="cursor-pointer">
			<a
				onClick={() => {
					navigator.clipboard.writeText(link);
					alert("Copied to clipborad!");
				}}
				title="Share">
				<img
					className="hover:hover:scale-105 "
					width="29"
					alt="Ei-share-apple"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Ei-share-apple.svg/360px-Ei-share-apple.svg.png"
				/>
			</a>
		</div>
	);
}
