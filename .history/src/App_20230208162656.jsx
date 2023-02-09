
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { primaryRoute } from './routes/primaryRoute';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={primaryRoute} />
    </Provider>
  );
}

export default App;
