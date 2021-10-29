import { pwf, jsx } from 'pwf';
import { Auth } from '../services';
import './nav.scss';

let user: any = null;
Auth.user$.subscribe((_user) => {
  user = _user;
});

function signOut(e: any) {
  if (e) {
    e.preventDefault();
  }
  Auth.logout();
  pwf.router.navigate('/login/');
}

export default function Nav() {
  return (
    <div className="nav">
      <div className="container">
        <div className="nav-content">
          <a className="nav-title" attrs={{ 'router-link': '/' }}>
            punkweb
          </a>
          <div className="nav-links">
            <a className="nav-link" attrs={{ 'router-link': '/music/', 'title': 'Music' }}>
              <span className="nav-link-icon">
                <i className="fas fa-music fa-fw"></i>
              </span>
              <span>Music</span>
            </a>
          </div>
          <div className="nav-spacer"></div>
          {user ? (
            <div className="nav-links">
              <a
                className="nav-link"
                attrs={{
                  title: 'Sign Out',
                }}
                on={{
                  click: (e) => {
                    signOut(e);
                  },
                }}
              >
                <i className="nav-link-icon fas fa-sign-out-alt"></i>
                <span className="hide-on-mobile">Sign Out</span>
              </a>
            </div>
          ) : (
            <div className="nav-links">
              <a className="nav-link" attrs={{ 'router-link': '/sign-up/', 'title': 'Sign Up' }}>
                <i className="nav-link-icon fas fa-user-plus"></i>
                <span className="hide-on-mobile">Sign Up</span>
              </a>
              <a className="nav-link" attrs={{ 'router-link': '/login/', 'title': 'Login' }}>
                <i className="nav-link-icon fas fa-sign-in-alt"></i>
                <span className="hide-on-mobile">Login</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
