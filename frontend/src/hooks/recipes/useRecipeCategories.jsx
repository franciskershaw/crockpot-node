import { useQuery } from '@tanstack/react-query';
import { fetchAllRecipeCategories } from '../../queries/recipeRequests';
import { queryKeys } from '../../reactQuery/queryKeys';
import { useUser } from '../auth/useUser';

// Hook
export function useRecipeCategories() {
  const { user } = useUser();

  const fallback = [];
  const { data: recipeCategories = fallback } = useQuery(
    [queryKeys.recipeCategories],
    () => fetchAllRecipeCategories(user.token),
    {
      staleTime: 10000000,
    }
  );

  return { recipeCategories };
}