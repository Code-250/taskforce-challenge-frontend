import React from 'react';
import CovidDetails from './covidDetails';
import PropTypes from 'prop-types';

const AllDetails = ({ total }) => {
  const {
    cases,
    tests,
    recovered,
    deaths,
    todayCases,
    todayRecovered,
    todayDeath,
  } = total;
  console.log(total);
  return (
    <div className="total details">
      <CovidDetails
        text="Tests"
        today={tests.toLocaleString()}
        name="detailsCard"
        total={tests.toLocaleString()}
        todayColor="large"
        totalColor="light"
      />
      <CovidDetails
        text="Postive Cases"
        today={todayCases.toLocaleString()}
        name="detailsCard"
        total={cases.toLocaleString()}
        todayColor="large"
        totalColor="light"
      />
      <CovidDetails
        text="Hospitalized"
        today="234"
        name="detailsCard"
        total="213,453"
        todayColor="large"
        totalColor="light"
      />
      <CovidDetails
        text="Recovered"
        today={todayRecovered.toLocaleString()}
        name="detailsCard"
        total={recovered.toLocaleString()}
        todayColor="large"
        totalColor="light"
      />
      <CovidDetails
        text="Deaths"
        today={todayDeath.toLocaleString()}
        name="detailsCard"
        total={deaths.toLocaleString()}
        todayColor="large"
        totalColor="light"
      />

      <CovidDetails
        text="Vaccinated"
        today="23,674"
        name="detailsCard"
        total="426,213,453"
        todayColor="large"
        totalColor="light"
      />
    </div>
  );
};
AllDetails.propTypes = {
  continent: PropTypes.string.isRequired,
  cases: PropTypes.number.isRequired,
  deaths: PropTypes.number.isRequired,
  recovered: PropTypes.number.isRequired,
  todayCases: PropTypes.number.isRequired,
  todayRecovered: PropTypes.number.isRequired,
  todayDeaths: PropTypes.number.isRequired,
};

AllDetails.defaultProps = {
  continent: 'hello',
  Cases: 0,
  Deaths: 0,
  Recovered: 0,
  todayCases: 0,
  todayDeaths: 0,
  todayRecovered: 0,
};

export default AllDetails;
