import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type favouriteReposState = {
	favouriteReposId: number[];
	addFavouriteRepo: (id: number) => void;
	removeFavouriteRepo: (id: number) => void;
};

export const useFavouriteReposStore = create(
	persist<favouriteReposState>(
		set => ({
			favouriteReposId: [],
			addFavouriteRepo: (id: number) =>
				set(state => ({ favouriteReposId: [...state.favouriteReposId, id] })),
			removeFavouriteRepo: (id: number) =>
				set(state => ({
					favouriteReposId: state.favouriteReposId.filter(
						repoId => repoId !== id
					),
				})),
		}),
		{ name: 'favourite-repos' }
	)
);
