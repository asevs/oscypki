import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import OlxIcon from '../../assets/olx.svg';
import FbIcon from '../../assets/fb.svg';

const Header = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const isOpen = () => {
    setOpenMenu(!isOpenMenu);
  };

  return (
    <header className="sticky top-0 bg-white shadow ">
      <div className="relative sm:hidden">
        <button
          onClick={() => isOpen()}
          type="button"
          className="cursor-pointer absolute p-3 top-0 right-0 block text-gray-500 hover:text-white focus:text-white focus:outline-none"
        >
          <svg viewBox="0 0 100 80" width="35" height="35">
            <rect width="100" height="20" rx="8" fill="#92400E"></rect>
            <rect y="30" width="100" height="20" rx="8" fill="#92400E"></rect>
            <rect y="60" width="100" height="20" rx="8" fill="#92400E"></rect>
          </svg>
        </button>
      </div>

      <div className=" container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <div className="flex items-center text-2xl">
          <div className="w-12 mr-3">logo</div>
          logo
        </div>
        <div
          onClick={() => isOpen()}
          onKeyDown={() => isOpen()}
          className={
            isOpenMenu
              ? ' flex mt-4 sm:mt-0 flex-col sm:flex-row items-center absolute top-0 bg-white w-full sm:static sm:w-auto'
              : 'hidden flex flex-cols mt-4 sm:mt-0 sm:flex flex-row items-center flex-cols absolute top-0 bg-white w-full sm:static sm:w-auto'
          }
          role="presentation"
        >
          <AnchorLink
            className="py-2 sm:px-4 text-yellow-800 text-opacity-100"
            href="#produktyregionalne"
          >
            Produkty regionalne
          </AnchorLink>
          <AnchorLink
            className="py-2 sm:px-4 text-yellow-800 text-opacity-100"
            href="#wyrobyludowe"
          >
            Wyroby ludowe
          </AnchorLink>
          <AnchorLink className="py-2 sm:px-4 text-yellow-800 text-opacity-100" href="#onas">
            O nas
          </AnchorLink>
          <AnchorLink className="py-2 sm:px-4 text-yellow-800 text-opacity-100" href="#kontakt">
            Kontakt
          </AnchorLink>
          <a href="https://www.olx.pl">
            <img alt="olxicon" className="py-2 sm:px-4" src={OlxIcon} />
          </a>
          <a href="https://facebook.com">
            <img alt="fbicon" className="py-2 sm:px-4" src={FbIcon} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
