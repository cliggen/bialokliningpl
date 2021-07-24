import React, {useState} from 'react';
import './Header.styles.scss';
import appLogo from '../../assets/images/header-logo.png';
import menuOpenImg from '../../assets/images/menu-burger.png';
import menuCloseImg from '../../assets/images/menu-cross.png';
import ModalMenu from "../ModalMenu/ModalMenu";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
    const number = '+48 730 858 170';
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header>
            <div className='header-wrapper'>
            <img src={appLogo} alt='app-logo'/>
            <img className='burger-menu' onClick={() => setIsMenuOpen(() => !isMenuOpen)} src={isMenuOpen ? menuCloseImg : menuOpenImg}
                 alt="burger"/>
            <div className='header-menu-wrapper'>
                <ul className='header-menu-list'>
                    <li className='header-menu-item'><AnchorLink href="#onas" className='anchor-link'>o nas</AnchorLink></li>
                    <li className='header-menu-item'><AnchorLink href="#uslugi" className='anchor-link'><span>usługi i ceny</span></AnchorLink></li>
                    <li className='header-menu-item'><AnchorLink href="#kontakt" className='anchor-link'>kontakt</AnchorLink></li>
                </ul>
                <span>{number}</span>
            </div>
            </div>
            {isMenuOpen && <ModalMenu />}

        </header>
    );
};
export default Header;