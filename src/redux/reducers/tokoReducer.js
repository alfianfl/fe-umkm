const initialState = {
    loading: false,
    toko: [],
    error: "",
  };
  const tokoReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_TOKO_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "FETCH_TOKO_SUCCESS":
        return {
          loading: false,
          toko: action.payload,
          error: "",
        };
      case "FETCH_TOKO_FAILURE":
        return {
          loading: false,
          toko: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export default tokoReducer;
  