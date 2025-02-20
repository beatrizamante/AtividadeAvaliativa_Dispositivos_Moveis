import { render } from '@testing-library/react-native';
import LinkButton from '../../components/LinkButton';

describe('<HomeScreen />', () => {
  test('Text renders correctly on HomeScreen', () => {
    const { getByTestId } = render(<LinkButton onPress={() => "Clicked"} />);

    expect(getByTestId("link-button")).toBeVisible()
    //getByText('Welcome!');
  });
});