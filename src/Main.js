import React, { Component } from 'react';
import Logo from 'images/checker-logo.svg';
import FaqList from 'FaqList';
import Navi from 'Navi';
import LabelImg from 'images/label.png';
import Phone from 'images/sp.png';
import BackgroundSlideshow from 'react-background-slideshow'
import image1 from 'images/aa.jpg';
import FooterLogoA from 'images/checker-logo-footer.svg';
import FooterLogoB from 'images/hyundai-logo.png';

import A from 'images/aa.jpg';
import B from 'images/label.png';
import C from 'images/sp.png';

import icon1 from 'images/pc.svg';
import icon2 from 'images/printer.svg';
import icon3 from 'images/label3.png';
import icon4 from 'images/phone.svg';

import Lot from 'images/lot.gif';
const imgUrls = [
    1,2,3
];

let languages = {
    en: require('textEnglish'),
    kr: require('textKorean')
}

let phonePosition;



const slideImages = [
    'images/sp.png',
    'images/sp.png',
    'images/sp.png'
];
   
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
  }

  class ImageSlide extends Component {
              
    languageSelect=()=> {
        if (this.props.lang === 'kr') {
            return 'kr';
        } else {
            return 'en';
        }
    }   
    render() {
        const { url, curidx, lang } = this.props;
        const Text=languages[this.languageSelect()];
        return (
                
            <div className="test-transition">
                <div className={`test-bkgd pic${url} white-text`}>

                <p className="p1_1">{Text.p1_1}</p>
                    <br/><br/><br/>
                    <h1 className="p1_2">{Text.p1_2}</h1>
                    <h1 className="p1_2_1">{Text.p1_2_1}</h1>
                    <br/>
                    <p className="p1_3">{Text["p1_3_"+String(url)]}</p>
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

    state={
        scroll: 3,
        lang: 'kr'
    }

    nextSlide() {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

        
    languageSelect=()=> {
        if (this.state.lang === 'kr') {
            return 'kr';
        } else {
            return 'en';
        }
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
            //autoPlay some for specific period of times or
            // Do some stuff you want
            this.nextSlide();
            }, 3000);
        
        /* 
        this.handleDivScroll()
        this.sudalMachine = document.getElementById("sudalMachine")
        this.sudalMachineYPos = this.sudalMachine.offsetTop
        this.sudalMachineScrollMaxSize = this.sudalMachine.scrollWidth
        */
    
    }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
        clearInterval(this.interval);
        
        //this.handleDivScroll();
      }
    listenScroll = (e) => {
        this.setState({ scroll: window.pageYOffset });
    }
    
    handleScroll = (e) => {
        this.setState({ scroll: window.pageYOffset });
        let curScroll = this.state.scroll
        
        if (curScroll < (window.innerHeight)+60) {
            phonePosition="po1"
        } else {
            phonePosition="po2"
        }


    }
    lockScroll = (e) => {
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

            
                <Navi selectEn={this.selectEn} selectKr={this.selectKr} lang={this.state.lang}/>
                
                
                <ImageSlide url={imgUrls[this.state.currentImageIndex]} lang={this.state.lang} className="full-bkgd tmptmp"/>
                 
                 {/*<BackgroundSlideshow images={[ image1, image1, image1 ]} animationDelay={5000} className="back-slide"/>  */}
                 {/*
                <div className="full-bkgd white-text">
                    <p className="p1_1">{Text.p1_1}</p>
                    <br/><br/><br/>
                    <h1 className="p1_2">{Text.p1_2}</h1>
                    <h1 className="p1_2_1">{Text.p1_2_1}</h1>
                    <br/>
                    <p className="p1_3">{Text.p1_3}</p>
                </div>
                */}
                
                
                <div className="full-bkgd white-text p2-bkgd">
                    <div className="center-texts">
                        <h1 className="p2_1">{Text.p2_1}</h1> 
                        <br/>
                        <pre><p className="p2_2">{Text.p2_2}</p></pre>
                    </div>
                </div>
                 
                 <div className="white_bkgd center-texts p3_bkgd">  
                    <img className={`phone-img ${phonePosition}`} src={Phone} alt="" /> 
                    <h1>{Text.p3_1}</h1>
                    <pre><p>{Text.p3_2}</p></pre>
                    <div className="lot-box">
                        <img src={Lot} className="lot" alt="" />
                        <div className="lot-texts">
                            <h1>{Text.p3_3}</h1>
                            <pre><p>{Text.p3_4}</p></pre>
                        </div>
                    </div>
                    {/* 
                    <div className="p4-out" >
                    
                        <div className="p4-inside">
                            <div className="labels-box" id="sudalMachine" >
                                
                                <img className="labels" src={LabelImg} alt="" />
                                <img className="labels" src={LabelImg} alt="" />
                                <img className="labels" src={LabelImg} alt="" />
                                <img className="labels" src={LabelImg} alt="" />                              
                            </div>
                            <div className="labels-texts">
                                <h1>{Text.p3_3}</h1>
                                <pre><p>{Text.p3_4}</p></pre>
                            </div>
                        </div>
                    </div>

                    */}
                 </div>
                 <div className="p4_bkgd white-text">
                    <div className="center-texts">
                        <h1 className="p4_1">{Text.p4_1}</h1>
                        <br/>
                        <pre><p className="p4_2">{Text.p4_2}</p></pre>
                        <div class="for-b">
                            <div className="p4-flow-box">
                                <div className="p4-flow-circles">
                                    <img className="p4-flow-icons" src={icon1} alt=""/>
                                    <pre><p>{Text.p4_flow_1}</p></pre>
                                </div>
                                <div className="p4-flow-circles">
                                    <img className="p4-flow-icons" src={icon2} alt=""/>
                                    <pre><p>{Text.p4_flow_2}</p></pre>
                                </div>
                                <div className="p4-flow-circles">
                                    <img className="p4-flow-icons" src={icon3} alt=""/>
                                    <pre><p>{Text.p4_flow_3}</p></pre>
                                </div>
                                <div className="p4-flow-circles">
                                    <img className="p4-flow-icons" src={icon4} alt=""/>
                                    <pre><p>{Text.p4_flow_4}</p></pre>        
                                </div>
                            </div>
                            <div className="p4-on-flow-box">
                                <h6>{Text.p4_3}</h6>
                            </div>
                        </div>

                    </div>
                 </div>
                 <div className="full-bkfd p5_bkgd p5-bkgd">
                    <div className="p5-texts">
                        <pre><h1>{Text.p5_1}</h1></pre>
                        <pre><p>{Text.p5_2}</p></pre>
                    </div>
                    <div className="date-flow">
                        <div className="dates">
                            {[1,2,3,4,5].map(x=>{ return <p className="date-flow-text"> {Text[`p5_date_${String(x)}`]} </p> }) }
                        </div>
                        <div className="flow-pic">
                        <hr />
                        </div>
                        <div className="date-contents">
                            {[1,2,3,4,5].map(x=>{ return <p className="date-contents-text"> {Text[`p5_flow_${String(x)}`]} </p> }) }
                        </div>
                    </div>
                 </div>
                 <div className="white_bkgd">
                    {this.listenScroll}
                    <div className="faq-texts">
                        <h1>{Text.p6_FAQ}</h1>
                        <p>{Text.p6_1}</p>
                    </div>
                    
                    <br/><br/>
                    <div className="Faq-box">
                        <FaqList />
                    </div>
                    
                 </div>
                 <div className="footer">
                    <div className="footer-left-texts">
                        <h5>{Text.footer_mail}</h5>
                        <h5>{Text.footer_addr}</h5>
                        <br/>
                        <h5 className="hchecker-com">{Text.footer_domain}</h5>
                    </div>
                    <div className="footer-images">
                        <img className="footer-checker-img" src={FooterLogoA} alt="" />
                        <img className="footer-hyundai-img" src={FooterLogoB} alt="" />
                    </div>
                 </div>
            </React.Fragment>
        );
    }
}

export default App;