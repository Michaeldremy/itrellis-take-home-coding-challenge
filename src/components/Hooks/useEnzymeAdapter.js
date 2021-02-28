import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const useEnzymeAdapter = () => {
  configure({ adapter: new Adapter() });
}

export {
  useEnzymeAdapter
}