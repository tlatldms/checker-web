import React, { Component } from 'react';
import * as Text from 'textKorean';
import Logo from 'checker-logo.svg';
import FaqList from 'FaqList';
import Navi from 'Navi';
import LabelImg from 'label.png';


class App extends Component {
    constructor () {
        super();
    }

    state={
        scroll: 3,
        lang: "kr"
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
    }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
      }
    listenScroll = (e) => {
        this.setState({ scroll: window.pageYOffset });
    }
    
    handleScroll = (e) => {
        this.setState({ scroll: window.pageYOffset });
        
        if (this.state.scroll > (window.innerHeight)*2) {
            console.log("Ddddddddd");
        } 
        
    }
    lockScroll = (e) => {

    }
    render() {
       
        return (
            <React.Fragment>
                <Navi />
                {this.handleScroll}
                <div className="full-bkgd white-text">
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
                 <div className="white_bkgd center-texts">
                        <h1>{Text.p3_1}</h1>
                        <pre><p>{Text.p3_2}</p></pre>
                        <div className="out" >
                            <div className="labels-box">
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
                            {[1,2,3,4,5].map(x=>{ return <p> {Text[`p5_date_${String(x)}`]} </p> }) }
                        </div>
                        <div className="flow-pic">
                        <hr />
                        </div>
                        <div className="date-contents">
                            {[1,2,3,4,5].map(x=>{ return <p> {Text[`p5_flow_${String(x)}`]} </p> }) }
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
                        <h5>{Text.footer_domain}</h5>
                    </div>
                    <div className="footer-images">
                        <img src={Logo} alt="" />
                        <img src={Logo} alt="" />
                    </div>
                 </div>
            </React.Fragment>
        );
    }
}

export default App;