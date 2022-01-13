import { Link } from 'react-router-dom';
import Button from '../button/button';
import './articles.scss';
import img_0_0 from './assets/0_0.png';
import img_0_1 from './assets/0_1.png';
import img_0_2 from './assets/0_2.png';
import img_0_3 from './assets/0_3.png';
import img_1_0 from './assets/1_0.png';
import img_1_1 from './assets/1_1.png';
import img_1_2 from './assets/1_2.png';

export default function Articles() {

    window.scrollTo(0, 0);

    return (
        <div className="articles_page content">
            <div className="row">
                <div className="column">
                    <h3>
                        НОВАЯ СТАТЬЯ
                    </h3>
                    <div className="block">
                        <img src={img_0_0} alt="article_image" />
                        <h3>
                            Зачем инвестировать и как начать
                        </h3>
                        <p>
                            Если регулярно откладывать и инвестировать деньги, можно создать капитал, который будет приносить пассивный доход в виде купонов или дивиден...
                        </p>
                        <div className="row">
                            <p>
                                11 февраля 2020
                            </p>
                            <p className='views'>
                                7530
                            </p>
                        </div>
                        <Button txt='ЧИТАТЬ СТАТЬЮ' style='primary' />
                    </div>

                    <div className="block">
                        <img src={img_0_1} alt="article_image" />
                        <h3>
                            Как начать торговать на бирже — объясняют эксперты проекта Минфина
                        </h3>
                        <p>
                            Падение стоимости ценных бумаг из-за двойного шока — обвала цен на нефть и карантинных ограничение — принесло огромные убытки инвесторам и в то же время открыло отличные возможности купить качественные активы с кризисными скидками. Они снова пойдут в рост, когда пройдет пандемия и придет в себя нефтяной рынок...
                        </p>
                        <div className="row">
                            <p>
                                11 февраля 2020
                            </p>
                            <p className='views'>
                                7530
                            </p>
                        </div>
                        <Link to='/article_0'>
                            <Button txt='ЧИТАТЬ СТАТЬЮ' style='primary' />
                        </Link>
                    </div>

                    <div className="block">
                        <img src={img_0_2} alt="article_image" />
                        <h3>
                            Эксперт назвал три правила инвестирования для новичков. Обзор рынка
                        </h3>
                        <div className="row">
                            <p>
                                11 февраля 2020
                            </p>
                            <p className='views'>
                                7530
                            </p>
                        </div>
                        <Link to='/article_1'>
                            <Button txt='ЧИТАТЬ СТАТЬЮ' style='primary' />
                        </Link>
                    </div>

                    <div className="block">
                        <img src={img_0_3} alt="article_image" />
                        <h3>
                            С граждан спросится
                        </h3>
                        <p>
                            Большинство граждан смогут покупать на бирже наиболее рискованные инструменты, а также проводить сделки с «плечом» (на заемные средства) только после тестирования у брокера. Закон об этом («о категоризации инвесторов») публикует ...
                        </p>
                        <div className="row">
                            <p>
                                11 февраля 2020
                            </p>
                            <p className='views'>
                                7530
                            </p>
                        </div>
                        <Link to='/article_2'>
                            <Button txt='ЧИТАТЬ СТАТЬЮ' style='primary' />
                        </Link>
                    </div>
                </div>

                <div className="column">
                    <h3>
                        ПОПУЛЯРНОЕ
                    </h3>

                    <Link to='article_4'>
                        <div className="block">
                            <img src={img_1_0} alt="article_image" />
                            <h5>
                                Как правильно вкладывать деньги в ценные бумаги
                            </h5>
                            <p className='views'>
                                7530
                            </p>
                        </div>
                    </Link>

                    <Link to='/article_5'>
                        <div className="block">
                            <img src={img_1_1} alt="article_image" />
                            <h5>
                                Илон Маск продал акции Tesla еще почти на $1 млрд
                            </h5>
                            <p className='views'>
                                7530
                            </p>
                        </div>
                    </Link>

                    <Link to='/article_3'>
                        <div className="block">
                            <img src={img_1_2} alt="article_image" />
                            <h5>
                                Куда инвестирует принц Саудовской Аравии
                            </h5>
                            <p className='views'>
                                7530
                            </p>
                        </div>
                    </Link>

                    <div className="title">
                        ТРЕНИНГИ
                    </div>

                    <div className="block">
                        <img src={img_0_0} alt="training" />
                        <h5>
                            Зачем инвестировать и как начать
                        </h5>
                        <ul>
                            <li>
                                5 дней
                            </li>
                            <li>
                                Бесплатный курс
                            </li>
                        </ul>
                        <p>
                            Если регулярно откладывать и инвестировать деньги, можно создать капитал, который будет приносить пассивный доход в виде купонов или
                        </p>
                        <h6>
                            СТАРТ 6 МАРТА
                        </h6>
                        <Button txt='участвовать бесплатно' />
                    </div>

                    <div className="block">
                        <img src={img_0_0} alt="training" />
                        <h5>
                            Зачем инвестировать и как начать
                        </h5>
                        <ul>
                            <li>
                                5 дней
                            </li>
                            <li>
                                Бесплатный курс
                            </li>
                        </ul>
                        <p>
                            Если регулярно откладывать и инвестировать деньги, можно создать капитал, который будет приносить пассивный доход в виде купонов или
                        </p>
                        <h6>
                            СТАРТ 6 МАРТА
                        </h6>
                        <Button txt='участвовать бесплатно' />
                    </div>
                </div>
            </div>
        </div>
    )
}