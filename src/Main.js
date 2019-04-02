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

import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

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

    }

    state={
        scroll: 3,
        lang: "kr"
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
        window.addEventListener('scroll', this.handleScroll, { passive: true })
        this.handleDivScroll();
    }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
        this.handleDivScroll();
      }
    listenScroll = (e) => {
        this.setState({ scroll: window.pageYOffset });
    }
    
    handleScroll = (e) => {
        this.setState({ scroll: window.pageYOffset });
        
        if (this.state.scroll < (window.innerHeight)) {
            phonePosition="po1"
        } else if (this.state.scroll < (window.innerHeight)+15) {
            phonePosition="po2"
        } else if (this.state.scroll < (window.innerHeight)+30) {
            phonePosition="po3"
        } else if (this.state.scroll < (window.innerHeight)+45) {
            phonePosition="po4"
        } else if (this.state.scroll < (window.innerHeight)+60) {
            phonePosition="po5"
        } else if (this.state.scroll < (window.innerHeight)+75) {
            phonePosition="po6"
        } else if (this.state.scroll < (window.innerHeight)+90) {
            phonePosition="po7"
        } else if (this.state.scroll < (window.innerHeight)+105) {
            phonePosition="po8"
        } else if (this.state.scroll < (window.innerHeight)+120) {
            phonePosition="po9"
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
                {this.handleScroll}
                
                        <div className="full-bkgd white-text">
                        <BackgroundSlideshow images={[ image1, image1, image1 ]} animationDelay={5000} className="back-slide"/>
                            <p className="p1_1">{Text.p1_1}</p>
                            <br/><br/><br/>
                            <h1 className="p1_2">{Text.p1_2}</h1>
                            <h1 className="p1_2_1">{Text.p1_2_1}</h1>
                            <br/>
                            <p className="p1_3">{Text.p1_3}</p>
                        </div>
                
                    <div className="full-bkgd white-text">
                        <div className="center-texts">
                            <h1 className="p2_1">{Text.p2_1}</h1> 
                            <br/>
                            <pre><p className="p2_2">{Text.p2_2}</p></pre>
                        </div>
                    </div>
                 
                 <div className="white_bkgd center-texts pg2">  
                    <img className={`phone-img ${phonePosition}`} src={Phone} alt="" /> 
                    <h1>{Text.p3_1}</h1>
                    <pre><p>{Text.p3_2}</p></pre>
                    <div className="out" >
                    {console.log(document.getElementsByClassName("labels-box"))}
                    <div className="labels-box">
                            {this.handleDivScroll}
                            <img className="labels" src={LabelImg} alt="" />
                            <img className="labels" src={LabelImg} alt="" />
                            <img className="labels" src={LabelImg} alt="" />
                            <img className="labels" src={LabelImg} alt="" />                              
                        </div>
                    </div>
                 </div>
                 <div className="p4_bkgd white-text">
                    <div className="center-texts">
                        <h1 className="p4_1">{Text.p4_1}</h1>
                        <br/>
                        <pre><p className="p4_2">{Text.p4_2}</p></pre>
                    </div>
                 </div>
                 <div className="full-bkfd p5_bkgd">
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
                   
                    <h1>{Text.p6_FAQ}</h1>
                    <p>{Text.p6_1}</p>
                    <br/>
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