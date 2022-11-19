import SearchHeaderOption from "./SearchHeaderOption";
import { SearchIcon, PhotoIcon } from "./Icons";
import { useRouter } from "next/router";

export default function SearchHeaderOptions() {
	const router = useRouter();

	return (
		<div className="flex flex-row md:ml-44">
			<SearchHeaderOption title="All" Icon={SearchIcon} selected={router.query.searchType === "" || !router.query.searchType} />
			<SearchHeaderOption title="Images" Icon={PhotoIcon} selected={router.query.searchType === "image"} />
		</div>
	);
}
