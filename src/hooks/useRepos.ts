import api from '../api/github';
import { useQuery } from '@tanstack/react-query';

async function fetchRepos() {
	const { data } = await api.get('/users/davidFCDev/repos');
	return data;
}

export function useFetchRepositories() {
	return useQuery(['repos'], fetchRepos);
}
