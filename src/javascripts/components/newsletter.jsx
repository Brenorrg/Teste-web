import React from 'react';

import iconNews1 from '../../images/svg/iconNews1.svg';

const Newsletter = () => {
  return (
    <>
      <div className="serieD__newsletter">
        <div className="serieD__newsletter-top">
          <ul className="serieD__newsletter-top--items">
            <li className="serieD__newsletter-top--items--item">
              <img src={iconNews1} alt="" />
              <p><strong>ENTREGA GRATUITA</strong> A PARTIR DE R$ 99 </p>
            </li>
            <li className="serieD__newsletter-top--items--item">
              <img src={iconNews1} alt="" />
              <p><strong>PARCELAMENTO</strong> SEM JUROS</p>
            </li>
            <li className="serieD__newsletter-top--items--item">
              <img src={iconNews1} alt="" />
              <p><strong>CADASTRE-SE</strong> E GANHE DESCONTO</p>
            </li>
          </ul>
        </div>
        <div className="serieD__newsletter-bottom">
          <h2 className="serieD__newsletter-bottom--title">ASSINE NOSSA NEWSLETTER</h2>
          <h3 className="serieD__newsletter-bottom--subtitle">Cadastre-se para receber nossas novidades e descontos exclusivos!</h3>
          <form className="serieD__newsletterForm">
            <input type="text" placeholder="Nome" className="serieD__newsletterForm-name" required />
            <input type="email" placeholder="E-mail" className="serieD__newsletterForm-email" required />
            <button className="serieD__newsletterForm-submit">ENVIAR</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Newsletter;