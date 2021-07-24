import React from 'react';
import './ModalMenu.styles.scss';
import instLogo from '../../assets/images/instagram.png';
import fbLogo from '../../assets/images/facebook.png';
import AnchorLink from "react-anchor-link-smooth-scroll";

const ModalMenu = () => {
    return (
        <div className='modal-menu'>
            <div className='modal-menu-wrapper'>
                <ul>
                    <li className="modal-menu-item"><AnchorLink href="#onas" className='anchor-link'>o nas</AnchorLink></li>
                    <li className="modal-menu-item"><AnchorLink href="#uslugi" className='anchor-link'>usługi i ceny</AnchorLink></li>
                    <li className="modal-menu-item"><AnchorLink href="#kontakt" className='anchor-link'>kontakt</AnchorLink></li>
                    <li className="modal-menu-item"><span>+48 730 858 170</span></li>
                    <li className="modal-menu-item">
                        <div className='socials'>
                            <p>Media społecznościowe:</p>
                            <div className='socials-item'>
                            <img src={fbLogo} alt="facebook"/>
                            <div className='social-desc'> Facebook</div>
                            </div>
                            <div className='socials-item'>
                            <img src={instLogo} alt="instagram"/>
                            <div className='social-desc'>Instagram</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ModalMenu;