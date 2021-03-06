import { pwf } from 'pwf';

export default function Error404() {
  return (
    <div class="container">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>The page you requested does not exist or an error occured.</p>
      <a class="button" router-link="/">
        Take me home
      </a>
    </div>
  );
}
