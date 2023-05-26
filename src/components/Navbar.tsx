import { BsGithub } from 'react-icons/bs';

const Navbar = () => {
	return (
		<div className='w-full px-10 py-6 bg-neutral-800'>
			<div className='flex gap-2 text-2xl items-center'>
				<h1>Github User Search</h1>
        <BsGithub />
			</div>
		</div>
	);
};

export default Navbar;
