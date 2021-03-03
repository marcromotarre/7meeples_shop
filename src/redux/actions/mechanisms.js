export const FETCH_MECHANISMS = "FETCH_MECHANISMS";
export const FETCH_MECHANISMS_REQUEST = "FETCH_MECHANISMS_REQUEST";
export const FETCH_REQUESTED = "FETCH_REQUESTED";
export const FETCH_REQUESTED_MECHANISMS = "FETCH_REQUESTED_MECHANISMS";

export const fetchMechanisms = (mechanisms) => ({
  type: FETCH_MECHANISMS,
  payload: mechanisms,
});
export const fetchMechanismsRequest = () => ({
  type: FETCH_MECHANISMS_REQUEST,
});
