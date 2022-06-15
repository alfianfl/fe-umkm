import { getTokoAPI, getTokoByUserAPI } from "../../models/TokoAPI";

export const fetchToko = (query) => {
  return (dispatch) => {
    dispatch(fetchTokoRequest());
    getTokoAPI(query)
    .then((response) => {
        const venue = response.data.data;
        dispatch(fetchTokoSuccess(venue));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchTokoFailure(errMsg));
      });
    }
};

export const fetchTokoByUser = (query) => {
  return (dispatch) => {
    dispatch(fetchTokoRequest());
    getTokoByUserAPI(query)
    .then((response) => {
        const venue = response.data.toko;
        dispatch(fetchTokoSuccess(venue));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchTokoFailure(errMsg));
      });
    }
};


export const fetchTokoRequest = () => {
  return {
    type: "FETCH_TOKO_REQUEST",
  };
};

export const fetchTokoSuccess = (venue) => {
  return {
    type: "FETCH_TOKO_SUCCESS",
    payload: venue,
  };
};
export const fetchTokoFailure = (errMsg) => {
  return {
    type: "FETCH_TOKO_FAILURE",
    payload: errMsg,
  };
};
