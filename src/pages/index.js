import React from 'react';
import Card from '../components/Card';
import Layout from '../components/layout/Layout';
import Oscypek from '../assets/oscypek.jpg';
import Skarpety from '../assets/skarpety.jpg';
import Sklep from '../assets/sklep.jpg';
import Chusta from '../assets/chusta.jpg';
import banner from '../assets/tlo.jpg';
import ContactForm from '../components/ContactForm';

export default () => {
  return (
    <Layout>
      <section
        className="h-screen pt-20 md:pt-56 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="bg-black bg-opacity-50">
          <div className="container mx-auto px-8 lg:flex ">
            <div className=" my-24 text-center lg:text-left lg:w-1/2">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-none text-white">
                SERY GÓRALSKIE
              </h1>
              <p className="text-white text-xl lg:text-3xl mt-6 ">
                SMACZNE I ZDROWE SERY GÓRALSKIE
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="produktyregionalne" className="py-20 lg:pb-20 lg:pt-40">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold ">Produkty regionalne</h2>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8" image={Oscypek} description="Bundz wędzony z czarnuszką" />
            </div>
            <div className="flex-1 px-3">
              <Card image={Oscypek} description="Bundz wędzony z czarnuszką" />
            </div>
            <div className="flex-1 px-3">
              <Card image={Oscypek} description="Bundz wędzony z czarnuszką" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:-mx-3">
            <div className="flex-1 px-3">
              <Card image={Oscypek} description="Bundz wędzony z czarnuszką" />
            </div>
            <div className="flex-1 px-3">
              <Card image={Oscypek} description="Bundz wędzony z czarnuszką" />
            </div>
            <div className="flex-1 px-3">
              <Card image={Skarpety} description="Bundz wędzony z czarnuszką" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:-mx-3">
            <div className="flex-1 px-3">
              <Card image={Oscypek} description="Bundz wędzony z czarnuszką" />
            </div>
            <div className="flex-1 px-3">
              <Card image={Oscypek} description="Bundz wędzony z czarnuszką" />
            </div>
            <div className="flex-1 px-3">
              <Card image={Oscypek} description="Bundz wędzony z czarnuszką" />
            </div>
          </div>
        </div>
      </section>
      <section id="wyrobyludowe" className="bg-gray-200 py-20 lg:pb-20 lg:pt-32">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Wyroby ludowe</h2>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card image={Chusta} description="Bundz wędzony z czarnuszką" />
            </div>
            <div className="flex-1 px-3">
              <Card image={Oscypek} description="Bundz wędzony z czarnuszką" />
            </div>
            <div className="flex-1 px-3">
              <Card image={Oscypek} description="Bundz wędzony z czarnuszką" />
            </div>
          </div>
        </div>
      </section>

      <section id="onas" className="pt-20 pb-20 md:pt-32">
        <div className="container mx-auto text-center mb-6">
          <h2 className="text-3xl lg:text-5xl font-semibold">O nas</h2>
        </div>
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <p className="text-xl lg:text-2xl p-6 font-light text-justify">
              Codziennie dokładamy wszelkich starań, aby produkty, z których wytwarzamy nasze wyroby
              były pozbawione konserwantów, zanieczyszczeń i zbędnej chemii. Abyśmy mogli jeść
              rzeczy, jak dawniej nasi dziadkowie: zdrowe pełne witamin i minerałów, po które
              chętnie sięgamy i po których nie czujemy się źle, ospale czy mamy niestrawności, ale
              jesteśmy pełni wigoru i energii do życia!
            </p>
          </div>
          <div className="lg:w-1/2">
            <img className="p-6" src={Sklep} alt="sklep" />
          </div>
        </div>
      </section>
      <section id="kontakt" className="bg-gray-200 py-20 lg:pb-20 lg:pt-32">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Kontakt</h2>
          <div className="flex flex-col sm:flex-row sm:-mx-2 mt-12">
            <div className="flex-1 px-2 text-left">
              <h2 className="text-3xl  font-semibold">Dane kontaktowe</h2>

              <p className="text-xl font-semibold mt-4">Telefon:</p>
              <p>123456677</p>
              <p className="text-xl font-semibold mt-3">Email:</p>
              <p>dsadsa@dsa.pl</p>
              <p className="text-xl font-semibold mt-3">Adres:</p>
              <p>Oscypki xd</p>
              <p>34-300 Żywiec</p>
              <p>ul. Stefana Żeromskiego 22</p>
            </div>
            <div className="flex-1 px-2 text-left">
              <h2 className="text-3xl  font-semibold">Godziny otwarcia</h2>
              <p className="text-xl font-semibold mt-4">Poniedziałek - Piątek</p>
              <p>8:00 - 20:00</p>
              <p className="text-xl font-semibold mt-3">Sobota</p>
              <p>8:00 - 20:00</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:-mx-2 mt-12">
            <div className="flex-1 px-2">
              <iframe
                title="mapa"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6138.801058095978!2d19.19608803287503!3d49.6910707489603!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xff8fc8731d21551c!2zVGFyZ8Ozd2Vr!5e0!3m2!1spl!2spl!4v1617354103733!5m2!1spl!2spl"
                width="600"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="w-full"
              />
            </div>
            <div className="flex-1 px-2">
              <div className="max-w-2xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
