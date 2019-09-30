import React from 'react';
import './App.scss';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      initX: 0,
      initY: 0,
      x: 0,
      y: 0,
      socialsShown: {
        exrovision: false,
        art: false,
        fashion: false,
        society: false,
      },
      underLogoShown: true,
      headerFixed: false,
      reduceBG: {
        exrovision: false,
        art: false,
        fashion: false,
        society: false,
      },
      contentReduced: {
        exrovision: false,
        art: false,
        fashion: false,
        society: false,
      },
      imgToTop: false
    };
  }

  showSocials = e => () => {
    this.setState({
      socialsShown: {
        [e]: true
      }
    })
  }

  hideSocials = e => () => {
    this.setState({
      socialsShown: {
        [e]: false
      }
    })
  }

  initImageMousePos = () => e => {
    const posX = e.nativeEvent.offsetX
    const posY = e.nativeEvent.offsetY
    this.setState({
      initX: posX,
      initY: posY,
    })
  }

  socialImageMove = () => e => {
    const edgeX = 80
    const edgeY = 80
    const posX = e.nativeEvent.offsetX;
    const posY = e.nativeEvent.offsetY;
    let changedPosX = Math.floor((this.state.initX - posX) / 5);
    let changedPosY = Math.floor((this.state.initY - posY) / 3);

    changedPosX = changedPosX > edgeX ? edgeX : changedPosX
    changedPosX = changedPosX < -edgeX ? -edgeX : changedPosX

    changedPosY = changedPosY > edgeY ? edgeY : changedPosY
    changedPosY = changedPosY < -edgeY ? -edgeY : changedPosY

    this.setState({
      marginLeft: changedPosX,
      marginTop: changedPosY
    })

    this.setState({
      largeSocialImageStyle: {
        position: "relative",
        marginLeft: this.state.marginLeft + "px",
        marginTop: this.state.marginTop + "px",
      }
    })
  }

  socialImageLeave = () => ob => {
    this.setState({ largeSocialImageStyle: { margin: 0 } })
  }

  scrollPage = () => {
    if (window.pageYOffset > 5) {
      this.setState({ headerFixed: true })
    } else {
      this.setState({ headerFixed: false })
    }

    if (window.pageYOffset > 30) {
      this.setState(prev => ({
        reduceBG: {
          ...prev.reduceBG,
          exrovision: true,
        }
      }))
    } else {
      this.setState(prev => ({
        reduceBG: {
          ...prev.reduceBG,
          exrovision: false,
        }
      }))
    }

    if (window.pageYOffset > 240) {
      this.setState(prev => ({
        contentReduced: {
          ...prev.contentReduced,
          exrovision: true,
        }
      }))
    } else {
      this.setState(prev => ({
        contentReduced: {
          ...prev.contentReduced,
          exrovision: false,
        }
      }))
    }

    if (window.pageYOffset > 1060) {
      this.setState(prev => ({
        reduceBG: {
          ...prev.reduceBG,
          art: true,
        }
      }))
    } else {
      this.setState(prev => ({
        reduceBG: {
          ...prev.reduceBG,
          art: false,
        }
      }))
    }

    if (window.pageYOffset > 1360) {
      this.setState(prev => ({
        contentReduced: {
          ...prev.contentReduced,
          art: true,
        }
      }))
    } else {
      this.setState(prev => ({
        contentReduced: {
          ...prev.contentReduced,
          art: false,
        }
      }))
    }

    if (window.pageYOffset > 2130) {
      this.setState(prev => ({
        reduceBG: {
          ...prev.reduceBG,
          fashion: true,
        }
      }))
    } else {
      this.setState(prev => ({
        reduceBG: {
          ...prev.reduceBG,
          fashion: false,
        }
      }))
    }

    if (window.pageYOffset > 2465) {
      this.setState(prev => ({
        contentReduced: {
          ...prev.contentReduced,
          fashion: true,
        }
      }))
    } else {
      this.setState(prev => ({
        contentReduced: {
          ...prev.contentReduced,
          fashion: false,
        }
      }))
    }

    if (window.pageYOffset > 1710) {
      this.setState({ imgToTop: true })
    } else {
      this.setState({ imgToTop: false })
    }

    if (window.pageYOffset > 2550) {
      this.setState(prev => ({
        contentReduced: {
          ...prev.contentReduced,
          social: true,
        }
      }))
    } else {
      this.setState(prev => ({
        contentReduced: {
          ...prev.contentReduced,
          social: false,
        }
      }))
    }

  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollPage, { passive: true })
  }

  render() {
    return (
      <>
        <div className="wrap" onScroll={this.scrollPage}>
          <div className={`header-wrap ${this.state.headerFixed ? 'sticky' : ''}`}>
            <header className={`header`}>
              <div className="header-logo">
                LET&nbsp;!T&nbsp;SH<span>O</span>W
            {!this.state.headerFixed ? <div>production</div> : ''}
              </div>
              <div className="header-links">
                <nav>
                  <a className="header-link" href="/">шоубиз</a>
                  <a className="header-link" href="/">искусство</a>
                  <a className="header-link" href="/">красота</a>
                  <a className="header-link" href="/">общество</a>
                </nav>
                <div className="header-arrow"><button></button></div>
              </div>
            </header>
          </div>
          <content>
            <div className={`exrovision ${this.state.headerFixed ? 'sticky-content' : ''}`}>
              <div className={`exrovision-bg ${this.state.reduceBG.exrovision ? 'exrovision-reduced-bg transition-slow' : 'exrovision-full-bg transition-slow'}`}></div>

              <div className="exrovision-left">
                <div className="exrovision-left-intro">
                  <div className="exrovision-left-intro-pre">выбор редакции</div>
                  <div className="exrovision-left-intro-title">EXROVISION.<br />закулисы</div>
                  <div className="exrovision-left-intro-author">Анна Простынцева</div>

                </div>
                <div className={`exrovision-left-article `} >
                  <div className={`exrovision-left-article-more ${this.state.contentReduced.exrovision ? 'margin-top-0 transition-fast' : 'margin-top-70 transition-slow'}`}>
                    <button className="button-more">заглянуть</button>
                  </div>
                  <div className={`exrovision-left-article-thumb ${this.state.contentReduced.exrovision ? 'top-reduce transition-slow' : 'top-full transition-slow'}`}>
                    <img src="/img/dorn.png" alt="" />
                  </div>
                  <div className="exrovision-left-article-bottom-title">Интервью:<br />дорн</div>
                  <div className="exrovision-left-article-bottom-text">
                    <div>
                      Иван Дорн рассказывает о любви принцессы и о том, как он встретил свое счастье.
                      Счастье оказалось мимолетным.
                    </div>
                  </div>
                </div>
              </div>

              <div className="exrovision-right">
                <div className="exrovision-right-main">
                  <div className="exrovision-right-main-thumb" >
                    <div className="exrovision-right-main-thumb-img">
                      <img src="/img/girl.png"
                        style={this.state.largeSocialImageStyle}
                        onMouseMove={this.socialImageMove()}
                        onMouseLeave={this.socialImageLeave()}
                        onMouseOver={this.initImageMousePos()}
                        ref="largeSocialImage"
                        alt="" />
                    </div>
                    <div className="exrovision-right-main-thumb-social">
                      <div className="social-icon tw"></div>
                      <div className="social-icon fb"></div>
                      <div className="social-icon vk"></div>
                    </div>
                  </div>
                  <div className="exrovision-right-main-showbiz">
                    <div className="exrovision-right-main-showbiz-title">
                      Шоубиз
                  <span className="exrovision-right-main-showbiz-title-line"></span>
                    </div>
                  </div>
                </div>
                <div className="exrovision-right-article">
                  <div className="exrovision-right-article-thumb"
                    onMouseOver={this.showSocials('exrovision')}
                    onMouseLeave={this.hideSocials('exrovision')}
                  >
                    <img src="/img/scorp.png" alt="" />
                    <div style={{ display: (this.state.socialsShown.exrovision ? "block" : "none") }} className="exrovision-right-article-thumb-social socials">
                      <a href="/"><span className="social-icon tw"></span></a>
                      <a href="/"><span className="social-icon fb"></span></a>
                      <a href="/"><span className="social-icon vk"></span></a>
                    </div>
                  </div>
                  <div className="exrovision-right-article-content">
                    <div className="exrovision-right-article-content-text">Прощальный концерт scorpions </div>
                    <div className="exrovision-right-article-content-desc">Серией крупных концертов в России завершается юбилейный гастрольный тур Scorpions, посвященный 50-летию легендарного коллектива. </div>
                    <div><button className="button-read">полностью</button></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="art">
              <div className={`art-bg ${this.state.reduceBG.art ? 'art-reduced-bg transition-slow' : 'art-full-bg transition-slow'}`}></div>
              <div className={`art-left ${this.state.contentReduced.art ? 'art-reduced-content transition-slow' : 'art-full-content transition-slow'}`}>
                <div className="art-left-video">
                  <div className="art-left-video-thumb">
                    <img src="img/art-video.png" alt="" />
                    <img className="player" src="img/video-player.png" alt="" />
                  </div>
                </div>
                <div className="art-left-article">
                  <div className="art-left-article-title">Мастер-класс настенной живописи в санкт-петербурге
              </div>
                  <div className="art-left-article-text">Серией крупных концертов в России завершается юбилейный гастрольный тур,
                    посвященный 50-летию легендарного коллектива. В мастерклассе приняли участие 10 тысяч человек.
                  </div>
                  <div className={`art-left-article-more ${this.state.contentReduced.art ? 'marginAnim' : 'marginAnimNone'}`}>
                    <button className="button-read">полностью</button>
                  </div>
                </div>
              </div>
              <div className="art-right">
                <div className="art-right-rotate">
                  <div className="art-right-rotate-title">
                    Искусство
                    <span className="art-right-rotate-title-line"></span>
                  </div>
                </div>
                <div className="art-right-content">
                  <div className="art-right-content-image">
                    <img src="img/art-pokras.png" alt="" />
                  </div>
                  <div className="art-right-content-title">pokras международный</div>
                  <div className="art-right-content-news"
                    onMouseOver={this.showSocials('art')}
                    onMouseLeave={this.hideSocials('art')}
                  >
                    <img src="img/art-garage.png" alt="" />
                    <div
                      style={{ display: (this.state.socialsShown.art ? "block" : "none") }}
                      className="art-right-content-news-social social"
                    >
                      <a href="/"><span className="social-icon tw"></span></a>
                      <a href="/"><span className="social-icon fb"></span></a>
                      <a href="/"><span className="social-icon vk"></span></a>
                    </div>
                  </div>
                  <div className="art-right-content-title">выстывка в гараже. соврременное искусство на стенах
                </div>
                </div>
              </div>
            </div>

            <div className="fashion">
              <div className="fashion-left">
                <div className={`fashion-left-bg ${this.state.reduceBG.fashion ? 'fashion-reduced-bg transition-slow' : 'fashion-full-bg transition-slow'}`}></div>
                <div className="fashion-left-gallery">
                  <div>
                    <a href="/">
                      <img className={`transition-delay-100 ${this.state.imgToTop ? "top-20" : "transition-slow"}`} alt="" src="img/fashion-1.png" />
                    </a>
                  </div>
                  <div>
                    <a href="/">
                      <img className={`transition-delay-300 ${this.state.imgToTop ? "top-20" : "transition-slow"}`} src="img/fashion-2.png" alt="" />
                    </a>
                  </div>
                  <div>
                    <div className="fashion-left-gallery-rotate">
                      <div className="fashion-left-gallery-rotate-title">Мода
                        <span className="fashion-left-gallery-rotate-title-line"></span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a href="/">
                      <img className={`transition-delay-500 ${this.state.imgToTop ? "top-20" : "transition-slow"}`} src="img/fashion-3.png" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="/">
                      <img className={`transition-delay-700 ${this.state.imgToTop ? "top-20" : "transition-slow"}`} src="img/fashion-4.png" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="/">
                      <img className={`transition-delay-900 ${this.state.imgToTop ? "top-20" : "transition-slow"}`} src="img/fashion-5.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className={`fashion-right transition-slow ${this.state.contentReduced.fashion ? 'art-reduced-content' : 'art-full-content'}`}>
                <div className="fashion-right-img"
                  onMouseOver={this.showSocials('fashion')}
                  onMouseLeave={this.hideSocials('fashion')}
                >
                  <img src="img/fashion-6.png" alt="" />
                  <div
                    style={{ display: (this.state.socialsShown.fashion ? "block" : "none") }}
                    className="fashion-right-img-social social"
                  >
                    <a href="/"><span className="social-icon tw"></span></a>
                    <a href="/"><span className="social-icon fb"></span></a>
                    <a href="/"><span className="social-icon vk"></span></a>
                  </div>
                </div>
                <div className="fashion-right-article">
                  <div className="fashion-right-article-title">
                    какого цвета Лето?
                </div>
                  <div className="fashion-right-article-text">Сейчас середина января, а значит, примерно через месяц в магазины начнет поступать
            одежда сезона весна-лето 2015. Мы выбрали 23 ключевые тенденции, под знаком которых пройдет модный теплый сезон в этом году</div>
                  <div className="fashion-right-article-more">
                    <button className={`button-read ${this.state.contentReduced.fashion ? 'marginAnim' : 'marginAnimNone'}`}>Подробнее</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="society">
              <div className="society-bg"></div>
              <div className="society-left">
                <div className="society-left-article">
                  <div className="society-left-article-image"
                    onMouseOver={this.showSocials('society')}
                    onMouseLeave={this.hideSocials('society')}
                  >
                    <img src="img/society-1.png" alt="" />
                    <div
                      style={{ display: (this.state.socialsShown.society ? "block" : "none") }}
                      className="society-left-article-image-social social"
                    >
                      <a href="/"><span className="social-icon tw"></span></a>
                      <a href="/"><span className="social-icon fb"></span></a>
                      <a href="/"><span className="social-icon vk"></span></a>
                    </div>
                  </div>
                  <div className="society-left-article-title">Почему нельзя перекрашивать фотографии?</div>
                  <div className="society-left-article-more">
                    <button className="button-read">полностью</button>
                  </div>
                </div>
                <div className="society-left-rotate">
                  Общество
                  <span className="society-left-rotate-line"></span>
                </div>
              </div>
              <div className="society-right">
                <div className={`transition-duration-100 ${!this.state.contentReduced.social ? "margin-left-100" : ""}`}>
                  <div><img src="img/society-2.png" alt="" /></div>
                  <div>Глобальная блокировка</div>
                </div>

                <div className={`transition-duration-300 ${!this.state.contentReduced.social ? "margin-left-150" : ""}`}>
                  <div><img src="img/society-3.png" alt="" /></div>
                  <div>Запрет на улов в японском море</div>
                </div>

                <div className={`transition-duration-500 ${!this.state.contentReduced.social ? "margin-left-200" : ""}`}>
                  <div><img src="img/society-4.png" alt="" /></div>
                  <div>Ген прокурор был заядлым  геймером</div>
                </div>

                <div className={`transition-duration-900 ${!this.state.contentReduced.social ? "margin-left-250" : ""}`}>
                  <div><img src="img/society-5.png" alt="" /></div>
                  <div>Латвия: законы просты</div>
                </div>
              </div>
            </div>
          </content>

          <footer className="footer">
            <div className="footer-menu">
              <div className="footer-menu-item">
                <div className="footer-menu-title">
                  шоубиз
              </div>
                <nav className="footer-menu-links">
                  <a href="/">Киркоров</a>
                  <a href="/">Концерты</a>
                  <a href="/">Интервью</a>
                  <a href="/">Фото</a>
                  <a href="/">Зарубежное</a>
                  <a href="/">Наши</a>
                  <a href="/">Скандалы</a>
                </nav>
              </div>
              <div className="footer-menu-item">
                <div className="footer-menu-title">
                  общество
              </div>
                <nav className="footer-menu-links">
                  <a href="/">Мир</a>
                  <a href="/">Россия</a>
                  <a href="/">ГТО</a>
                  <a href="/">События</a>
                  <a href="/">Зарубежное</a>
                </nav>
              </div>
              <div className="footer-menu-item">
                <div className="footer-menu-title">
                  искусство
              </div>
                <nav className="footer-menu-links">
                  <a href="/">Выставки</a>
                  <a href="/">Мастера</a>
                  <a href="/">Учеба</a>
                  <a href="/">Новые имена</a>
                  <a href="/">Арт-объект</a>
                  <a href="/">Сделано!</a>
                </nav>
              </div>
              <div className="footer-menu-item">
                <div className="footer-menu-title">
                  красота
              </div>
                <nav className="footer-menu-links">
                  <a href="/">Тренды</a>
                  <a href="/">Бренды</a>
                  <a href="/">Утреннее</a>
                  <a href="/">Ешь и пей</a>
                  <a href="/">Акссесуары</a>
                  <a href="/">Здоровье</a>
                  <a href="/">Беседы о</a>
                </nav>
              </div>
              <div className="footer-menu-item">
                <div className="footer-menu-title">
                  редакция
              </div>
                <nav className="footer-menu-links">
                  <a href="/">По рекламе</a>
                  <a href="/">Контакты</a>
                  <a href="/">Манифест</a>
                  <a href="/">Вакансии</a>
                </nav>
              </div>
              <div className="footer-menu-item">
                <div className="footer-menu-title">
                  подписывайся
              </div>
                <div><input className="subscribe-input" type="text" /></div>
                <div className="more">Читайте думайте и еще раз. Посмотреть, почитать, повторить.</div>
              </div>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-logo">
              <div className="footer-logo-rights">
                <div className="footer-logo-rights-title">Политика конфиенциальности</div>
                <div className="footer-logo-rights-text">ЗАО «Корпорайшн Интертейменд» 2008 – 2015.</div>
                <div className="footer-logo-rights-info">Все права защищены.</div>
              </div>
              <div className="footer-logo-socials">
                <img src="img/vk-w.png" alt="" />
                <img src="img/fb-w.png" alt="" />
                <img src="img/tw-w.png" alt="" />
                <img src="img/insta-w.png" alt="" />
              </div>
            </div>
          </footer>
        </div >


      </>
    )
  }
}
