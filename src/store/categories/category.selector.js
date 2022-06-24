//en el selector es en donde transformamos los datos traidos de la api seleccionando solo lo que nos interesa
import { createSelector } from "reselect";

const selectCategoryReducer = (state) => {
  console.log("selector 1 fired");
  return state.categories;
};

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    console.log("selector 2 fired");

    return categoriesSlice.categories;
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    console.log("selector 3 fired");
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
