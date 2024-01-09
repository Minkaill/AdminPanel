import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import { router } from 'routes';
import { store } from 'store';

import './index.scss'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Toaster />
      <RouterProvider router={router} />
  </Provider>
)
