export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST";
export const FETCH_REQUESTED = "FETCH_REQUESTED";
export const FETCH_REQUESTED_CATEGORIES = "FETCH_REQUESTED_CATEGORIES";

export const fetchCategories = (categories) => ({
  type: FETCH_CATEGORIES,
  payload: categories,
});
export const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST,
});
