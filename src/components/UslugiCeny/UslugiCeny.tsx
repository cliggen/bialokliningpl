import React from 'react';
import './UslugyCeny.styles.scss';

import pufaImg from '../../assets/images/uslugi-2.png';
import sofaImg from '../../assets/images/uslugi-5.png';
import chairImg from '../../assets/images/uslugi-1.png';
import pillowImg from '../../assets/images/uslugi-3.png';
import sofaTwoImg from '../../assets/images/uslugi-4.png';


const UslugiCeny = () => {
    return (
        <div className='uslugi-wrapper' id="uslugi">
            <div className="uslugiICenyTitleBlock">
                <div className="uslugiICenyTitleShadow">Usługi i ceny</div>
                <div className="uslugiICenyTitle">Usługi i ceny</div>
            </div>


            <div className="uslugi-content">
                <div className="uslugiICenyitem">
                    <span className='pufa-slogan'> Pranie mebli tapicerowanych oraz wykładzin. </span>
                    <img src={pufaImg} alt="pufa"/>
                    <div className="uslugiICenyPriceList">
                        <div className="uslugiICenyPriceListItem">
                            <span>Pufa mała</span>
                            <span>- 10 zł</span>
                        </div>
                        <div className="uslugiICenyPriceListItem">
                            <span>Pufa duża</span>
                            <span>- 20 zł</span>
                        </div>
                    </div>
                </div>
                <div className="uslugiICenyitem">
                    <img src={sofaImg} alt="sofa"/>
                    <div className="uslugiICenyPriceList">
                        <div className="uslugiICenyPriceListItem">
                            <span>Sofa mała 1 os. <br/>Fotel rozkładany </span>
                            <span>- 60 zl</span>
                        </div>
                        <div className="uslugiICenyPriceListItem">
                            <span>Sofa/Kanapa<br/>/Wersalka 2 os.</span>
                            <span>- 80 zł</span>
                        </div>
                        <div className="uslugiICenyPriceListItem">
                            <span> Sofa/Kanapa 2 os.<br/>rozkładana</span>
                            <span>- 100 zł</span>
                        </div>
                        <div className="uslugiICenyPriceListItem">
                            <span>Sofa/Kanapa 3 os.</span>
                            <span>- 100 zł</span>
                        </div>
                    </div>
                </div>
                <div className="uslugiICenyitem">
                    <img src={chairImg} alt="chair"/>
                    <div className="uslugiICenyPriceList">
                        <div className="uslugiICenyPriceListItem">
                            <span>Krzesło/fotel biurowy </span>
                            <span>- 15 zł </span>
                        </div>
                        <div className="uslugiICenyPriceListItem">
                            <span>Fotel bez boków</span>
                            <span>- 30 zł</span>
                        </div>
                        <div className="uslugiICenyPriceListItem">
                            <span>Fotel z bokami</span>
                            <span>- 50 zł</span>
                        </div>
                    </div>
                </div>
                <div className="uslugiICenyitem">
                    <img src={sofaTwoImg} alt="chair"/>
                    <div className="uslugiICenyPriceList">
                        <div className="uslugiICenyPriceListItem">
                      <span
                      >Narożnik (standardowa wielkość<br/>
                        do sumy boków 4,5 m.)</span
                      >
                            <span>- 150 zł</span>
                        </div>
                        <div className="uslugiICenyPriceListItem">
                      <span
                      >Narożnik bardzo duży,<br/>
                        w kształcie litery "U"</span
                      >
                            <span>- 180 zł</span>
                        </div>

                    </div>
                </div>

            </div>

            <div className='uslugiICenyitem-pillow'>
                <img src={pillowImg} alt="pillows"/>
                <div className='uslugiICenyitem-pillow-price'>
                    <div className="uslugiICenyPriceListItem">
                        <span>Poduszka<br/>tapicerowana</span>
                        <span>- 10 zł/szt.</span>
                    </div>
                    <div className="uslugiICenyPriceListItem">
                        <span>Materac 1 os. jednostronnie<br/>/dwustronnie</span>
                        <span>- 60/80 zł</span>
                    </div>
                    <div className="uslugiICenyPriceListItem">
                        <span>Materac 2 os. jednostronnie<br/>/dwustronnie</span>
                        <span>- 80/100 zł</span>
                    </div>
                    <div className="uslugiICenyPriceListItem">
                        <span>Wykładziny</span>
                        <span>- 9 zł/m2</span>
                    </div>
                </div>
            </div>

            <div className="uslugiICenyFooter">
                <div className="uslugiICenyFooterText">
                    Bezpłatny dojazd na terenie Wrocławia.<br/>
                    Usługę wykonujemy wyłącznie u klienta.
                </div>
                <a href="#" className="uslugiICenyFooterLink">skontaktuj się</a>
            </div>
        </div>
    );
};

export default UslugiCeny;