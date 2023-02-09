import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { store } from './redux/store';
import { primaryRoute } from './routes/primaryRoute';

function App() {
  console.log(import.meta.env.VITE_CMS_API_URL)
  return (
    <Provider store={store}>
      <RouterProvider router={primaryRoute} />
    </Provider>
  );
}

export default App;
