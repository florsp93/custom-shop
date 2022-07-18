//en el selector es en donde transformamos los datos traidos de la api seleccionando solo lo que nos interesa
import { createSelector } from "reselect";

const selectCategoryReducer = (state) => {
  console.log("select categories 1", state.categories);
  return state.categories;
};

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    console.log("select categories 2", categoriesSlice.categories);

    return categoriesSlice.categories;
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      console.log("select categories 3", categories);
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
