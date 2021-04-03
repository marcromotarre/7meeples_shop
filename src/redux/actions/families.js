export const FETCH_FAMILIES = "FETCH_FAMILIES";
export const FETCH_FAMILIES_REQUEST = "FETCH_FAMILIES_REQUEST";
export const FETCH_REQUESTED = "FETCH_REQUESTED";
export const FETCH_REQUESTED_FAMILIES = "FETCH_REQUESTED_FAMILIES";

export const fetchFamilies = (families) => ({
  type: FETCH_FAMILIES,
  payload: families,
});
export const fetchFamiliesRequest = () => ({
  type: FETCH_FAMILIES_REQUEST,
});
