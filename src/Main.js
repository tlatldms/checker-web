import React, { Component } from 'react';
import FaqList from 'FaqList';
import Navi from 'Navi';
import Phone from 'images/phone.png';
import FooterLogoA from 'images/checker-logo-footer.svg';
import FooterLogoB from 'images/hyundai-logo.png';
import DevIcon from 'images/develop.svg';
import LockIcon from 'images/lock.svg';
import icon1 from 'images/pc.svg';
import icon2 from 'images/printer.svg';
import icon3 from 'images/label3.png';
import icon4 from 'images/phone.svg';

import Lot from 'images/lot.gif';

const imgUrls = [1,2,3];
let languages = {
    en: require('textEnglish'),
    kr: require('textKorean')
}
let phonePosition;

class ImageSlide extends Component {
    constructor(props) {
        super(props);
        this.state={
            lang: this.props.lang,
            url: this.props.url
        }
    }
    languageSelect=()=> {
        if (this.state.lang === 'kr') return 'kr';
        else return 'en';  
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if (nextProps.lang !== prevState.lang | nextProps.url !== prevState.url ) {
            return  {lang : nextProps.lang, url: nextProps.url} ;
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if (nextProps.url !== this.state.url | nextProps.lang !==this.state.lang)
            return true;
        else return false;
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate: " + JSON.stringify(prevProps) + " " + JSON.stringify(prevState));
    }

    render() {
        const Text=languages[this.languageSelect()];
        return (           
            <div className="test-transition">
            {console.log("width:"+window.innerWidth)}
            {console.log("width:"+window.innerHeight)}
                <div className={`pic${this.state.url} white-text`}>
                    <div className="front white-text">
                        <div className="back white-text">
                            <div className="first-texts">
                                <p className="p1_1 x20">{Text.p1_1}</p>
                                <br/><br/>
                                <h1 className="p1_2 x100">{Text.p1_2}</h1>
                                <h1 className="p1_2_1 x100">{Text.p1_2_1}</h1>
                                <br/>
                                { /* <p id={this.state.lang=="kr"? `p1_p_${this.state.url}`:`p1_p_en_${this.state.url}`}></p>*/}
                                <p className="p1_3 x28">Challenging Data security innovation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>      
        );
    }   
}


class App extends Component {
    constructor (props) {
        super(props);
        this.selectEn = this.selectEn.bind(this);
        this.selectKr = this.selectKr.bind(this);
        this.state = {
            currentImageIndex: 0,
            lang: 'kr'
        };
        this.nextSlide = this.nextSlide.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
        return true;
    }
    state={
        scroll: 3,
        lang: 'kr'
    }

    nextSlide() {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        const elm = document.getElementById('root')
        .querySelector('[class^="pic"],[class*=" pic"]');
        elm.className = `pic${index+1}`
        const newone = elm.cloneNode(true);
        elm.parentNode.replaceChild(newone, elm);

        this.setState({
            currentImageIndex: index
        });
    }


    languageSelect=()=> {
        if (this.state.lang === 'kr')  return 'kr';
        else return 'en';
    }       
    
    selectKr = (e)=> {
        this.setState({ lang: 'kr' })    
    }   
    selectEn = (e)=> {
        this.setState({ lang: 'en'})
    }
   
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: false })
        
        this.interval = setInterval(() => {
            this.nextSlide();
            }, 3000);
            this.forceUpdate();
    }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
        clearInterval(this.interval);
      }
    listenScroll = (e) => {
        this.setState({ scroll: window.pageYOffset });
    }
    
    handleScroll = (e) => {
        this.setState({ scroll: window.pageYOffset });
        let curScroll = this.state.scroll
        if (curScroll <window.innerHeight ) {
            phonePosition="po1"
        } else {
            phonePosition="po2"
        }
    }

    handleDivScroll = (e) => {
        const container = document.getElementsByClassName("labels-box");
        console.log(container.scrollTop)
        console.log(container.scrollLeft)
    }

    render() {
       const Text=languages[this.languageSelect()];
        return (
            <React.Fragment>
                {console.log(window.innerHeight)}
                {console.log(window.innerWidth)}
                <Navi selectEn={this.selectEn} selectKr={this.selectKr} lang={this.state.lang}/>               
                <ImageSlide url={imgUrls[this.state.currentImageIndex]} lang={this.state.lang} className="full-bkgd tmptmp"/>                   
                <div className="full-bkgd white-text p2-bkgd">
                    <div className="center-texts">
                    <img src={LockIcon} alt="" className="lock-icon"/>
                        <h1 className="p2_1 x45">{Text.p2_1}</h1> 
                        <br/>
                        <div className="p2-texts">
                            { this.state.lang === 'kr' ? <p className="p2_2_1_kr x25">{Text.p2_2}</p> : <p className="p2_2_1_en x25">{Text.p2_2}</p>}
                            {this.state.lang === 'kr'? <p className="p2_2_2_kr x25">{Text.p2_2_1}</p> : <p className="p2_2_2_en x25">{Text.p2_2_1}</p>}
                        </div>
                    </div>
                </div>              
                 <div className="full-bkgd center-texts p3-bkgd">  
                    <img className={`phone-img ${phonePosition}`} src={Phone} alt="" />
                    <div className="p3-texts">
                        <h1 class="x40">{Text.p3_1}</h1>
                        <div className={this.state.lang==='kr'?"p3-texts-p":"p3-texts-p-en"}><p className="x22">{Text.p3_2}</p></div>
                    </div>
                    <div className="lot-box">

                        <img src={Lot} className="lot" alt="" />
                        <div className="lot-texts">
                            <h1 className="x40">{Text.p3_3}</h1>
                            <div className="lot-texts-p"><p className="x22">{Text.p3_4}</p></div>
                        </div>
                    </div>
                 </div>

            </React.Fragment>
        );
    }
}

export default App;