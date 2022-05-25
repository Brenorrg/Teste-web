import React from 'react';

import logoFooter from '../../images/svg/logo.svg';
import iconFacebook from '../../images/svg/iconFacebook.svg';
import iconInstagram from '../../images/svg/iconInstagram.svg';
import iconTwitter from '../../images/svg/iconTwitter.svg';

import paymentForm from '../../images/svg/paymentForm.svg';
import logoSerieD from '../../images/svg/logoSerieD.svg';


const Footer = () => {
  return (
    <>
      <footer>
        <div className="serieD__footer">
          <div className="serieD__footer-left">
            <img src={logoFooter} alt="Logo" />

            <ul className="serieD__footer-social">
              <li className="serieD__footer-social--item fb">
                <img src={iconFacebook} alt="Facebook" />
              </li>
              <li className="serieD__footer-social--item ig">
                <img src={iconInstagram} alt="Instagram" />
              </li>
              <li className="serieD__footer-social--item tt">
                <img src={iconTwitter} alt="Twitter" />
              </li>
            </ul>

            <span className="serieD__footer-copyright">
              © 2019  •  CNPJ 00.000.000/0000-00 Rua Tal de Tal, 123 - Cidade, Estado
            </span>
          </div>

          <ul className="serieD__footer-institutional">
              <h2 className="serieD__footer-institutional--title">PET STORE</h2>
              <li className="serieD__footer-institutional--item">Quem Somos</li>
              <li className="serieD__footer-institutional--item">Como Comprar</li>
              <li className="serieD__footer-institutional--item">Trocas e Devoluções</li>
              <li className="serieD__footer-institutional--item">Frete e Entregas</li>
          </ul>

          <ul className="serieD__footer-institutional">
              <h2 className="serieD__footer-institutional--title">PET STORE</h2>
              <li className="serieD__footer-institutional--item">(99) 9999-9999</li>
              <li className="serieD__footer-institutional--item">(99) 9999-9999</li>
              <li className="serieD__footer-institutional--item">petstore@petstore.com.br</li>
          </ul>

          <div className="serieD__footer-payment">
              <h2 className="serieD__footer-payment--title">PAGAMENTO</h2>
              <img src={paymentForm} alt="Formas de Pagamento" />
          </div>

        </div>
        <div className="serieD__madeBy">
          <span class="serieD__madeBy-text">TECNOLOGIA E DESENVOLVIMENTO:</span>
          <img src={logoSerieD} alt="Seri.e Design" />
        </div>
      </footer>
    </>
  )
}

export default Footer;