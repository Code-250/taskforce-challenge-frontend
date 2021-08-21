const initialState = {
  total: {},
  allContinentCovidData: {},
  error: null,
  loading: false,
};

export const allCases = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_COVID_DATA':
      return {
        ...state,
        allContinentCovidData: payload.data,
        total: payload.total,
      };
    case 'FAILED_COVID_DATA':
      return {
        loading: false,
        allContinentCovidData: '',
      };
    case 'FETCHING_COVID_DATA':
      return { ...state, loading: true };
    default:
      return state;
  }
};
