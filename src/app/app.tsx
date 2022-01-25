import { pwf } from 'pwf';
import { Auth } from './services';
import { Error404, Home, Login, SignUp } from './views';
import Nav from './components/nav';
import '../scss/defaults.scss';
import './app.scss';

// TODO: Make pwf export this so that it doesn't have to be in the project
declare global {
  namespace JSX {
    type Element = any;
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

if (Auth.isLoggedIn()) {
  Auth.getUser(localStorage.getItem('uid'));
}

let root = document.querySelector('app-root');

pwf.router.init(root, [
  {
    path: '/',
    component: () => (
      <>
        <Nav />
        <Home />
      </>
    ),
  },
  {
    path: '/login/',
    component: () => (
      <>
        <Nav />
        <Login />
      </>
    ),
  },
  {
    path: '/sign-up/',
    component: () => (
      <>
        <Nav />
        <SignUp />
      </>
    ),
  },
  {
    path: '/:404',
    component: () => (
      <>
        <Nav />
        <Error404 />
      </>
    ),
  },
]);
