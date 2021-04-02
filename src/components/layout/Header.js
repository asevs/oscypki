import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import OlxIcon from '../../assets/olx.svg';
import FbIcon from '../../assets/fb.svg';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">logo</div>
        logo
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4 text-yellow-800 text-opacity-100" href="#produktyregionalne">
          Produkty regionalne
        </AnchorLink>
        <AnchorLink className="px-4 text-yellow-800 text-opacity-100" href="#wyrobyludowe">
          Wyroby ludowe
        </AnchorLink>
        <AnchorLink className="px-4 text-yellow-800 text-opacity-100" href="#onas">
          O nas
        </AnchorLink>
        <AnchorLink className="px-4 text-yellow-800 text-opacity-100" href="#kontakt">
          Kontakt
        </AnchorLink>
        <a href="https://olx.pl">
          <img alt="olxicon" className="px-4" src={OlxIcon} />
        </a>
        <a href="https://facebook.com">
          <img alt="fbicon" className="px-4" src={FbIcon} />
        </a>
      </div>
    </div>
  </header>
);

export default Header;
