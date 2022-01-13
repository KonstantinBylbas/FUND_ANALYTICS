import { Link } from 'react-router-dom';
import BI from './assets/bi.png';
import './article_5.scss';


export default function Article_5() {

    window.scrollTo(0, 0);

    return (
        <div className="article_5">
            <img src={BI} alt="header" />
            <div className="content">
                <div className="row">
                    <div className="article_5_blue">
                        <h1>
                            Илон Маск продал акции Tesla еще почти на $1 млрд
                        </h1>

                    </div>
                    <div className="article_5_black">
                        <p>
                            По данным Комиссии по ценным бумагам и биржам США (SEC), Илон Маск продал 15 ноября более 934 тыс. акций по цене от $980 до $1028 за штуку.
                        </p>
                        <p>
                            6 ноября он запустил опрос в Twitter о продаже 10% своих акций Tesla стоимостью около $21 млрд. Почти 58% проголосовали за.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="article_5_black">
                        <p>
                            <span>
                                11 ноября Маск продал около 934 тыс. акций Tesla на $1,1 млрд. Также траст Илона Маска дополнительно продал более 3,5 млн акций на сумму более $3,88 млрд. Позже стало известно, что в тот же день предприниматель продал акции ещё на $687 млн.
                            </span>
                        </p>
                        <p>
                            <span>
                                В заявке Илон Маск указал, что продал часть своей доли для выполнения налоговых обязательств, и что совершает сделку по согласованному в сентябре плану. Такие планы составляют крупнейшие владельцы ценных бумаг компаний, чтобы избежать обвинений в инсайдерской торговле.
                            </span>
                        </p>
                    </div>

                    <div className="article_5_blue">
                        <div className="row">
                            <div className="article_5_blue_column"></div>
                            <div className="article_5_blue_content">
                                <p>
                                    Теперь в собственности главы компании пакет акций на менее $20 млрд
                                </p>
                                <h3>
                                    $20 млрд
                                </h3>
                            </div>
                        </div>
                    </div>

                    <p>
                        <span>
                            С 8 ноября он продал около 7,23 миллиона акций примерно за $7,83 млрд, пишет Market Watch. Некоторые акции были проданы до публикации опроса, отмечает издание.
                        </span>
                    </p>
                    <p>
                        <span>
                            Накануне опроса крупнейшие акционеры Tesla продали свои бумаги. Среди них председатель совета директоров Робин Денхолм и брат Илона Маска Кимбал Маск.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}