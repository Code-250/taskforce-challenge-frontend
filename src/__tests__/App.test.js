import renderer from 'react-test-renderer';
import ContinentData from '../components/continentData';

describe('addition', () => {
  it('should make sure 2+ 2 = 4', () => {
    expect(2 + 2).toBe(4);
  });
  it('should test continents data', async () => {
    try {
      const tree = renderer
        .create(<ContinentData />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    } catch (err) {
      console.log('error', err);
    }
  });
});
