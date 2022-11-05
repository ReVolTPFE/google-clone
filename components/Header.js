import Image from 'next/image'
import User from './User'

export default function Header() {
	return (
		<header className="flex justify-between p-5">
			<div className='space-x-4'>
				<a href="#" className='link'>About</a>
				<a href="#" className='link'>Store</a>
			</div>
			<div className='space-x-4'>
				<a href="#" className='link'>Gmail</a>
				<a href="#" className='link'>Images</a>

				<User/>
			</div>
		</header>
	)
}
