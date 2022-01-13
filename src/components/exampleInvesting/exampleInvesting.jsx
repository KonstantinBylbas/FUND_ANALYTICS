// import InfiniteCarousel from "react-leaf-carousel";
import { Link } from "react-router-dom";
import BtnArrow from "../btnArrow/btnArrow";
import Button from "../button/button";
// import Slider from "../slider/slider";
import "./exampleInvesting.scss";

import img1 from "./img/01.png";
import img2 from "./img/02.png";

import slide1 from "./img/slide1.jpg";
import slide2 from "./img/slide2.jpg";
import slide3 from "./img/slide3.jpg";


export default function ExampleInvesting() {

    window.scrollTo(0, 0)

    return (
        <div className="exampleInvesting content">
            <div className="row">
                <div className="exampleInvesting_blue">
                    <h1>
                        Главный экскурс в мир инвестиций
                    </h1>

                    <Link to="/peculiarities_traiding">
                        <BtnArrow txt="ОБУЧЕНИЕ" />
                    </Link>
                </div>
                <div className="exampleInvesting_black">
                    <h3>ЧТО ТАКОЕ ИНВЕСТИЦИИ?</h3>
                    <p>
                        Любое вложение денег, которое может принести доход в будущем, можно
                        назвать инвестицией.
                    </p>
                    <p>
                        Покупка недвижимости, иностранной валюты, вложения в драгоценные
                        металлы и произведения искусства — всё это примеры инвестиций в
                        разные активы. Если вы продали актив дороже, чем купили, значит вы
                        получили доход с инвестиций.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="exampleInvesting_black">
                    <h2>ЗАЧЕМ ИНВЕСТИРОВАТЬ?</h2>
                    <h5>Получать пассивный доход</h5>
                    <p>
                        <span>
                            Если регулярно откладывать и инвестировать деньги, можно создать
                            капитал, который будет приносить пассивный доход в виде купонов
                            или дивидендов.
                        </span>
                    </p>

                    <h5>Накопить на крупную покупку</h5>
                    <p>
                        <span>
                            Ценные бумаги могут приносить доход выше вкладов, поэтому вложения
                            в них — один из способов накопить на жильё, обучение ребёнка или
                            другую цель.
                        </span>
                    </p>

                    <h5>Обеспечить комфортную жизнь на пенсии</h5>
                    <p>
                        <span>
                            Чтобы в пожилом возрасте не менять привычный образ жизни,
                            позаботьтесь о своём будущем уже сегодня с помощью долгосрочных
                            инвестиций.
                        </span>
                    </p>
                </div>

                <div className="exampleInvesting_blue">
                    <div className="row">
                        <div className="exampleInvesting_blue_column"></div>
                        <div className="exampleInvesting_blue_content">
                            <h3>234</h3>
                            <p>Довольных клиента</p>

                            <h3>24</h3>
                            <p>Довольных клиента</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2>КАК МОЖНО ИНВЕСТИРОВАТЬ?</h2>

                <div className="row">
                    <div className="exampleInvesting_block">
                        <div className="exampleInvesting_block_img">
                            <img src={img1} alt="picture_1" />
                        </div>

                        <div className="exampleInvesting_block_content">
                            <h3>С помощью готовых решений</h3>
                            <p>
                                Выбирайте готовые портфели, стратегии и 
                                инструменты с защитой
                                капитала, подготовленные
                                профессионалами.
                            </p>

                            <p>
                                Получайте отчеты и наблюдайте онлайн за тем,
                                как проходит управление вашими вложениями.
                            </p>

                            <Link to="/readymade_solutions">
                                <Button txt="Готовые решения" style="primary" />
                            </Link>
                        </div>
                    </div>

                    <div className="exampleInvesting_block">
                        <div className="exampleInvesting_block_img">
                            <img src={img2} alt="picture_1" />
                        </div>

                        <div className="exampleInvesting_block_content">
                            <h3>Самостоятельно</h3>
                            <p>
                                Торгуйте на фондовом рынке самостоятельно.
                                Приобретайте акции, облигации, ETF и прочие
                                инструменты на Московской бирже.
                            </p>

                            <p>
                                Определяйте стратегию самостоятельно или
                                пользуйтесь идеями аналитиков.
                            </p>

                            <Link to="/peculiarities_traiding">
                                <Button txt="ОБУЧЕНИЕ" style="primary" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className='exampleInvesting_slider'>
                {/* <InfiniteCarousel
                    showSides={true}
                    sidesOpacity={0.5}
                    sideSize={0.1}
                    slidesToScroll={1}
                    slidesToShow={1}
                    scrollOnDevice={true}
                >
                    <div className='exampleInvesting_slider_item'>
                        <img src={slide1} alt="slide1" />
                    </div>
                    <div>
                        <img src={slide2} alt="slide2" />
                    </div>
                    <div>
                        <img src={slide3} alt="slide3" />
                    </div>
                </InfiniteCarousel> */}

            </div>
        </div>
    );
}
