const initialState = {
  loading: false,
  language: "",
  error: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "Language_request": {
      console.log("language");
      return { ...state, loading: true };
    }

    case "Language_request_success":
      return { ...state, loading: false, language: payload };

    case "Language_request_fail":
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
