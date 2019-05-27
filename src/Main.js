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
import icon3 from 'images/label4.svg';
import icon4 from 'images/phone.svg';
import ImageSlide from './ImageSlide';
import Lot from 'images/lot.gif';

const imgUrls = [1,2,3];
let languages = {
    en: require('textEnglish'),
    kr: require('textKorean')
}
let phonePosition;

class App extends Component {
    constructor (props) {
        super(props);
        this.selectEn = this.selectEn.bind(this);
        this.selectKr = this.selectKr.bind(this);
        this.state = {
            currentImageIndex: 1,
            lang: 'en'
        };
        this.nextSlide = this.nextSlide.bind(this);
    }

    nextSlide() {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        /* const elm = document.getElementById('root')
        .querySelector('[class^="pic"],[class*=" pic"]');
        elm.className = `pic${index+1}`
        const newone = elm.cloneNode(true);
        elm.parentNode.replaceChild(newone, elm);
*/
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
            }, 4000);
    }
    
    componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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

    render() {
       const Text=languages[this.languageSelect()];
        return (
            <React.Fragment>
                 <Navi selectEn={this.selectEn} selectKr={this.selectKr} lang={this.state.lang}/>               
                
                <ImageSlide url={imgUrls[this.state.currentImageIndex]} text={Text} className="full-bkgd tmptmp"/>                   
                
                <div className="full-bkgd white-text p2-bkgd">
                    <div className="p2-center-texts">
                    <img src={LockIcon} alt="" className="lock-icon"/>
                        <h1 className="p2_1 x45">{Text.p2_1}</h1> 
                        <br/>
                        <div className="p2-texts">
                            { this.state.lang === 'kr' ? <p className="p2_2_1_kr x25">{Text.p2_2}</p> : <p className="p2_2_1_en x25">{Text.p2_2}</p>}
                            {this.state.lang === 'kr'? <p className="p2_2_2_kr x25">{Text.p2_2_1}</p> : <p className="p2_2_2_en x25">{Text.p2_2_1}</p>}
                        </div>
                        <div className="white-vertical-line-1"></div>
                    </div>
                </div>              
                 <div className="full-bkgd center-texts p3-bkgd">  
                    <img className={`phone-img ${phonePosition}`} src={Phone} alt="" />
                    <div className="p3-texts">
                        <h1 className="x40">{Text.p3_1}</h1>
                        <div className={this.state.lang==='kr'?"p3-texts-p":"p3-texts-p-en"}><p className="x22">{Text.p3_2}</p></div>
                    </div>
                    <div className="black-vertical-line-1"></div>
                    <div className="lot-box">

                        <img src={Lot} className="lot" alt="" />
                        <div className="lot-texts">
                            <h1 className="x40">{Text.p3_3}</h1>
                            <div className="lot-texts-p"><p className="x22">{Text.p3_4}</p></div>
                        </div>
                        
                    </div>
                    <div className="black-vertical-line-2"></div>
                 </div>
                 { /*<P3 />*/}
                 <div className="p4-bkgd white-text">
                 <div className="white-vertical-line-2"></div>
                    <div className="center-texts p4-inner">
                        <h1 className="p4_1 x45">{Text.p4_1}</h1>
                        
                            <div className="p4-flow-box">
                                <div className="p4-flow-circles">
                                    <img className="p4-flow-icons" src={icon1} alt=""/>
                                    <pre><p className="x14">{Text.p4_flow_1}</p></pre>
                                </div>
                                <div className="p4-arrow">
                                    ▶
                                </div>
                                <div className="p4-flow-circles">
                                    <img className="p4-flow-icons" src={icon2} alt=""/>
                                    <pre><p className="x14">{Text.p4_flow_2}</p></pre>
                                </div>
                                <div className="p4-arrow">
                                    ▶
                                </div>
                                <div className="p4-flow-circles">
                                    <img className="p4-flow-icons" src={icon3} alt=""/>
                                    <pre><p className="x14">{Text.p4_flow_3}</p></pre>
                                </div>
                                <div className="p4-arrow">
                                    ▶
                                </div>
                                <div className="p4-flow-circles">
                                    <img className="p4-flow-icons" src={icon4} alt=""/>
                                    <pre><p className="x14">{Text.p4_flow_4}</p></pre>        
                                </div>
                            </div>
                            <div className="p4-on-flow-box">
                                <p className="p4_3 x20">{Text.p4_3}</p>
                            </div>
                       

                    </div>
                 </div>
                 <div className="full-bkgd p5-bkgd">
                    <img src={DevIcon} alt="" className="dev-icon"/>
                    <div className="p5-texts">
                        <div className="p5-texts-h1"><h1 className="x45">{Text.p5_1}</h1></div>
                        <div className="p5-texts-p"><p className="x22">{Text.p5_2}</p></div>
                    </div>
                    <div className="date-flow">                     
                        {[1,2,3,4,5,6].map(x=>{ return <div className="dates-both" key={x}><h6 className="date-flow-text x20"> {Text[`p5_date_${String(x)}`]} </h6>
                        <h6 className="date-contents-text x24"> {Text[`p5_flow_${String(x)}`]} </h6></div>}) }         
                    </div>
                 </div>
                 <div className="full-bkgd p6-bkgd">
                    <div className="faq-texts">
                        <h1 className="x40">{Text.p6_FAQ}</h1>
                        <p className="x20">{Text.p6_1}</p>
                    </div>
                    
                    <br/><br/>
                    <div className="Faq-box">
                        <FaqList text={Text}/>
                    </div>
                    
                 </div>
                 <div className="footer">
                    <div className="footer-inner">
                        <div className="footer-left-texts">
                            <h5 className="x12">{Text.footer_mail}</h5>
                            <h5 className="x12">{Text.footer_addr}</h5>
                            <br/>
                            <h5 className="hchecker-com x12">{Text.footer_domain}</h5>
                        </div>
                        {/* 
                        <div className="footer-images">
                            <img className="footer-checker-img" src={FooterLogoA} alt="" />
                            <img className="footer-hyundai-img" src={FooterLogoB} alt="" />
                        </div>
                        */}
                    </div>
                 </div>
            </React.Fragment>
        );
    }
}

export default App;