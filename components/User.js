import { useSession, signIn, signOut } from "next-auth/react";
import Image from 'next/image';

export default function User() {
	const { data: session } = useSession();

	if (session) {
		return (
			<Image 
				onClick={signOut}
				src={session.user.image}
				alt="Account image"
				width={400}
				height={400}
				className="w-10 h-10 rounded-full cursor-pointer p-1 hover:bg-blue-500"
			/>
		);
	} else {
		return (
			<button onClick={signIn} className="blue-btn">Sign in</button>
		);
	}
}
