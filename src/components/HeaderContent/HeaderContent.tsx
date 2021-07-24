import React from 'react';
import './HeaderContent.styles.scss';
import topImage from '../../assets/images/top-image.png';
import placeMarkImg from '../../assets/images/placemark.png';

const HeaderContent = () => {
    return (
        <div className='header-content-wrapper'>
            <div className='left-side'>
                <div className='left-side-title'>Firma sprzątająca</div>
                <div className='place-wrapper'>
                    <img src={placeMarkImg} alt="placemarkIco"/>
                    <div className='place-title'>
                        działająca na terenie Wrocławia
                    </div>
                </div>
                <img className='topImgInside' src={topImage} alt="topimg"/>
                <div className="left-side-description">
                    Posprzątamy delikatnie,
                    uwolnimy Cię od śmieci i bałaganu.
                    Wyczyścimy meble tapicerowane i wykładziny.
                </div>
                <button className="button" type="button">
                    wyślij wiadomość
                </button>
            </div>
            <div className='right-side'>
                <img src={topImage} alt="topimg" />
            </div>
        </div>
    );
};

export default HeaderContent;