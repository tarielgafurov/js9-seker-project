import { Provider } from 'react-redux';
import './App.css';
import Announcement from './UI/Announcnement';
import FullDetails from './companents/FullDetails';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      {/* <Announcement/> */}
      <FullDetails/>
    </Provider>
  );
}

export default App;
