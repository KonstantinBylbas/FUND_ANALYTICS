import { Link, useParams } from 'react-router-dom';
import Button from '../button/button';
import './home.scss';
import Way_0 from '../assets/way_0.jpg';
import Way_1 from '../assets/way_1.jpg';
import Way_2 from '../assets/way_2.jpg';
import BtnArrow from '../btnArrow/btnArrow';
import MapWorld from '../MapWorld/MapWorld';
import Arrows from './assets/arrows.png';
import { useContext, useEffect, useRef } from 'react';
import { ModalContext } from '../services/contexts/modalcontext/modal.context';
import { useTranslation } from "react-i18next";

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {

    const { t, i18n } = useTranslation("common");

    const settings = {
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000
    };

    const { contextModal, setContextModal } = useContext(ModalContext);

    let { id } = useParams();

    const licensesSection = useRef(null);
    const ways = useRef(null);
    useEffect(() => {
        if (id)
            setTimeout(() => {
                if (id === 'ways')
                    ways.current.scrollIntoView();
            }, 500);
    }, [id])

    return (
        <>
            <div className="home">
                <section className='zero content'>
                    <h1>
                        Риск исходит от незнания того, что вы делаете.
                        <span>
                            © Уоррен Баффет
                        </span>
                    </h1>

                    <div className="info">
                        <div className="block">
                            <h6>
                                Фонд
                            </h6>
                            <h4>
                                620млн$
                            </h4>
                        </div>
                        <div className="block">
                            <h6>
                                Аналитика
                            </h6>
                            <h4>
                                270 стратегий
                            </h4>
                        </div>
                        <div className="block">
                            <h6>
                                Инвестиции
                            </h6>
                            <h4>
                                9.43% роста
                            </h4>
                        </div>
                        <div className="block">
                            <h6>
                                Менеджмент
                            </h6>
                            <h4>
                                40тыс клиентов
                            </h4>
                        </div>
                    </div>

                    <div className="row">
                        <h4>
                            {t("home.underInfo.0")}
                        </h4>
                        <h4>
                            {t("home.underInfo.1")}
                        </h4>
                        <h4>
                            {t("home.underInfo.2")}
                        </h4>
                        <h4>
                            {t("home.underInfo.3")}
                        </h4>
                    </div>

                    <Button txt={t("home.button")} style='primary' handlerClick={() => setContextModal({ show: true, status: 1 })} />

                    <div className="special min_content">
                        <div className="special_block content" data-aos="fade-right">
                            <p>
                                {t("home.special.title")}
                            </p>
                            <h3>
                                {t("home.special.body.0")}
                            </h3>
                            <Link to='/peculiarities_traiding'>{t("home.special.link")}</Link>
                        </div>

                        <div className="special_block content" data-aos="fade-left">
                            <p>
                                {t("home.special.title")}
                            </p>
                            <h3>
                                {t("home.special.body.1")}
                            </h3>
                            <Link to='/readymade_solutions'>{t("home.special.link")}</Link>
                        </div>
                    </div>
                </section>

                <section className='first content'>
                    <h3>
                        Присоединяйтесь к 30 миллионам трейдеров и инвесторов, принимающих более обдуманные решения, торгуя на мировых рынках.
                    </h3>
                    <ul data-aos="fade-up">
                        <li>
                            Инвестировать можно не только для того, чтобы получить доход. Грамотные инвестиции могут обезопасить вас.
                        </li>
                        <li>
                            Увеличение финансовой обеспеченности. Чтобы в любом возрасте не менять привычный образ жизни, позаботьтесь о своём будущем уже сегодня с помощью инвестиций.
                        </li>
                        <li>
                            Создание финансовой подушки безопасности, т. е. какого-то денежного запаса на случай непредвиденных ситуаций. Если регулярно откладывать и инвестировать деньги, можно создать капитал, который будет приносить пассивный доход в виде купонов или дивидендов.
                        </li>
                    </ul>
                    <div className="block_image min_content">
                        <MapWorld />
                    </div>
                </section>

                <section className="second content slider">
                    <div className="min_content" data-aos="fade-left">
                        <Slider {...settings}>
                            <iframe src="instrument0.html"></iframe>
                            <iframe src="instrument1.html"></iframe>
                            <iframe src="instrument2.html"></iframe>
                            <iframe src="instrument3.html"></iframe>
                            <iframe src="instrument0.html"></iframe>
                            <iframe src="instrument1.html"></iframe>
                            <iframe src="instrument2.html"></iframe>
                            <iframe src="instrument3.html"></iframe>
                        </Slider>
                    </div>
                </section>

                <section className="third content row" ref={ways}>
                    <Link to='/brokers' data-aos="fade-up">
                        <img src={Way_0} alt="picture_1" />
                        <BtnArrow txt={t("home.ways.link.0")} />
                    </Link>
                    <Link to='/readymade_solutions' data-aos="fade-down">
                        <img src={Way_1} alt="picture_1" />
                        <BtnArrow txt={t("home.ways.link.1")} />
                    </Link>
                    <Link to='/ExampleInvesting' data-aos="fade-up">
                        <img src={Way_2} alt="picture_1" />
                        <BtnArrow txt={t("home.ways.link.2")} />
                    </Link>
                </section>

                <section className="fourth content">
                    <p>
                        {t("home.digits.text.0")}
                    </p>
                    <p>
                        {t("home.digits.text.1")}
                    </p>

                    <iframe src="../../chart.html"></iframe>

                    {/* <img src={Analytics} alt="picture_1" /> */}

                    <div className="min_content slider" data-aos="fade-left">
                        <Slider {...{ ...settings, slidesToShow: 1, slidesToScroll: 1 }}>

                            <div className="zero content">
                                <div className='block'>
                                    Фонд - Данный фонд основанный в 2006 году Амином Саджади(Аmin Sajjadi), и группой независимых Аналитиков и трейдеров. Первым капиталом фонда стали средства Саджади, самих трейдеров и их Друзей. Системная прибыль повысила доверие инвесторов позволило перейти на систему работы CEF.

                                    <div className="page_number">
                                        1 / 4
                                    </div>
                                </div>
                            </div>

                            <div className="first content">
                                <div className='block'>
                                    Аналитика - передовой отдел Аналитики и разработки стал фундаментом для развития компании. Используя Технический и фундаментальный анализ при подборе активов и  составление инвестиционных портфелей, позволило увеличить доходность и сформировать собственные правила риск менеджмента компании.

                                    <div className="page_number">
                                        2 / 4
                                    </div>
                                </div>
                            </div>

                            <div className="second content">
                                <div className='block'>
                                    Инвестиции - как инструмент формирования,сохранения и приумножения капитала, стал популярен в массах за счет доступности информации. Наша единственная задача - предоставить вам активы, которые смогут развить ваш капитал, чтобы только от вас зависела стратегия развития вашего капитала.

                                    <div className="page_number">
                                        3 / 4
                                    </div>
                                </div>
                            </div>

                            <div className="third content">
                                <div className='block'>
                                    Менеджмент - популяризация инвестирования дала новый виток в развитии компании. Имея практический опыт, мы с радостью поможем вам подобрать Торговую площадку, уберечь вас от подводных камней, скрытых комиссий, вероятности больших проскальзываний, и возьмем бремя специфики сферы на себя.

                                    <div className="page_number">
                                        4 / 4
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </section>

                <section className="fifth min_content">
                    <div className="forum column">
                        <h2>
                            Вы наш клиент?
                        </h2>
                        <h3>
                            Оставьте отзыв о нашей компании!
                        </h3>
                        <img src={Arrows} alt="go to forum" />
                        <Link to='/forum'>
                            <Button txt='форум' style='primary' />
                        </Link>
                    </div>
                </section>
            </div >
        </>
    );
}