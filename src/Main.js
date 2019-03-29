import React, { Component } from 'react';
import * as Text from 'textKorean';
import Logo from 'checker-logo.svg';
import FaqList from 'FaqList';
import Navi from 'Navi';
import { timingSafeEqual } from 'crypto';
class App extends Component {
    state={
        scroll: 3,
    }

    listenScroll = (e) => {
        this.setState({ scroll: window.pageYOffset });
    }
    render() {
       
        return (
            <React.Fragment>
                <Navi />
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
                 </div>
                 <div className="p4_bkgd white-text">
                    <div className="center-texts">
                        <h1 className="p4_1">{Text.p4_1}</h1>
                        <br/>
                        <pre><p className="p4_2">{Text.p4_2}</p></pre>
                    </div>
                 </div>
                 <div className="full-bkfd p5_bkgd">
                 sdf
                 </div>
                 <div className="white_bkgd">
                    {this.listenScroll}
                    {console.log(this.state.scroll+"df")}
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