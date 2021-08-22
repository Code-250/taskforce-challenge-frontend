import React from 'react';

const CovidDetails = ({
  name,
  text,
  today,
  todayColor,
  total,
  totalColor,
}) => {
  return (
    <div className={name}>
      <p className={todayColor}>{today}</p>
      <p className="bold">
        {name === `card` ? `New ${text}` : text}
      </p>
      <p className={totalColor}>
        {name === `card` ? `Total ${total}` : total}
      </p>
    </div>
  );
};

export default CovidDetails;
