import React from 'react';
import emailjs from 'emailjs-com';

export default class IndexPage extends React.Component {
  state = {
    firstName: '',
    email: '',
    message: ''
  };
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const email = target.email;
    const message = target.message;
    this.setState({
      [name]: value,
      [email]: email,
      [message]: message
    });
  };
  handleSubmit = event => {
    event.preventDefault();

    emailjs
      .sendForm('service_asevs', 'template_xtf8erl', event.target, 'user_77kVpPZwe3Ysw2d0xwzcS')
      .then(
        result => {
          alert('Wysłano wiadomość');
        },
        error => {
          console.log(error.text);
        }
      );
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            class="w-full bg-gray-400 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Imie"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
        </div>
        <div class="mt-8">
          <input
            class="w-full bg-gray-400 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </div>
        <div class="mt-8">
          <textarea
            class="w-full h-32 bg-gray-400 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Treść wiadomości"
            type="message"
            name="message"
            value={this.state.message}
            onChange={this.handleInputChange}
          ></textarea>
        </div>
        <div class="mt-8">
          <button class=" uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline max-w-xs">
            Wyślij
          </button>
        </div>
      </form>
    );
  }
}
