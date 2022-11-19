import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import Response from "../Response";

export default function search({results}) {
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

//? back end call to google api
export async function getServerSideProps(context) {
	//? we are limited to 100 requests in a day so we use the mock data in development
	const mockData = true;

	const data = mockData ? Response : await fetch(
		`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${context.query.searchType && "&searchType=image"}`
	).then(
		(response) => response.json()
	);

	return {
		props: {
			results: data
		}
	}
}