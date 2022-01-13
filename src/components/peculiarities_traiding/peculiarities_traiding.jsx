import { Link } from "react-router-dom";
import "./peculiarities_traiding.scss";
import img_1 from "./img/01.png";
import img_2 from "./img/02.png";
import img_3 from "./img/03.png";
import img_4 from "./img/04.png";
import img_5 from "./img/05.png";
import Button from "../button/button";
import { useTranslation } from "react-i18next";

export default function Peculiarities_traiding() {

    window.scrollTo(0, 0)

    function handlerSubmit(event) {
        event.preventDefault();
    }

    const { t, i18n } = useTranslation("common");

    return (
        <div className="peculiarities_traiding">
            <div className="row peculiarities_traiding_top">
                <Link to="/" className="peculiarities_traiding_body_back">
                    &#8592;
                </Link>

                <Link to="/" className="peculiarities_traiding_body_back">
                    {t("peculiarities_traiding.hidden")}
                </Link>
            </div>
            <div className="peculiarities_traiding_body">
                <div className="row">
                    <div className="peculiarities_traiding_body_left">
                        <Link to="/" className="peculiarities_traiding_body_back">
                            &#8592;
                        </Link>
                    </div>

                    <h1>
                        {t("peculiarities_traiding.section.0.title")}
                    </h1>
                </div>
                <div className="row">
                    <div className="peculiarities_traiding_body_left"></div>
                    <div>
                        <p>
                            {t("peculiarities_traiding.section.0.text.0")}
                        </p>

                        <p>
                            {t("peculiarities_traiding.section.0.text.1")}
                        </p>

                        <p>
                            {t("peculiarities_traiding.section.0.text.2")}
                        </p>

                        <div className="peculiarities_traiding_body_title">
                            <img src={img_1} alt="1" />
                            <p>
                                {t("peculiarities_traiding.section.1.title")}
                            </p>
                        </div>

                        <p>
                            {t("peculiarities_traiding.section.1.text.0")}
                        </p>

                        <p>
                            {t("peculiarities_traiding.section.1.text.1")}
                        </p>

                        <p>
                            {t("peculiarities_traiding.section.1.text.2")}
                        </p>

                        <div className="peculiarities_traiding_body_title">
                            <img src={img_2} alt="2" />
                            <p>
                                {t("peculiarities_traiding.section.2.title")}
                            </p>
                        </div>

                        <p>
                            {t("peculiarities_traiding.section.2.text.0")}
                        </p>

                        <p>
                            {t("peculiarities_traiding.section.2.text.1")}
                        </p>

                        <p>
                            {t("peculiarities_traiding.section.2.text.2")}
                        </p>

                        <div className="peculiarities_traiding_body_title">
                            <img src={img_3} alt="3" />
                            <p>
                                {t("peculiarities_traiding.section.3.title")}
                            </p>
                        </div>

                        <p>
                            {t("peculiarities_traiding.section.3.text.0")}
                        </p>

                        <p>
                            {t("peculiarities_traiding.section.3.text.1")}
                        </p>

                        <ul>
                            <li>
                                {t("peculiarities_traiding.section.3.text.2")}
                            </li>
                            <li>
                                {t("peculiarities_traiding.section.3.text.3")}
                            </li>
                            <li>
                                {t("peculiarities_traiding.section.3.text.4")}
                            </li>
                            <li>
                                {t("peculiarities_traiding.section.3.text.5")}
                            </li>
                        </ul>

                        <p>
                            {t("peculiarities_traiding.section.3.text.6")}
                        </p>
                    </div>
                </div>

                <div className="peculiarities_traiding_body_blue">
                    <h2>
                        {t("peculiarities_traiding.section.4.title")}
                    </h2>
                </div>

                <div className="row">
                    <div className="peculiarities_traiding_body_left"></div>
                    <div>
                        <p>
                            {t("peculiarities_traiding.section.4.text")}
                        </p>

                        <form onSubmit={handlerSubmit}>
                            <h3>
                                {t("peculiarities_traiding.section.4.form.title")}
                            </h3>

                            <div className="row">
                                <div>
                                    <label htmlFor="name">
                                        {t("peculiarities_traiding.section.4.form.text.0")}
                                    </label>
                                    <input type="text" id="name" />
                                </div>

                                <div>
                                    <label htmlFor="phone">
                                        {t("peculiarities_traiding.section.4.form.text.6")}
                                    </label>
                                    <input type="text" id="phone" className="litle_input" />
                                </div>
                            </div>

                            <h3>
                                {t("peculiarities_traiding.section.4.form.agree.0")}
                            </h3>

                            <div className="peculiarities_traiding_body_agree">
                                <input type="checkbox" id="agree" />
                                <label htmlFor="agree">
                                    {t("peculiarities_traiding.section.4.form.agree.1")}
                                </label>
                            </div>
                            <Button txt={t("peculiarities_traiding.section.4.form.button")} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
