// main import
import React from "react";

// utils
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// components
import Header from '../components/header';
import Shelf from '../components/shelf';
import Newsletter from '../components/newsletter';
import Footer from '../components/footer';


// imagens
//main banner
import imagemMainBanner from '../../images/imagemMainBanner.png';

//categorys
import imagemRacoes from '../../images/imagemRacoes.png';
import imagemBrinquedos from '../../images/imagemBrinquedos.png';
import imagemAcessorios from '../../images/imagemAcessorios.png';

//vitrine novidades
import item1 from '../../images/item1.png';
import item2 from '../../images/item2.png';
import item3 from '../../images/item3.png';
import item4 from '../../images/item4.png';

//banners middle
import imagemParaGatos from '../../images/paraGatos.png';
import imagemParaCachorros from '../../images/paraCachorros.png';



const Main = () => {
  const vitrine = [
      {
        id: 1,
        name: 'Lorem ipsum dolor summit',
        image: item1,
        // flag: null,
        fastBuy: 'COMPRA RÁPIDA',
        // listPrice: null,
        bestPrice: 'R$ 219,90',
        // installmentsPrice: null,
      },
      {
        id: 2,
        name: 'Lorem ipsum dolor summit',
        image: item2,
        flag: '50% OFF',
        fastBuy: 'COMPRA RÁPIDA',
        // listPrice: null,
        bestPrice: 'R$ 219,90',
        installmentsPrice: '99x de R$ 99,99',
      },
      {
        id: 3,
        name: 'Lorem ipsum dolor summit',
        image: item3,
        // flag: null,
        fastBuy: 'COMPRA RÁPIDA',
        listPrice: 'R$ 99,99',
        bestPrice: 'R$ 219,90',
        // installmentsPrice: '99x de R$ 99,99',
      },
      {
        id: 4,
        name: 'Lorem ipsum dolor summit',
        image: item4,
        flag: 'NOVO',
        fastBuy: 'INDISPONÍVEL',
        listPrice: 'R$ 99,99',
        bestPrice: 'R$ 219,90',
        installmentsPrice: '99x de R$ 99,99',
      },
    ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
  };

  const settingsMainBanner = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Header />
      <main className="serieD__home">
        <div className="serieD__home-mainBanner">
          <Slider {...settingsMainBanner}>
            <div className="box-banner">
              <img src={imagemMainBanner} alt="Imagem Main Banner" />
            </div>
            <div className="box-banner">
              <img src={imagemMainBanner} alt="Imagem Main Banner" />
            </div>
          </Slider>
        </div>

        <div className="serieD__home-categorys">
          <ul className="serieD__home-categorys-items">
            <li className="serieD__home-categorys-items--item racoes">
              <img src={imagemRacoes} alt="Imagem Rações" />
            </li>
            <li className="serieD__home-categorys-items--item brinquedos">
              <img src={imagemBrinquedos} alt="Imagem Brinquedos" />
            </li>
            <li className="serieD__home-categorys-items--item acessorios">
              <img src={imagemAcessorios} alt="Imagem Acessórios" />
            </li>
          </ul>
        </div>

        <div className="serieD__home-shelf novidades">
          <div className="shelf__main">
            <h2 className="shelf__main-title">Novidades</h2>
            <ul className="shelf__main-items">
              <Slider {...settings}>
                {vitrine.map(item => (
                  <Shelf
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    flag={item.flag}
                    fastBuy={item.fastBuy}
                    listPrice={item.listPrice}
                    bestPrice={item.bestPrice}
                    installmentsPrice={item.installmentsPrice}
                  />
                ))}
              </Slider>
            </ul>
          </div>
        </div>

        <div className="serieD__home-bannersMiddle">
          <div className="serieD__home-bannersMiddle-item paraGatos">
            <img src={imagemParaGatos} alt="Para Gatos" />
          </div>
          <div className="serieD__home-bannersMiddle-item paraCachorros">
            <img src={imagemParaCachorros} alt="Para Cachorros" />
          </div>
        </div>

        <div className="serieD__home-shelf destaques">
          <div className="shelf__main">
            <h2 className="shelf__main-title">Destaques</h2>
            <ul className="shelf__main-items">
              <Slider {...settings}>
                {vitrine.map(item => (
                  <Shelf
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    flag={item.flag}
                    fastBuy={item.fastBuy}
                    listPrice={item.listPrice}
                    bestPrice={item.bestPrice}
                    installmentsPrice={item.installmentsPrice}
                  />
                ))}
              </Slider>
            </ul>
            <ul className="shelf__main-items bottom">
              <Slider {...settings}>
                {vitrine.map(item => (
                  <Shelf
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    flag={item.flag}
                    fastBuy={item.fastBuy}
                    listPrice={item.listPrice}
                    bestPrice={item.bestPrice}
                    installmentsPrice={item.installmentsPrice}
                  />
                ))}
              </Slider>
            </ul>
          </div>
        </div>
      </main>
      <Newsletter />
      <Footer />
    </>
  )
}

export default Main;