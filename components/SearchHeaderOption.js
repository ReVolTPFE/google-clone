import { useRouter } from "next/router";

export default function SearchHeaderOption({title, Icon, selected}) {
	const router = useRouter();

	function selectTab(title) {
		switch (title) {
			case "All":
				router.push(`/search?term=${router.query.term}&searchType=`);
				break;
			case "Images":
				router.push(`/search?term=${router.query.term}&searchType=image`);
				break;
			default:
				router.push(`/search?term=${router.query.term}&searchType=`);
				break;
		}
	}

	return (
		<div onClick={() => selectTab(title)} className={`flex flex-row items-center border-b-4 border-white hover:text-blue-500 hover:border-b-blue-500 cursor-pointer p-2 m-4 mb-0 ${selected && "text-blue-500 border-b-blue-500"}`}>
			<Icon />
			<span className="pl-2">{title}</span>
		</div>
	);
}
