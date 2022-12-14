import { useQuery } from '@tanstack/react-query';
import { fetchAllRecipeCategories } from '../../queries/recipeRequests';
import { queryKeys } from '../../reactQuery/queryKeys';

// Hook
export function useRecipeCategories() {
  const fallback = [];
  const { data: recipeCategories = fallback } = useQuery(
    [queryKeys.recipeCategories],
    fetchAllRecipeCategories,
    {
      staleTime: 10000000,
    }
  );

  return { recipeCategories };
}
