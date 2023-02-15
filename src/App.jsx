import React from 'react';
import logo from '../src/pictures/lastfm_logo.png'
import default_player from '../src/pictures/player_default.png'
import scrobbler from '../src/pictures/scrobbler_logo.png'
import {Main} from './components/main/Main'

function App() {
  return (
    <div className="App">
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <header className = "header">
      <img  className = 'player-bar-artwork' src={default_player}/>
      <img className = "lastfm_logo" src={logo} height = '40px'/>
      <div className = "right_nav">
        
        <div  className="right_nav_bar link">Поиск</div>
        <div className="right_nav_bar link">Live</div>
        <div className="right_nav_bar link">Музыка</div>
        <div className="right_nav_bar link">Чарты</div>
        <div className="right_nav_bar link">События</div>
        <div className="right_nav_bar link">Избранное</div>
        <div className="right_nav_bar link">Вход</div>
      </div>
    </header>
    <Main/>
    <footer className = "footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-top-row">
            <div className="footer-top-col">
              <h2 className = "footer-heading">Компания</h2>
              <ul className="footer-links">
                <li>
                  <div className="link_footer">О Last.fm</div>
                </li>
                <li>
                  <div className="link_footer">Связаться с нами</div>
                </li>
                <li>
                  <div className="link_footer">Вакансии</div>
                </li>
              </ul>
            </div>
            <div className="footer-top-col">
              <h2 className="footer-heading">Справка</h2>
              <ul className="footer-links">
                <li>
                  <div className = "link_footer">Отслеживай музыку</div>
                </li>
                <li>
                  <div className = "link_footer">Поддержка сообщества</div>
                </li>
                <li>
                  <div className = "link_footer">Правила сообщества</div>
                </li>
                <li>
                  <div className = "link_footer">Справка</div>
                </li>
              </ul>
            </div>
            <div className="footer-top-col">
              <h2 className = "footer-heading">Фишки</h2>
              <ul className="footer-links">
                <li>
                  <div className = "link_footer">Загрузить Скробблер</div>
                </li>
                <li>
                  <div className = "link_footer">API для разработчиков</div>
                </li>
                <li>
                  <div className = "link_footer">Загрузка музыки</div>
                </li>
                <li>
                  <div className = "link_footer">Товары</div>
                </li>
              </ul>
            </div>
            <div className="footer-top-col">
              <h2 className="footer-heading">Аккаунт</h2>
              <ul className="footer-links">
                <li>
                  <div className = "link_footer">Регистрация</div>
                </li>
                <li>
                  <div className = "link_footer">Вход</div>
                </li>
                <li>
                  <div className = "link_footer">Подписаться</div>
                </li>
              </ul>
            </div>
            <div className="footer-top-col">
              <h2 className="footer-heading">Наши соцсети</h2>
              <ul className="footer-links">
                <li>
                  <div className = "link_footer">Facebook</div>
                </li>
                <li>
                  <div className = "link_footer">Twitter</div>
                </li>
                <li>
                  <div className = "link_footer">Instagram</div>
                </li>
                <li>
                  <div className = "link_footer">YouTube</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className = 'footer-bottom-container'>
          <div className = 'row'>
            <div className = 'footer-language-selector'>
              <ul className = 'language-selector'>
                <li className = 'language-li'>
                  <div >English</div>
                </li>
                <li className = 'language-li'>
                  <div >Deutsch</div>
                </li>
                <li className = 'language-li'>
                  <div >Espanol</div>
                </li>
                <li className = 'language-li'>
                  <div >Francais</div>
                </li>
                <li className = 'language-li'>
                  <div >Italiano</div>
                </li>
                <li className = 'language-li'>
                  <div >Cheneese</div>
                </li>
                <li className = 'language-li'>
                  <div >Русский</div>
                </li>
                <li className = 'language-li'>
                  <div>Svenska</div>
                </li>
              </ul>
              <p className = "footer-timezone">
                <span>Часовой пояс: <strong>Europe/Moscow</strong></span>
              </p>
            </div>
            <div className = 'footer-legal'>
              <ul>
                <li className = 'footer-legal-item'>
                  <a rel = 'nofollow'>CBS Interactive</a>
                  @ 2022
                  <span>Last.fm</span>  Ltd. Все права защищены.
                </li>
                <li className = 'footer-legal-item'>
                  <div>Условия пользования</div>
                </li>
                <li className = 'footer-legal-item'>
                  <div>Политика конфиденциальности</div>
                </li>
                <li className = 'footer-legal-item'>
                  <div>Правовые положения</div>
                </li>
                <li className = 'footer-legal-item'>
                  <div>Использование файлов cookies.</div>
                </li>
              </ul>
            </div>
            <div className = 'scrobbler'>
              <p>Audioscrobbler</p>
              {/* <img src="../public/scrobbler_logo.png" width="37" height="20"/> */}
              <img src={scrobbler} width='40'/>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default App;
