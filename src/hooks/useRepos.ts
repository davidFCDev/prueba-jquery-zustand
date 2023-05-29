import api from '../api/github';
import { useQuery, QueryFunctionContext } from '@tanstack/react-query';
import { Repository } from './types';

async function fetchRepos(ctx: QueryFunctionContext) {
  const [_, githubUser] = ctx.queryKey;
  if (typeof githubUser !== 'string' || githubUser.trim() === '') {
    // Si el nombre de usuario no es una cadena de texto válida o está vacío, retornar un array vacío
    return [];
  }
  const { data } = await api.get<Repository>(`/users/${githubUser}/repos`);
  return data;
}

export function useFetchRepositories(githubUser: string) {
  return useQuery(['repos', githubUser], fetchRepos);
}
