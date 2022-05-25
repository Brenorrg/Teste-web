import React, { useState, useEffect } from 'react';
import $ from 'jquery';

import logo from '../../images/svg/logo.svg';
import account from '../../images/svg/account.svg';
import minicart from '../../images/svg/minicart.svg';
import hamburger from '../../images/svg/hamburger.svg';


const Header = () => {
  const [active, setActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

    window.addEventListener('scroll', () => {
       if(window.scrollY > 100){
        setActive(true)
       } else {
        setActive(false)
       }
    });

    const openMenu = () => {
      setActiveMenu(true)
    };

    const closeMenu = () => {
      setActiveMenu(false)
    };

    const openSubmenu = () => {
      $('body').on('click', '.serieD__menu-items--item > p', function() {
        $(this).toggleClass('opened');
        $(this).next().toggleClass('opened');
      });

      $('body').on('click', '.serieD__submenu-item > p', function() {
        $(this).toggleClass('opened');
        $(this).next().toggleClass('opened');
      });
    };

    useEffect(() => {
      openSubmenu();
    }, []);
    

  return (
    <>
      <header>
        <div className={active ? "serieD__header active" : "serieD__header"}>
          <div className="serieD__header-top">
            <div className="serieD__header-top--left">
              <form class="header__search">
                <input type="text" class="header__search-input" placeholder="Pesquisar..." />
                <button class="header__search-submit" />
              </form>

              <img src={hamburger} onClick={openMenu} className={active ? "header__hamburger" : "header__hamburger hidden"} alt="Menu" />
            </div>

            <div className="serieD__header-top--center">
              <img src={logo} className="serieD__logo" alt="Logo" />
            </div>

            <div className="serieD__header-top--right">
              <img src={account} className="serieD__account" alt="Account" />
              <div className="serieD__minicart">
                <img src={minicart} className="serieD__minicart-icon" alt="Minicart" />
                <span className="serieD__minicart-amount">99</span>
              </div>
            </div>
          </div>
          <div className="serieD__header-bottom">
            <div className={activeMenu ? "serieD__header-bottom--overlay activeMenu" : "serieD__header-bottom--overlay"} onClick={closeMenu}></div>
            <nav className={activeMenu ? "serieD__menu activeMenu" : "serieD__menu"}>
              <ul className="serieD__menu-items">
                <li className="serieD__menu-items--item">
                  <p>Categoria lorem</p>
                </li>
                <li className="serieD__menu-items--item">
                  <p>Categoria</p>
                  <ul className="serieD__submenu">
                    <li className="serieD__submenu-item">
                      <p>Subcategoria lorem</p>
                    </li>
                    <li className="serieD__submenu-item">
                      <p>Subcategoria</p>
                    </li>
                    <li className="serieD__submenu-item">
                      <p>Subcategoria lorem ipsum</p>
                      <ul className="serieD__submenu2">
                        <li className="serieD__submenu2-item">
                          <p>Subcategoria lorem</p>
                        </li>
                        <li className="serieD__submenu2-item">
                          <p>Subcategoria</p>
                        </li>
                        <li className="serieD__submenu2-item">
                          <p>Subcategoria lorem ipsum</p>
                        </li>
                        <li className="serieD__submenu2-item">
                          <p>Subcategoria lorem</p>
                        </li>
                        <li className="serieD__submenu2-item">
                          <p>Subcategoria</p>
                        </li>
                      </ul>
                    </li>
                    <li className="serieD__submenu-item">
                      <p>Subcategoria lorem</p>
                    </li>
                    <li className="serieD__submenu-item">
                      <p>Subcategoria</p>
                    </li>
                  </ul>
                </li>
                <li className="serieD__menu-items--item">
                  <p>Categoria lorem ipsum</p>
                </li>
                <li className="serieD__menu-items--item">
                  <p>Categoria lorem</p>
                </li>
                <li className="serieD__menu-items--item">
                  <p>Categoria</p>
                </li>
                <li className="serieD__menu-items--item">
                  <p>Categoria lorem ipsum</p>
                </li>
                <li className="serieD__menu-items--item">
                  <p>Categoria ipsum</p>
                </li>
              </ul>
              <img src={hamburger} className="serieD__menu-hamburger" alt="Menu" />
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;