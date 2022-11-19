export default function SearchResults({results}) {
	return (
		<>
			<p className="text-gray-500">About {results.searchInformation.formattedTotalResults} results ({results.searchInformation.formattedSearchTime} seconds)</p>
		</>
	);
}
