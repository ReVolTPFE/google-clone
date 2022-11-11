import Header from "../../components/Header";
import { getProviders, signIn } from "next-auth/react";
import Image from 'next/image';

//? client side
export default function signin({providers}) {
	return (
		<>
			<Header/>

			<div>
				{Object.values(providers).map(provider => (
					<div key={provider.name} className="flex justify-center items-center flex-col mt-10">
						<Image 
							src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
							alt="Google logo"
							width={400}
							height={400}
						/>

						<p className="italic my-10">This website is created for learning purposes</p>

						<button onClick={() => signIn(provider.id, { callbackUrl: "/" })} className="py-2 px-4 bg-blue-500 rounded text-white hover:bg-blue-600">Sign in with {provider.name}</button>
					</div>
				))}
			</div>
		</>
	);
}

//? server side
export async function getServerSideProps() {
	const providers = await getProviders();

	return {
		props: { providers },
	};
}
