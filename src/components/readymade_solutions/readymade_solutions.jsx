import { Link } from "react-router-dom";
import "./readymade_solutions.scss";
import img_01 from "./img/01.png";
import img_02 from "./img/02.png";
import img_03 from "./img/03.png";
import arrow from "./img/arrow.png";
import { useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "../services/contexts/modalcontext/modal.context";
import Button from "../button/button";

export default function Readymade_Solutions() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const { contextModal, setContextModal } = useContext(ModalContext);

    const inp0 = useRef(null);
    const inp1 = useRef(null);
    const inp2 = useRef(null);
    const inp3 = useRef(null);

    const [result, setresult] = useState(0);

    function showResult() {
        if (inp0.current.value && inp1.current.value && inp2.current.value && inp3.current.value)
            setresult((+inp0.current.value + (+inp1.current.value * +inp3.current.value)) * (+inp2.current.value * 0.01) + (+inp0.current.value + (+inp1.current.value * +inp3.current.value)));
        else setresult();
    }

    return (
        <div className="readymade_solutions">
            <div className="row">
                <div className="readymade_solutions_body_left">
                    <Link to="/" className="readymade_solutions_back">
                        &#8592;
                    </Link>
                </div>

                <div className="readymade_solutions_body">
                    <div className="readymade_solutions_body_left"></div>
                    <h1>
                        ГОТОВЫЕ РЕШЕНИЯ. <br />
                        <span>
                            Зарабатывайте на инвестициях под управлением профессионалов
                        </span>
                    </h1>

                    <div>
                        <div className="readymade_solutions_body_title">
                            <p>ПАЕВЫЕ ФОНДЫ</p>
                        </div>

                        <p>
                            Паевые фонды — готовые инвестиционные стратегии под управлением
                            профессионалов. Простой способ вложить средства с потенциальным
                            доходом выше, чем по вкладам. Не требуется специальных знаний и
                            временных затрат
                        </p>

                        <div className="row">
                            <div className="readymade_solutions_body_box">
                                <img src={img_01} alt="picture_1" />
                                <p>Выберите фонд под ваш срок инвестиций и финансовые цели</p>
                            </div>

                            <div className="readymade_solutions_body_box">
                                <img src={img_02} alt="picture_1" />

                                <p>Выберите фонд под ваш срок инвестиций и финансовые цели</p>
                            </div>

                            <div className="readymade_solutions_body_box">
                                <img src={img_03} alt="picture_1" />

                                <p>
                                    Вам не придётся следить за рынком и принимать решения о
                                    сделках
                                </p>
                            </div>
                        </div>

                        <div className="readymade_solutions_body_row">
                            <div className="readymade_solutions_body_row_cell">
                                <p>За последний год</p>
                                <h5>
                                    <img src={arrow} alt="arrow up" />
                                    43,88 %
                                </h5>
                            </div>

                            <div className="readymade_solutions_body_row_cell">
                                <p>Сумма инвестирования</p>
                                <h5>от 1 000 руб.</h5>
                            </div>

                            <div className="readymade_solutions_body_row_cell">
                                <p>Валюта активов</p>
                                <h5>Рос. рубль</h5>
                            </div>

                            <div className="readymade_solutions_body_row_cell">
                                <p>Рекомендуемый срок</p>
                                <h5>от 3 лет</h5>
                            </div>

                            <div className="readymade_solutions_body_row_cell">
                                <p>Риск</p>
                                <h5>Высокий</h5>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="readymade_solutions_body_title">
                            <p>ПАЕВЫЕ ФОНДЫ</p>
                        </div>

                        <p>
                            Паевые фонды — готовые инвестиционные стратегии под управлением
                            профессионалов. Простой способ вложить средства с потенциальным
                            доходом выше, чем по вкладам. Не требуется специальных знаний и
                            временных затрат
                        </p>

                        <div className="row">
                            <div className="readymade_solutions_body_box">
                                <img src={img_01} alt="picture_1" />
                                <p>Выберите фонд под ваш срок инвестиций и финансовые цели</p>
                            </div>

                            <div className="readymade_solutions_body_box">
                                <img src={img_02} alt="picture_1" />

                                <p>Выберите фонд под ваш срок инвестиций и финансовые цели</p>
                            </div>

                            <div className="readymade_solutions_body_box">
                                <img src={img_03} alt="picture_1" />

                                <p>
                                    Вам не придётся следить за рынком и принимать решения о
                                    сделках
                                </p>
                            </div>
                        </div>

                        <div className="readymade_solutions_body_row">
                            <div className="readymade_solutions_body_row_cell">
                                <p>За последний год</p>
                                <h5>
                                    <img src={arrow} alt="arrow up" />
                                    43,88 %
                                </h5>
                            </div>

                            <div className="readymade_solutions_body_row_cell">
                                <p>Сумма инвестирования</p>
                                <h5>от 1 000 руб.</h5>
                            </div>

                            <div className="readymade_solutions_body_row_cell">
                                <p>Валюта активов</p>
                                <h5>Рос. рубль</h5>
                            </div>

                            <div className="readymade_solutions_body_row_cell">
                                <p>Рекомендуемый срок</p>
                                <h5>от 3 лет</h5>
                            </div>

                            <div className="readymade_solutions_body_row_cell">
                                <p>Риск</p>
                                <h5>Высокий</h5>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="readymade_solutions_body_title">
                            <p>ПАЕВЫЕ ФОНДЫ</p>
                        </div>

                        <p>
                            Паевые фонды — готовые инвестиционные стратегии под управлением
                            профессионалов. Простой способ вложить средства с потенциальным
                            доходом выше, чем по вкладам. Не требуется специальных знаний и
                            временных затрат
                        </p>

                        <div className="row">
                            <div className="readymade_solutions_body_box">
                                <img src={img_01} alt="picture_1" />
                                <p>Выберите фонд под ваш срок инвестиций и финансовые цели</p>
                            </div>

                            <div className="readymade_solutions_body_box">
                                <img src={img_02} alt="picture_1" />

                                <p>Выберите фонд под ваш срок инвестиций и финансовые цели</p>
                            </div>

                            <div className="readymade_solutions_body_box">
                                <img src={img_03} alt="picture_1" />

                                <p>
                                    Вам не придётся следить за рынком и принимать решения о
                                    сделках
                                </p>
                            </div>
                        </div>

                        <div className="readymade_solutions_body_row">
                            <div className="readymade_solutions_body_row_cell">
                                <p>За последний год</p>
                                <h5>
                                    <img src={arrow} alt="arrow up" />
                                    43,88 %
                                </h5>
                            </div>

                            <div className="readymade_solutions_body_row_cell">
                                <p>Сумма инвестирования</p>
                                <h5>от 1 000 руб.</h5>
                            </div>

                            <div className="readymade_solutions_body_row_cell">
                                <p>Валюта активов</p>
                                <h5>Рос. рубль</h5>
                            </div>

                            <div className="readymade_solutions_body_row_cell">
                                <p>Рекомендуемый срок</p>
                                <h5>от 3 лет</h5>
                            </div>

                            <div className="readymade_solutions_body_row_cell">
                                <p>Риск</p>
                                <h5>Высокий</h5>
                            </div>
                        </div>
                    </div>

                    <div className="readymade_solutions_body_blue">
                        <h2>
                            Просчитайте свою доходность от вложений и наша компания поможет
                            вам подобрать идеальную стратегию для ее получения.
                        </h2>
                    </div>

                    <div className='form'>
                        <div className="row">
                            <div>
                                <label htmlFor="name">Сумма стартовых инвестиций ($)</label>
                                <input type="number" id="name" ref={inp0} onChange={showResult} />
                            </div>

                            <div>
                                <label htmlFor="fname">Сумма пополнения ($)</label>
                                <input type="number" id="fname" ref={inp1} onChange={showResult} />
                            </div>
                        </div>

                        <div className="row">
                            <div>
                                <label htmlFor="lname">Ожидаемая доходность ( % годовых)</label>
                                <input type="number" id="lname" ref={inp2} onChange={showResult} />
                            </div>

                            <div>
                                <label htmlFor="country">Количество пополнений в год</label>
                                <input type="number" id="country" ref={inp3} onChange={showResult} />
                            </div>
                        </div>
                        <div className="readymade_solutions_body_gradient">
                            <p>Ваш капитал через год: {result ? result.toFixed(2) + "$" : ''}</p>
                        </div>

                        <Button txt='Отправить' handlerClick={() => setContextModal({ show: true })} />
                    </div>
                </div>
            </div>
        </div>
    );
}
