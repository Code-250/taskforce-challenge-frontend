import { allCases } from '../redux/reducers/covidReducer';
const total = {
  cases: 0,
  tests: 0,
  todayRecovered: 0,
  todayDeath: 0,
  todayCases: 0,
  recovered: 0,
  deaths: 0,
};
describe('test covidreducer', () => {
  it('should return initialSstate', () => {
    const expected = [];

    const result = allCases(total, {});

    //expectation

    expect(result).toEqual(expected);
  });
});
