import { Link } from "react-router-dom";
import "./footer.scss";
import Logo from "../assets/logo.png";
import { useState } from "react";

export default function Footer({ t }) {
    const currYear = new Date().getFullYear();
    const [isShowColumn, setisShowColumn] = useState(0)

    function handlerShowColumn({ target }) {
        const count = target.dataset?.footer || target.parentNode.dataset?.footer
        if (!count) {
            setisShowColumn(0);
            return;
        }

        setisShowColumn(isShowColumn === +count ? 0 : +count);
    }

    return (
        <footer id='contacts'>
            <div className="content">
                <div className="footer" onClick={handlerShowColumn}>
                    <div className="footer_column">
                        <Link to='/'>
                            <img src={Logo} alt="picture_1" />
                        </Link>
                    </div>

                    <div className="footer_column">
                        <div className="footer_title" data-footer='2'>
                            <h3>Реквизиты</h3>
                            <span className="arrow_down"></span>
                        </div>

                        <ul className={isShowColumn === 2 ? 'footer_column_show' : ''}>
                            <li>FUND ANALYTICS INVESTMENT MANAGEMENT LLP</li>
                            <li>Incorporated in Uk</li>
                            <li>Company number: OC317228</li>
                            <li>Registration number: <a href="https://find-and-update.company-information.service.gov.uk/company/OC317228" className='link'>04940424</a></li>
                        </ul>
                    </div>

                    <div className="footer_column">
                        <div className="footer_title  footer_mobile_title" data-footer='3'>
                            <h3>Контакты</h3>
                            <span className="arrow_down"></span>
                        </div>
                        <ul className={isShowColumn === 3 ? 'footer_column_show' : ''}>
                            <div className="footer_block">
                                <div className="footer_title">
                                    <h3>Тел./факс:</h3>
                                </div>
                                <a href="tel:+7 (812) 603-73-77">
                                    +7 (812) 603-73-77
                                </a>
                            </div>

                            <div className="footer_block">
                                <div className="footer_title">Адрес:</div>
                                <p>
                                    7 Grosvenor Gardens, Victoria, London, England, SW1W 0AF
                                </p>
                            </div>

                            <div className="footer_block">
                                <div className="footer_title">Email:</div>
                                <a href="mailto:office@promimpuls.ru">
                                    office@promimpuls.ru
                                </a>
                            </div>

                            <div className="footer_block">
                                <div className="footer_title">График работы:</div>
                                <p>
                                    Понедельник-Пятница <br /> 09:00 - 19:00
                                </p>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className="footer_bottom">
                    <p>
                        © {currYear} FUND ANALYTICS INVESTMENT MANAGEMENT. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
