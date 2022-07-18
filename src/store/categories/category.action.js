import { CATEGORIES_ACTION_TYPES } from "./category.types";

import { createAction } from "../../utils/reducer/reducer.utils";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const fetchCategoriesStart = () => {
  console.log("fetch start");
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
};

export const fetchCategoriesSuccess = (categoriesArray) => {
  console.log("fetch success");
  return createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );
};

export const fetchCategoriesFailed = (error) => {
  console.log("fetch error");
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
};

//THUNK ACTION > redux thunk recomienda declarar las thunk action con la terminacion ASYNC
export const fetchCategoriesAsync = () => async (dispatch) => {
  console.log("fetch async");
  dispatch(fetchCategoriesStart());

  try {
    const categoriesArray = await getCategoriesAndDocuments("categories");
    console.log("fetch success");
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    console.log("fetch error");
    dispatch(fetchCategoriesFailed(error));
  }
};
