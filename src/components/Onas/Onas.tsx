import React from 'react';
import './Onas.styles.scss';
import onasImage from '../../assets/images/onas-image.png';

const Onas = () => {
    return (
        <div className='onas-wrapper' id='onas'>
            <img className="oNasPicture" src={onasImage} alt="cleaning-woman"/>
            <div className="oNasInformation">
                <div className="oNasTitle">
                    <div className="oNasTitleShadow">O nas</div>
                    <div className="oNasTitleMain">O nas</div>
                </div>
                <ul className="oNasText">
                    <li>z nami będzie łatwo się dogadać</li>
                    <li>jesteśmy punktualni</li>
                    <li>jakościowo wykonujemy swoją pracę</li>
                    <li>mamy niskie ceny</li>
                    <li>wygodny sposób płatności</li>
                </ul>
            </div>
        </div>
    );
};

export default Onas;