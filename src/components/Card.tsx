import { Repository } from '../hooks/types';
import { useFavouriteReposStore } from '../store/favouriteRepos';

type CardProps = {
	repository: Repository;
	isFavourite: boolean;
};

function Card({ repository, isFavourite }: CardProps) {
	const addFavouriteRepo = useFavouriteReposStore(
		state => state.addFavouriteRepo
	);
	const removeFavouriteRepo = useFavouriteReposStore(
		state => state.removeFavouriteRepo
	);

	const toggleFavourite = () => {
		if (isFavourite) {
			removeFavouriteRepo(repository.id);
			return;
		} else {
			addFavouriteRepo(repository.id);
		}
	};

	return (
		<div>
			<h2>{repository.name}</h2>
			<button onClick={toggleFavourite}>
				{isFavourite ? 'dislike' : 'like'}
			</button>
		</div>
	);
}

export default Card;
