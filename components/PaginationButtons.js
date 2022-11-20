import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PaginationButtons() {
	const router = useRouter();
	const startIndex = Number(router.query.start || "1");

	return (
		<div className="flex flex-row justify-center items-center">
			{startIndex > 10 && (
				<Link href={`/search?term=${router.query.term}&searchType=${router.query.searchType}&start=${startIndex - 10}`}>
					<div className="flex flex-row items-center text-blue-500 hover:underline m-5">
						<ChevronLeftIcon />
						<span>Previous</span>
					</div>
				</Link>
			)}
			{startIndex < 90 && (
				<Link href={`/search?term=${router.query.term}&searchType=${router.query.searchType}&start=${startIndex + 10}`}>
					<div className="flex flex-row items-center text-blue-500 hover:underline m-5">
						<span>Next</span>
						<ChevronRightIcon />
					</div>
				</Link>
			)}
		</div>
	);
}
