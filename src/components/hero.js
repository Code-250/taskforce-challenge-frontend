import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import { RiCalendar2Line } from 'react-icons/ri';
import PropTypes from 'prop-types';

const Header = ({ allCases }) => {
  const [selected, setSelected] = useState('');
  return (
    <div className="bg-main">
      <h1 className="h1 white">UPDATES</h1>
      <p className="small">search a country</p>
      <div className="search">
        <div classname="countries">
          <ReactFlagsSelect
            selected={selected}
            onSelect={(code) => setSelected(code)}
          />
        </div>
        <input
          type="date"
          style={{ cursor: 'pointer' }}
        ></input>
        <RiCalendar2Line
          style={{
            fontSize: '64px',
            opacity: '0.7',
            cursor: 'pointer',
            marginRight: '4px',
          }}
        />
        <button type="button" className="button submitBtn">
          SUBMIT
        </button>
      </div>
      <div className="total">
        <p className="larger">{allCases}</p>
        <p className="h1 white">Cumulatively</p>
      </div>
    </div>
  );
};
Header.propTypes = {
  allCases: PropTypes.number.isRequired,
};
Header.defaultProps = {
  allCases: 0,
};

export default Header;
