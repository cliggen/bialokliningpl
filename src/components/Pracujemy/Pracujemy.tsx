import React from 'react';
import './Pracujemy.styles.scss';
import dotsImage from '../../assets/images/dots.png';
import contactImage from '../../assets/images/contact.png';
import calendarImage from '../../assets/images/calendar.png';
import workImage from '../../assets/images/work.png';
import payImage from '../../assets/images/pay.png';

const Pracujemy = () => {
    return (
        <div className='pracujemy-wrapper'>

            <div className="jakPracuemyTitle">
                <div className="jakPracuemyTitleShadow">Jak pracujemy</div>
                <div className="jakPracuemyTitleText">Jak pracujemy</div>
            </div>

            <div className='pracujemy-container'>
                <div className='pracujemy-item'>
                    <img src={contactImage} alt="contact"/>
                    <div className='pracujemy-item-description'>
                        Skontaktuj się z nami telefonicznie lub przez messengera.
                    </div>
                </div>

                <img className='dots' src={dotsImage} alt="dots"/>

                <div className='pracujemy-item'>
                        <img src={calendarImage} alt="calendar"/>
                    <div className='pracujemy-item-description'>
                        Umówimy się na dogodny dla Państwa termin.
                    </div>
                </div>

                <img className='dots' src={dotsImage} alt="dots"/>

                <div className='pracujemy-item'>
                        <img src={workImage} alt="work"/>

                    <div className='pracujemy-item-description'>
                        Przyjedziemy i wykonamy pracę.
                    </div>
                </div>

                <img className='dots' src={dotsImage} alt="dots"/>

                <div className='pracujemy-item'>
                    <img src={payImage} alt="pay"/>
                    <div className='pracujemy-item-description'>
                        Opłata po wykonaniu usługi.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pracujemy;