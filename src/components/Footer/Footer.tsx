import React from 'react';
import './Footer.styles.scss';
import fbLogo from '../../assets/images/facebook.png';
import instLogo from '../../assets/images/instagram.png';
import logo from '../../assets/images/logo-footer.png';

const Footer = () => {
    return (
        <footer id='kontakt'>
            <div className="requisitesWrapper">
                <div className="requisiteItem">
                    <p><img src={logo} alt="logo"/></p>
                    <p>
                        Firma sprzątająca BIAŁO sp. z o.o.<br/>
                        działająca na terenie Wrocławia.<br/>
                        NIP: 8971889434<br/>
                        REGON: 388370740<br/>
                        KRS: 0000888068
                    </p>
                </div>
                <div className="requisiteItem">
                    <div className="requisiteKontakt">KONTAKT</div>
                    <p>
                        Telefon +48730858170<br/>
                        Whatsapp +48730858170<br/>
                        Viber +48730858170<br/>
                        Email: bialoklining@gmail.com
                    </p>
                </div>
                <div className="requisiteItem">
                    <p className="requisiteMedia">Media społecznościowe:</p>
                    <span><img src={fbLogo} alt="fb"/>Facebook</span>
                    <span><img src={instLogo} alt="inst"/>Instagram</span>
                </div>
            </div>
            <a href="#">skontaktuj się</a>
            <span className="footerCopyright"
            >BIAŁO KLINING 2021 Wszelkie prawa zastrzeżone</span
            >
        </footer>
    );
};

export default Footer;