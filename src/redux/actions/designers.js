export const FETCH_DESIGNERS = "FETCH_DESIGNERS";
export const FETCH_DESIGNERS_REQUEST = "FETCH_DESIGNERS_REQUEST";
export const FETCH_REQUESTED = "FETCH_REQUESTED";
export const FETCH_REQUESTED_DESIGNERS = "FETCH_REQUESTED_DESIGNERS";

export const fetchDesigners = (designers) => ({
  type: FETCH_DESIGNERS,
  payload: designers,
});
export const fetchDesignersRequest = () => ({
  type: FETCH_DESIGNERS_REQUEST,
});
