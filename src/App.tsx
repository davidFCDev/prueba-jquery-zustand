import Card from './components/Card';
import Navbar from './components/Navbar';
import { Repository } from './hooks/types';
import { useFetchRepositories } from './hooks/useRepos';
import { useFavouriteReposStore } from './store/favouriteRepos';
import { useState } from 'react';

function App() {
	const { data, isLoading } = useFetchRepositories('Dawid-Klos');
	const { favouriteReposId } = useFavouriteReposStore();

	if (isLoading) return <div>Loading...</div>;

	return (
		<section>
			<Navbar />
			<div className='flex flex-col w-full min-h-screen py-10 px-10 gap-10 justify-center'>
				<div className='flex flex-col gap-2'>
					<label>Search user</label>
					<input
						type='text'
						placeholder='user'
						value={'Dawid-Klos'}
						className='p-2 rounded-sm focus:outline-none w-52 text-neutral-800 bg-neutral-200'
					/>
				</div>

				<div className='grid grid-cols-4 gap-8'>
					{data?.map((repository: Repository) => (
						<Card
							repository={repository}
							key={repository.id}
							isFavourite={favouriteReposId.includes(repository.id)}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default App;
