import { useContext, useEffect, useRef } from 'react';
import Button from '../button/button';
import { ModalContext } from '../services/contexts/modalcontext/modal.context';
import validator from 'validator';
import succes from './assets/succes.png';
import './form.scss';
import sendData from '../../services/sendData';

export default function Form({ status }) {
    const { contextModal, setContextModal } = useContext(ModalContext);

    const thanksSection = useRef(null)

    function error(a, isInvalid) {
        a.style.borderBottom = `solid 0.1rem ${isInvalid ? 'red' : status == 0 ? 'transparent' : '#7b7b7b'}`;
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (status == 0) {
            let name = event.target[1].value.trim();
            let phone = event.target[3].value;
            let email = event.target[5].value.trim();

            if (event.target[1].value.trim().length < 3 || !validator.isMobilePhone(event.target[3].value, 'any') || event.target[6].value.trim().length < 2) {
                if (event.target[1].value.trim().length < 3)
                    error(event.target[1], true);
                else
                    error(event.target[1], false);
                if (!validator.isMobilePhone(event.target[3].value, 'any'))
                    error(event.target[3], true);
                else
                    error(event.target[3], false);
                if (event.target[6].value.trim().length < 2)
                    error(event.target[6], true);
                else
                    error(event.target[6], false);
                return;
            }
            sendData(name, phone, email)
            .then(() => {
                setContextModal(false);
            })
            .catch((error) => {
                if (error === 'dubl') {

                }
            })
        }
        else if (status == 1) {
            let name = event.target[0].value.trim();
            let phone = event.target[2].value.trim();

            if (event.target[0].value.trim().length < 3 || !validator.isMobilePhone(event.target[2].value, 'any') || !event.target[3].checked) {
                if (event.target[0].value.trim().length < 3)
                    error(event.target[0], true);
                else
                    error(event.target[0], false);
                if (!validator.isMobilePhone(event.target[2].value, 'any'))
                    error(event.target[2], true);
                else
                    error(event.target[2], false);
                return;
            }
            sendData(name, phone)
            .then(() => {
                setContextModal(false);
            })
            .catch((error) => {
                if (error === 'dubl') {

                }
            })
        }

        // sendData(name, phone, email, date)
        //     .then(() => {
        //         setContextModal(false);
        //     })
        //     .catch((error) => {
        //         if (error === 'dubl') {

        //         }
        //     })
            // .finally(() => {
            //     setInterval(() => {
            //         window.location.replace(`https://${window.location.host}/thanks`);
            //     }, 1000);
            // })

        thanksSection.current.style.top = 0;
        setTimeout(() => {
            thanksSection.current.style.top = '-100%';
        }, 5000);
    }

    return (
        status == 0 ?
            <div className={`form_block_0`}>
                <h2>
                    Низкий старт для приумножения вашего капитала
                </h2>
                <div className="row">
                    <h3>
                        Для начала трейдинга необходимо уточнить пару деталей
                    </h3>
                    <form className='column' onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="column">
                                <fieldset>
                                    <legend>
                                        Имя
                                    </legend>
                                    <input type="text" required minLength={3} placeholder='Иван Иванов' />
                                </fieldset>
                                <fieldset>
                                    <legend>
                                        Телефон
                                    </legend>
                                    <input type="number" required minLength={5} placeholder='+79123456789' />
                                </fieldset>
                                <fieldset>
                                    <legend>
                                        Email
                                    </legend>
                                    <input type="email" required placeholder='example@mail.com' />
                                </fieldset>
                            </div>

                            <textarea required minLength={2} placeholder='Был ли у вас ранее опыт инвестирования?'></textarea>
                        </div>

                        <Button txt='отправить' />
                    </form>
                </div>

                <div className="thanks" ref={thanksSection}>
                    <h3>
                        Спасибо!
                        В ближайшее время с вами свжется наш специалист.<br />
                        Желаем успешной торговли!
                    </h3>
                </div>
            </div>
            :
            <div className={`form_block_1`}>
                <svg
                    height="512px"
                    viewBox="0 0 512 512"
                    width="512px"
                    className="close"
                    onClick={() => setContextModal(false)}
                >
                    <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
                </svg>

                <h2>
                    Возникли вопросы?
                </h2>

                <form onSubmit={handleSubmit}>
                    <h4>
                        Для получения детальной информации воспользуйтесь формой обратной связи
                    </h4>
                    <div className="row">
                        <div>
                            <div className="row">
                                <img src={succes} alt="form" />
                                <p>
                                    Личный консультант свяжется с вами в течение дня
                                </p>
                            </div>
                            <input type="text" name='name' placeholder='Введите ваше имя' />
                            <Button txt='ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ' style='primary' />
                        </div>
                        <div>
                            <div className="row">
                                <img src={succes} alt="form" />
                                <p>
                                    Проконсультирует и подберет индивидуальную стратегию
                                </p>
                            </div>
                            <input type="number" name='phone' placeholder='Введите ваш номер' />
                            <input type="checkbox" name="agree" id="agree" />
                            <label htmlFor="agree">
                                Согласен(на) с обработкой  персональных данных
                            </label>
                        </div>
                    </div>
                </form>
                <div className="thanks" ref={thanksSection}>
                    <h3>
                        Спасибо!
                        В ближайшее время наш менеджер свяжется с вами для получения детальной информации!<br />
                        Желаем успешной торговли!
                    </h3>
                </div>
            </div>
    )
}