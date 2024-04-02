export default function Avatar({ name }: { name: string }) {
	return (
		<div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-300 rounded-full">
			<span className="font-medium ">{name[0].toUpperCase()}</span>
		</div>
	);
}
