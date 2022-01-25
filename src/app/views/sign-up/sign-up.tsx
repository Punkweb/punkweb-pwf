import { pwf } from 'pwf';
import { Auth } from '../../services';
import './sign-up.scss';

let username = '';
let password = '';
let errorMessage = '';

function signup(e: any) {
  e.preventDefault();
  Auth.signup({ username, password }).then(() => {
    username = '';
    password = '';
    pwf.router.navigate('/login/');
  });
}

export default function SignUp() {
  return (
    <div class="container">
      <div class="sign-up">
        <div class="panel">
          <div class="panel-body padding">
            <form onSubmit={(e: any) => signup(e)}>
              <h2 class="sign-up-header">Sign up</h2>
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
                Have an account? <a router-link="/login/">Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
