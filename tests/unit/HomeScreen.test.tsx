import { render } from '@testing-library/react-native';
import HomeScreen from '../../components/HomeScreen';


describe('<HomeScreen />', () => {
  test('Text renders correctly on HomeScreen', () => {
    const { getByText, getByTestId } = render(<HomeScreen />);

    expect(getByTestId("test123")).toBeVisible()
    //getByText('Welcome!');
  });
});
