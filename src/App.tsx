import Card from './components/Card';
import Navbar from './components/Navbar';
import { Repository } from './hooks/types';
import { useFetchRepositories } from './hooks/useRepos';
import { useFavouriteReposStore } from './store/favouriteRepos';
import { useState } from 'react';

function App() {
	const [searchUser, setSearchUser] = useState('');
	const [isSearchClicked, setIsSearchClicked] = useState(false);
	const { data } = useFetchRepositories(searchUser);
	const { favouriteReposId } = useFavouriteReposStore();

	const handleSearch = (e: any) => {
		e.preventDefault(); // Evitar que el formulario se envíe automáticamente
		setIsSearchClicked(true);
	};

	return (
		<section>
			<Navbar />
			<div className='flex flex-col w-full min-h-screen py-10 px-10 gap-10'>
				<div className='flex flex-col gap-2'>
					<form onSubmit={handleSearch}>
						{' '}
						{/* Utilizar onSubmit en el formulario */}
						<label>Search user</label>
						<input
							type='text'
							placeholder='user'
							value={searchUser}
							onChange={e => setSearchUser(e.target.value)}
							className='p-2 rounded-sm focus:outline-none w-52 text-neutral-800 bg-neutral-200'
						/>
						<button
							type='submit' // Especificar el tipo del botón como "submit"
							className='bg-green-300 text-neutral-800 p-2 rounded-sm w-52'
						>
							Search
						</button>
					</form>
				</div>

				{isSearchClicked && (
					<div className='grid grid-cols-4 gap-8'>
						{data &&
							data.map((repository: Repository) => (
								<Card
									repository={repository}
									key={repository.id}
									isFavourite={favouriteReposId.includes(repository.id)}
								/>
							))}
					</div>
				)}
			</div>
		</section>
	);
}

export default App;
