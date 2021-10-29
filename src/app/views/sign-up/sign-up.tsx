import { pwf, jsx } from 'pwf';
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
    <div className="container">
      <div className="sign-up">
        <div className="panel">
          <div className="panel-body padding">
            <form on={{ submit: (e: any) => signup(e) }}>
              <h2 className="sign-up-header">Sign up</h2>
              <label>Username</label>
              <input
                className="full-width margin-bottom"
                attrs={{ type: 'text', name: 'username', value: username }}
                on={{
                  input: (e: any) => {
                    username = e.target.value;
                  },
                }}
              />
              <label>Password</label>
              <input
                className="full-width margin-bottom"
                attrs={{ type: 'password', name: 'password', value: password }}
                on={{
                  input: (e: any) => {
                    password = e.target.value;
                  },
                }}
              />
              {errorMessage && <p>{errorMessage}</p>}
              <button
                className="button-primary full-width margin-bottom"
                attrs={{
                  type: 'submit',
                  disabled: !username || !password,
                }}
              >
                Sign in
              </button>
              <div>
                Have an account? <a attrs={{ 'router-link': '/login/' }}>Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
