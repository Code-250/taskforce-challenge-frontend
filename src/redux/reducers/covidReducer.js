const initialState = {
  total: {
    cases: 0,
    tests: 0,
    todayRecovered: 0,
    todayDeath: 0,
    todayCases: 0,
    recovered: 0,
    deaths: 0,
  },
  allContinentData: [],
  error: null,
  loading: false,
};

export const allCases = (
  state = initialState,
  action = {}
) => {
  // const { type, payload } = action;
  switch (action.type) {
    case 'GET_COVID_DATA':
      return {
        ...state,
        allContinentData: action.payload.data,
        total: action.payload.total,
      };
    case 'FAILED_COVID_DATA':
      return {
        loading: false,
        allContinentData: '',
      };
    case 'FETCHING_COVID_DATA':
      return { ...state, loading: true };
    default:
      return state;
  }
};
