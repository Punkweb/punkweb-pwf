import { pwf } from 'pwf';
import { API } from '../../services';
import micAndInterface from '../../../assets/img/mic-and-interface.jpg';
import './home.scss';

let email = '';
let subject = '';
let body = '';
let contactSuccess = '';
let contactError = '';

function submitContactForm(e: any) {
  if (e) {
    e.preventDefault();
  }
  contactSuccess = '';
  contactError = '';
  API.ContactForms.create({
    contact_info: email,
    subject,
    body,
  })
    .then(() => {
      email = '';
      subject = '';
      body = '';
      contactSuccess = `Thanks for reaching out.  If an email was provided we'll get back to you soon.`;
    })
    .catch(() => {
      contactError = `There was an error submitting your contact form.  Try again later.`;
    });
}

export default function Home() {
  return (
    <div class="container">
      <div class="panel">
        <div class="home-header">
          <div class="home-header__img-wrap">
            <img src={micAndInterface} alt="Punkweb" />
          </div>
          <h1 class="home-header__title">Punkweb</h1>
        </div>
        <div class="panel-body padding">
          <p>Punkweb is a music release platform for amatuer musicians and producers.</p>
          <h4>What can Punkweb offer me as an artist?</h4>
          <ul>
            <li>Unlimited song uploads and streaming.</li>
            <li>Schedule releases for a specific date.</li>
            <li>Add lyrics to your tracks. Let your words be heard.</li>
            <li>List upcoming concerts and events.</li>
            <li>Design and sell merch risk free, without inventory. Keep all your earnings.</li>
            <li>
              <strong>... It's completely free!</strong>
            </li>
          </ul>
          <p>
            Artists on Punkweb can stream their music, inform fans about upcoming events, and sell merch. All in one
            place!
          </p>
          <h4>Contact Us</h4>
          {!contactSuccess && (
            <form class="contact-form" onSubmit={(e: any) => submitContactForm(e)}>
              <blockquote>
                The site is under construction, but we're looking for artists who're interested in joining today.
                <br />
                Shoot us your email and some brief information about your act and we'll send you an email reply.
              </blockquote>
              <small class="margin-bottom">Replies will be sent to the email entered below.</small>
              <input
                class="margin-bottom"
                type="email"
                placeholder="Email"
                onInput={(e: any) => {
                  email = e.target.value;
                }}
              />
              <input
                class="margin-bottom"
                type="text"
                placeholder="Subject"
                onInput={(e: any) => {
                  subject = e.target.value;
                }}
              />
              <textarea
                class="margin-bottom"
                placeholder="Body"
                onInput={(e: any) => {
                  body = e.target.value;
                }}
              ></textarea>
              {contactError && <p class="error-text">{contactError}</p>}
              <button class="button-primary" type="submit" disabled={!email || !subject || !body}>
                Send
              </button>
            </form>
          )}
          {contactSuccess && <p class="success-text">{contactSuccess}</p>}
        </div>
      </div>
    </div>
  );
}
