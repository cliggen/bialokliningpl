import React from 'react';
import './Udoskonalenie.styles.scss';
import bandImg from '../../assets/images/Band.svg';
import schwabraMan from '../../assets/images/manWithShwabra.svg';

const Udoskonalenie = () => {
    return (
        <div className='udoskonalenieBlock'>
            <div className="udoskonalenieBlockTitleImage">
                <img src={bandImg} alt="band"/>
            </div>
            <div className="udoskonaleniePricePerMeterContainer">
                <div className="udoskonaleniePricePerMeterItem">
                    <div className="udoskonaleniePricePerMeterItemTitle">
                        Pierwsze/jednorazowe sprzątanie mieszkań, domów, biur:
                    </div>
                    <div className="udoskonaleniePricePerMeterItemContent">
                <span
                >Do 60m2 - 4 zł/m2<br/>
                  Od 60m2 - 3,5 zł/m2
                </span>
                    </div>
                </div>

                <div className="udoskonaleniePricePerMeterItem">
                    <div className="udoskonaleniePricePerMeterItemTitle">
                        Sprzątanie regularne mieszkań, domów, biur:
                    </div>
                    <p>(nie rzadziej niż 1 raz w tygodniu)</p>
                    <div className="udoskonaleniePricePerMeterItemContent">
                <span
                >Do 60m2 - od 2,5 zł/m2.<br/>
                  Od 61m2 – od 2 zł/m2
                </span>
                    </div>
                </div>
            </div>
            <div className="udoskonalenieUslugaZawiera">
                <p>Usluga zawiera</p>
                <ul>
                    <li>- Wycieranie kurzu na sucho i mokro;</li>
                    <li>- Usuwanie kurzu z listew przypodłogowych;</li>
                    <li>
                        - Ścielenie łózka i zmiana pościeli (przy usłudze cyklicznej);
                    </li>
                    <li>- Odkurzanie sof oraz foteli;</li>
                    <li>- Odkurzanie wykładzin, dywanów oraz pod dywanami;</li>
                    <li>
                        - Odkurzanie podłóg pod meblami w łatwo dostępnych miejscach;
                    </li>
                    <li>
                        - Oczyszczanie parapetów oraz okien wewnątrz ze śladów po
                        palcach;
                    </li>
                    <li>- Wycieranie wszystkich drzwi na sucho i mokro;</li>
                    <li>- Mycie podłogi;</li>
                    <li>
                        - Wycieranie ramek, luster oraz lampek z kurzu, usuwanie
                        pajęczyn
                    </li>
                    <li>
                        - Mycie i wycieranie na sucho frontów szafek, blatu, innych
                        mebli kuchennych oraz glazury ściennej
                    </li>
                    <li>
                        - Mycie oraz polerowanie z zewnątrz lodówki, piekarnika oraz
                        mikrofali
                    </li>
                    <li>- Opróżnianie koszy na śmieci i wg potrzeb ich mycie</li>
                    <li>
                        - Mycie i wycieranie na sucho baterii, zlewów, wanien, toalet,
                        glazury ściennej, dezynfekcja muszli i deski toaletowej.
                    </li>
                    <li>- Czyszczenie kabin prysznicowych i szyb</li>
                    <li>- Mycie schodów między piętrami ( jeśli takie istnieją )</li>
                </ul>
            </div>
            <div className="udoskonalenieUslugiDodatkowe">
                <div className="udoskonalenieUslugiDodatkoweImage">
                    <img src={schwabraMan} alt="schwabraman"/>
                </div>
                <div className="udoskonalenieUslugiDodatkowePrice">
                    <p>Usługi dodatkowe:</p>
                    <ul>
                        <li>Mycie okien- od 15zł/szt</li>
                        <li>Mycie lekkich zabrudzeń w piekarniku - 30 zł;</li>
                        <li>Mycie wewnątrz mikrofali - 15 zł;</li>
                        <li>Mycie wewnątrz lodówki - 30 zł;</li>
                        <li>Czyszczenie fug - 5 zł/m2.</li>
                    </ul>
                </div>
            </div>
            <div className="udoskonalenieSlogan">
                “Bardzo ważne są dla nas długotrwałe relacje”
            </div>
        </div>
    );
};

export default Udoskonalenie;