import { getDetailProductAPI, getProductAPI, getProductByUserAPI } from "../../models/ProductAPI";

export const fetchProduct = (id) => {
  return (dispatch) => {
    dispatch(fetchProductRequest());
    getProductAPI(id)
    .then((response) => {
        const venue = response.data.response;
        dispatch(fetchProductSuccess(venue));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchProductFailure(errMsg));
      });
    }
};
export const fetchProductByUser = () => {
  return (dispatch) => {
    dispatch(fetchProductRequest());
    getProductByUserAPI()
    .then((response) => {
        const venue = response.data.response;
        dispatch(fetchProductSuccess(venue));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchProductFailure(errMsg));
      });
    }
};

export const fetchProductRequest = () => {
  return {
    type: "FETCH_PRODUCT_REQUEST",
  };
};

export const fetchProductSuccess = (venue) => {
  return {
    type: "FETCH_PRODUCT_SUCCESS",
    payload: venue,
  };
};
export const fetchProductFailure = (errMsg) => {
  return {
    type: "FETCH_PRODUCT_FAILURE",
    payload: errMsg,
  };
};
