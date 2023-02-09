import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { primaryRoute } from './routes/primaryRoute';

function App() {
  return (
    <Provider>
      <RouterProvider router={primaryRoute} />
    </Provider>
  );
}

export default App;
