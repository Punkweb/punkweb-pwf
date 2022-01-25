import { pwf } from 'pwf';
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
    <div class="nav">
      <div class="container">
        <div class="nav-content">
          <a class="nav-title" router-link="/">
            punkweb
          </a>
          <div class="nav-links">
            <a class="nav-link" router-link="/music/" title="Music">
              <span class="nav-link-icon">
                <i class="fas fa-music fa-fw"></i>
              </span>
              <span>Music</span>
            </a>
          </div>
          <div class="nav-spacer"></div>
          {user ? (
            <div class="nav-links">
              <a
                class="nav-link"
                title="Sign Out"
                onClick={(e: any) => {
                  signOut(e);
                }}
              >
                <i class="nav-link-icon fas fa-sign-out-alt"></i>
                <span class="hide-on-mobile">Sign Out</span>
              </a>
            </div>
          ) : (
            <div class="nav-links">
              <a class="nav-link" router-link="/sign-up/" title="Sign Up">
                <i class="nav-link-icon fas fa-user-plus"></i>
                <span class="hide-on-mobile">Sign Up</span>
              </a>
              <a class="nav-link" router-link="/login/" title="Login">
                <i class="nav-link-icon fas fa-sign-in-alt"></i>
                <span class="hide-on-mobile">Login</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
