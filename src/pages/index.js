import React from 'react';
import { SEO } from 'gatsby-plugin-seo';
import Card from '../components/Card';
import Layout from '../components/layout/Layout';
import Sklep from '../images/sklep.jpg';
import banner from '../images/tlo.webp';
import ContactForm from '../components/ContactForm';
import { regionalProducts, folkProducts } from '../images/images';

export default () => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="Description of the site/home page."
        pagePath="/"
        schema={`{
              "@context": "http://schema.org",
              "@type": "WebPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "OSCYPMASTER",
                "image": "https://oscypmaster.pl/static/logo-0c75c84648e608a1885836d7e597ec5c.webp"
              }
            }`}
      />
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
      <section id="produktyregionalne" className="py-40 lg:pb-20 lg:pt-40">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold ">Produkty regionalne</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
            {regionalProducts.map(({ images, price, description }) => (
              <Card description={description} images={images} price={price} />
            ))}
          </div>
        </div>
      </section>
      <section id="wyrobyludowe" className="bg-gray-200 py-40 lg:pb-20 lg:pt-32">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Wyroby ludowe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
            {folkProducts.map(({ images, price, description }) => (
              <Card description={description} images={images} price={price} />
            ))}
          </div>
        </div>
      </section>

      <section id="onas" className="pt-40 pb-20 md:pt-32">
        <div className="container mx-auto text-center mb-6">
          <h2 className="text-3xl lg:text-5xl font-semibold">O nas</h2>
        </div>
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <p className="text-xl lg:text-2xl p-6 pt-4 font-light text-justify">
              Jesteśmy firmą istniejącą na rynku od 2002 roku zajmującą się handlem wyrobami
              regionalnymi. Głównymi atutami wyróżniającymi nas na tle innych przedsiębiorstw, są
              rzetelność oraz szacunek do każdego klienta. W naszej ofercie znajdują się sery
              góralskie, owcze w sezonie letnim, oraz krowie w sezonie zimowym. Wyroby regionalne z
              Podhala, jak i Beskidu Żywieckiego, które dopasujemy do każdego zainteresowanego
              klienta. Promujemy również miejscowych twórców ludowych, którzy ręcznie rzeźbią
              drewniane zabawki. Zapraszamy do kontaktu poprzez formularz oraz na nasze stoiska.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img className="p-6" src={Sklep} alt="sklep" />
          </div>
        </div>
      </section>
      <section id="kontakt" className="bg-gray-200 py-40 lg:pb-20 lg:pt-32">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Kontakt</h2>
          <div className="flex flex-col sm:flex-row sm:-mx-2 mt-12">
            <div className="flex-1 px-2 text-left">
              <h2 className="text-3xl  font-semibold">Dane kontaktowe</h2>

              <p className="text-xl font-semibold mt-4">Telefon:</p>
              <p>+48 515 802 766</p>
              <p>+48 697 133 318</p>

              <p className="text-xl font-semibold mt-3">Email:</p>
              <p>kontakt@oscypmaster.pl</p>
              <p className="text-xl font-semibold mt-3">Adres:</p>
              <div className="flex flex-col sm:flex-row sm:-mx-2">
                <div className=" mr-10 ml-2">
                  <p className="font-semibold">Punkt Targówek</p>
                  <p>34-300 Żywiec</p>
                  <p>ul. Świetokrzyska 40b</p>
                </div>
                <div>
                  <p className="font-semibold">Punkt Galeria Wesoła 71</p>
                  <p>34-300 Żywiec</p>
                  <p>ul. Wesoła 71</p>
                </div>
              </div>
            </div>
            <div className="flex-1 px-2 text-left">
              <h2 className="text-3xl  font-semibold">Godziny otwarcia</h2>
              <p className="text-xl font-semibold mt-4">Poniedziałek - Piątek</p>
              <p>8:00 - 17:00</p>
              <p className="text-xl font-semibold mt-3">Sobota</p>
              <p>8:00 - 15:00</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:-mx-2 mt-12">
            <div className="flex-1 px-2">
              <iframe
                title="mapa"
                src="https://www.google.com/maps/d/embed?mid=1EpZ3bvvW7uLZUDyoDKo6bnSRhk1IivqP&z=14"
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
