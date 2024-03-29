export const FETCH_PUBLISHERS = "FETCH_PUBLISHERS";
export const FETCH_PUBLISHERS_REQUEST = "FETCH_PUBLISHERS_REQUEST";
export const FETCH_REQUESTED = "FETCH_REQUESTED";
export const FETCH_REQUESTED_PUBLISHERS = "FETCH_REQUESTED_PUBLISHERS";

export const fetchPublishers = (publishers) => ({
  type: FETCH_PUBLISHERS,
  payload: publishers,
});
export const fetchPublishersRequest = () => ({
  type: FETCH_PUBLISHERS_REQUEST,
});
