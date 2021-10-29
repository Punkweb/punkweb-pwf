import { pwf, jsx } from 'pwf';
import { Auth } from './services';
import { Error404, Home, Login, SignUp } from './views';
import Nav from './components/nav';
import '../scss/defaults.scss';
import './app.scss';

if (Auth.isLoggedIn()) {
  Auth.getUser(localStorage.getItem('uid'));
}

let root = document.querySelector('app-root');

pwf.router.init(root, [
  {
    path: '/',
    component: () => {
      return (
        <div>
          <Nav />
          <Home />
        </div>
      );
    },
  },
  {
    path: '/login/',
    component: () => {
      return (
        <div>
          <Nav />
          <Login />
        </div>
      );
    },
  },
  {
    path: '/sign-up/',
    component: () => {
      return (
        <div>
          <Nav />
          <SignUp />
        </div>
      );
    },
  },
  {
    path: '/:404',
    component: () => {
      return (
        <div>
          <Nav />
          <Error404 />
        </div>
      );
    },
  },
]);
