import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './components/variables.scss';
import './App.scss';
import Footer from './components/footer/footer';
import Home from "./components/home/home";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useContext, useEffect, useRef, useState } from "react";
import ExampleInvesting from "./components/exampleInvesting/exampleInvesting";
import Peculiarities_traiding from "./components/peculiarities_traiding/peculiarities_traiding";
import Brokers from "./components/brokers/brokers";
import Readymade_Solutions from "./components/readymade_solutions/readymade_solutions";
import Blockchain from "./components/blockchain/blockchain";
import Team from "./components/team/team";
import Form from "./components/form/form";
import { ModalContext } from "./components/services/contexts/modalcontext/modal.context";
import Politics from "./components/politics/politics";
import Forum from "./components/forum/forum";
import { useTranslation } from "react-i18next";
import Articles from "./components/articles/articles";
import Article_1 from "./components/articles/article/1/article_1";
import Article_0 from "./components/articles/article/0/article_0";
import Article_2 from "./components/articles/article/2/article_2";
import Article_3 from "./components/articles/article/3/article_3";
import Article_4 from "./components/articles/article/4/article_4";
import Article_5 from "./components/articles/article/5/article_5";
import Nav from "./components/nav/nav";
import Chat from './assets/chat.svg';

function getCookie(name) {
    let matches = document.cookie.match(
        new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"
        )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export default function App() {

    useEffect(() => {
        AOS.init({
            duration: 500,
        });

        i18n.changeLanguage(getCookie("language"));
    }, []);
    const { t, i18n } = useTranslation("common");
    function updateLang(lng) {
        document.cookie = `language=${lng}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
        window.location.reload();
    }

    const { contextModal, setContextModal } = useContext(ModalContext);

    const arrowTop = useRef(null);
    if (arrowTop)
        window.onscroll = function () {
            if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
                arrowTop.current.style.display = "flex";
            } else {
                arrowTop.current.style.display = "none";
            }
        }

    const [isShow, setisShow] = useState(false);

    return (
        <Router>
            <div className={`modal ${contextModal.show ? "modalOpen" : ""}`}>
                <Form status={contextModal.status} />
            </div>

            <Nav updateLang={updateLang} />

            <Switch>
                <Route path='/ExampleInvesting'>
                    <ExampleInvesting t={t} />1
                </Route>

                <Route path='/peculiarities_traiding'>
                    <Peculiarities_traiding t={t} />
                </Route>

                <Route path='/brokers'>
                    <Brokers t={t} />
                </Route>

                <Route path='/readymade_solutions'>
                    <Readymade_Solutions t={t} />
                </Route>

                <Route path='/blockchain'>
                    <Blockchain t={t} />
                </Route>

                <Route path='/team'>
                    <Team t={t} />
                </Route>

                <Route path='/politics'>
                    <Politics t={t} />
                </Route>

                <Route path='/forum'>
                    <Forum t={t} />
                </Route>

                <Route path='/articles'>
                    <Articles t={t} />
                </Route>

                <Route path='/article_0'>
                    <Article_0 t={t} />
                </Route>

                <Route path='/article_1'>
                    <Article_1 t={t} />
                </Route>

                <Route path='/article_2'>
                    <Article_2 t={t} />
                </Route>

                <Route path='/article_3'>
                    <Article_3 t={t} />
                </Route>

                <Route path='/article_4'>
                    <Article_4 t={t} />
                </Route>

                <Route path='/article_5'>
                    <Article_5 t={t} />
                </Route>

                <Route path='/:id'>
                    <Home t={t} />
                </Route>

                <Route path='/'>
                    <Home t={t} />
                </Route>
            </Switch>

            <Footer t={t} />
            <div className='arrowTop' ref={arrowTop} onClick={() => window.scrollTo(0, 0)}></div>
            <div className={`messangers messangers_${isShow ? 'show' : ''}`} onClick={() => setisShow(!isShow)}>
                <img src={Chat} />
                <div>
                    <a href='#'></a>
                    <a href='#'></a>
                    <a href='#'></a>
                </div>
            </div>
        </Router>
    );
}