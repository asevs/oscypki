import React from 'react';
import emailjs from 'emailjs-com';

export default class IndexPage extends React.Component {
  state = {
    firstName: '',
    email: '',
    message: '',
    checkbox: false
  };
  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    if (this.state.checkbox === true) {
      event.preventDefault();
      emailjs
        .sendForm('service_asevs', 'template_0ie1rhs', event.target, 'user_77kVpPZwe3Ysw2d0xwzcS')
        .then(
          result => {
            confirm('Wysłano wiadomość');
          },
          error => {
            console.log(error.text);
          }
        );
    } else {
      confirm('Zaakceptuj zgodę na przetwarzanie danych osobowych.');
    }
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
        <div className="text-xs text-left">
          <div>
            <input
              name="checkbox"
              type="checkbox"
              checked={this.state.checkbox}
              onChange={this.handleInputChange}
            />
          </div>
          Wyrażam zgodę na przetwarzanie moich danych osobowych w postaci imienia, nazwiska, adresu
          e-mail (jeżeli został podany), podanych w powyższym formularzu, zgodnie z przepisami
          rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w
          sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
          swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne
          rozporządzenie o ochronie danych), Dz. Urz. UE z 4.5.2016 r. L 119, str. 1), w celu
          udzielenia odpowiedzi na złożone zapytanie. Żądanie usunięcia danych proszę kierować na
          adres kontakt@oscypmaster.pl
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
