import { pwf } from 'pwf';
import { Auth } from '../../services';
import './login.scss';

let username = '';
let password = '';
let errorMessage = '';

function login(e: any) {
  e.preventDefault();
  Auth.login({ username, password }).then(() => {
    username = '';
    password = '';
    pwf.router.navigate('/');
  });
}

export default function Login() {
  return (
    <div class="container">
      <div class="login">
        <div class="panel">
          <div class="panel-body padding">
            <form onSubmit={(e: any) => login(e)}>
              <h2 class="login-header">Sign in</h2>
              <label>Username</label>
              <input
                class="full-width margin-bottom"
                type="text"
                name="username"
                value={username}
                onInput={(e: any) => {
                  username = e.target.value;
                }}
              />
              <label>Password</label>
              <input
                class="full-width margin-bottom"
                type="password"
                name="password"
                value={password}
                onInput={(e: any) => {
                  password = e.target.value;
                }}
              />
              {errorMessage && <p>{errorMessage}</p>}
              <button class="button-primary full-width margin-bottom" type="submit" disabled={!username || !password}>
                Sign in
              </button>
              <div>
                New Here? <a router-link="/sign-up/">Sign up</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
