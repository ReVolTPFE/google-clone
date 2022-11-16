import Head from "next/head";
import SearchHeader from "../components/SearchHeader";

export default function search() {
	return (
		<>
			<Head>
				<title>Search page</title>
				<meta name="description" content="Google browser clone used for learning purposes" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<SearchHeader />
		</>
	);
}