import { pwf, jsx } from 'pwf';
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
    <div className="container">
      <div className="login">
        <div className="panel">
          <div className="panel-body padding">
            <form on={{ submit: (e: any) => login(e) }}>
              <h2 className="login-header">Sign in</h2>
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
                New Here? <a attrs={{ 'router-link': '/sign-up/' }}>Sign up</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
