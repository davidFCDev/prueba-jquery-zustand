import { Repository } from '../hooks/types';
import { useFavouriteReposStore } from '../store/favouriteRepos';
import { FaRegStar, FaStar } from 'react-icons/fa';

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
		<a
			className='bg-neutral-800 px-5 py-5 rounded shadow w-[320px] h-[150px] flex hover:scale-105 hover:cursor-pointer justify-between '
			href={repository.html_url}
		>
			<div className='flex flex-col gap-3 justify-center'>
				<h2 className='text-xl text-green-300 font-semibold'>
					{repository.name}
				</h2>
				<p className='text-xs font-light'>{repository.updated_at}</p>
				<p className='text-sm italic font-light'>{repository.description}</p>
			</div>
			<div>
				<button onClick={toggleFavourite} className='text-2xl text-green-300'>
					{isFavourite ? <FaStar /> : <FaRegStar />}
				</button>
			</div>
		</a>
	);
}

export default Card;
