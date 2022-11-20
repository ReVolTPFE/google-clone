import Parser from "html-react-parser";

export default function SearchResults({results}) {
	return (
		<>
			<p className="text-gray-500">About {results.searchInformation.formattedTotalResults} results ({results.searchInformation.formattedSearchTime} seconds)</p>

			<div>
				{results.items.map((result) => (
					<div key={result.link} className="my-4 group">
						<p className="text-sm">{result.displayLink}</p>
						<a href={result.link} className="cursor-pointer text-blue-700 group-hover:underline">{result.title}</a>
						<p className="text-gray-500">{Parser(result.htmlSnippet)}</p>
					</div>
				))}
			</div>
		</>
	);
}
