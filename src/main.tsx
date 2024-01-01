import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import { router } from 'routes';
import { store } from 'store';

import './index.scss'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
