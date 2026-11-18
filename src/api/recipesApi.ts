import type { RecipesParams, RecipesResponse } from "@/types/recipes";
import { baseApi } from "./baseApi";

export const recipesApi = baseApi.injectEndpoints({ endpoints: (builder) => ({
  getRecipes: builder.query<RecipesResponse, RecipesParams>({
    query: ({limit, skip}) => ({
      url: '/recipes',
      params: { limit, skip }
    })
  })
})})

export const { useGetRecipesQuery } = recipesApi;