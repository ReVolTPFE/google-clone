import Header from "../../components/Header";
import { getProviders, signIn } from "next-auth/react";
import Image from 'next/image';
import Footer from "../../components/Footer";

//? client side
export default function signin({providers}) {
	return (
		<div className='flex flex-col min-h-screen'>
			<Header/>

			<main className='flex flex-1 justify-center items-center flex-col w-full'>
				{Object.values(providers).map(provider => (
					<div key={provider.name} className="flex justify-center items-center flex-col mt-10 w-full">
						<Image 
							src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
							alt="Google logo"
							width={400}
							height={400}
							className="w-3/4 sm:w-1/2 md:w-1/2 lg:w-1/3"
						/>

						<p className="italic my-10 text-center">This website is created for learning purposes</p>

						<button onClick={() => signIn(provider.id, { callbackUrl: "/" })} className="blue-btn">Sign in with {provider.name}</button>
					</div>
				))}
			</main>

			<Footer />
		</div>
	);
}

//? server side
export async function getServerSideProps() {
	const providers = await getProviders();

	return {
		props: { providers },
	};
}
