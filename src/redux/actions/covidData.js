import axios from 'axios';

const backendUrl = process.env.BACKEND_API_URL;
export const fetchAllCovidData = () => async (dispatch) => {
  dispatch({ type: 'FETCHING_COVID_DATA' });
  try {
    const res = await axios.get(
      `${backendUrl}/continents?yesterday&sort`
    );
    const total = {
      cases: 0,
      tests: 0,
      deaths: 0,
      recovered: 0,
      todayCases: 0,
      todayTest: 0,
      todayDeath: 0,
      todayRecovered: 0,
    };
    const { data } = res;

    data.forEach((continent) => {
      total.cases += continent.cases;
      total.deaths += continent.deaths;
      total.recovered += continent.recovered;
      total.tests += continent.tests;
      total.todayCases += continent.todayCases;
      total.todayDeath += continent.todayDeath;
      total.todayRecovered += continent.todayRecovered;
    });
    dispatch({
      type: 'GET_COVID_DATA',
      payload: { data, total },
    });
  } catch (err) {
    dispatch({ type: 'FAILED_COVID_DATA', payload: err });
    console.log('failed to fetch', err);
  }
};
