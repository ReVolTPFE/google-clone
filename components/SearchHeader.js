import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, CancelIcon } from "../components/Icons";
import User from "./User";

export default function SearchHeader() {
	const router = useRouter();
	const searchInputRef = useRef();

	function search(event) {
		event.preventDefault()

		const term = searchInputRef.current.value;

		if (!term.trim()) return;

		router.push(`/search?term=${term.trim()}`);
	}

	return (
		<header className="sticky top-0 bg-white shadow-lg w-full p-6 flex justify-between flex-row">
			<div className="w-2/3 flex ">
				<Image
					onClick={()=>router.push("/")}
					src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
					alt="Google logo"
					width={150}
					height={150}
					className="cursor-pointer mr-10 hidden md:block"
				/>

				<form className="flex-1 border py-2 px-6 flex flex-row justify-between items-center border-gray-800 rounded-full" onSubmit={search}>
					<input type="text" defaultValue={router.query.term} ref={searchInputRef} className="flex-1 mr-2 focus:outline-none" />
					<div className="flex flex-row justify-end items-center">
						<CancelIcon className="w-5 h-5 text-gray-800 md:pr-8 md:mr-4 md:border-r md:border-gray-800 cursor-pointer" onClick={()=>(searchInputRef.current.value = "")} />
						<MicrophoneIcon className="w-5 h-5 text-gray-800 mr-2 cursor-pointer hidden md:block" />
						<SearchIcon className="w-5 h-5 text-gray-800 ml-4 cursor-pointer hidden md:block" onClick={search} />
					</div>
				</form>
			</div>

			<User />
		</header>
	);
}
