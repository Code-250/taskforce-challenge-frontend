import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCovidData } from '../redux/actions/covidData';
import Next from '../assets/next.svg';
import Back from '../assets/back.svg';
import Crouse from 'react-items-carousel';
import Resize from '../helpers/resize.js';
import Header from './hero';
import AllDetails from './allDetails';
import ContinentDetails from './continentData';

const Dashboard = () => {
  const size = Resize();
  console.log('size', size);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = size && size.Width > 800 ? 20 : 0;

  const { total, allContinentData } = useSelector(
    (state) => state.allCases
  );
  console.log(total, allContinentData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCovidData());
  }, [dispatch]);
  console.log('total data', allContinentData);
  return (
    <div className="">
      <Header allCases={total.cases.toLocaleString()} />
      <AllDetails total={total} />

      <div className="text-center">
        <h1 className="larger-black">PER CONTINENTS</h1>

        <div
          style={{
            padding: `0 ${chevronWidth}px`,
            margin: '4rem 0',
          }}
        >
          <Crouse
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={
              size && size.width >= 1200
                ? 2.75
                : size.width <= 600
                ? 1
                : 3.5
            }
            gutter={0}
            showSlither={true}
            activePosition={'center'}
            leftChevron={
              <button type="button" className="next">
                <img src={Next} alt="" />
              </button>
            }
            rightChevron={
              <button type="button" className="back">
                <img src={Back} alt="" />
              </button>
            }
            // outsideChevron
            chevronWidth={chevronWidth}
          >
            {allContinentData &&
              allContinentData.map((continent) => (
                <ContinentDetails continent={continent} />
              ))}
          </Crouse>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
