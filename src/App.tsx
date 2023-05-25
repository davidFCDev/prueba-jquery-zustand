import Card from './components/Card';
import { Repository } from './hooks/types';
import { useFetchRepositories } from './hooks/useRepos';
import { useFavouriteReposStore } from './store/favouriteRepos';

function App() {
	const { data, isLoading } = useFetchRepositories('fazt');
	const { favouriteReposId } = useFavouriteReposStore();

	if (isLoading) return <div>Loading...</div>;

	console.log(data);

	return (
		<div>
			{data?.map((repository: Repository) => (
				<Card
					repository={repository}
					key={repository.id}
					isFavourite={favouriteReposId.includes(repository.id)}
				/>
			))}
		</div>
	);
}

export default App;
