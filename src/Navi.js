import React, { Component } from 'react';
import LogoBefore from 'images/checker-logo-t.svg';
import LogoAfter from 'images/checker-logo-b.png'
let naviScroll="before-height";
let logo=LogoBefore;
class Navi extends Component {
    state={
        scroll: 3,
        lang: this.props.lang
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
      }
    
    handleScroll = (e) => {
        this.setState({ scroll: window.pageYOffset });
        //console.log(this.state.scroll)
        if (this.state.scroll > window.innerHeight) {
            naviScroll="after-height";
            logo=LogoAfter;

        } else {
            naviScroll="before-height"
            logo=LogoBefore;
        }
    }
 

    render() {
        
        return (
            <div className={`navi ${naviScroll}`}>
                <div className="for-btm-line">
                    <img src={logo} alt="" />
                    <div className="lan-btns">
                        <div>
                            <button onClick={this.props.selectKr} className={'lan-btn '+(this.props.lang==='kr'?'la-active':'none')+' korean'}>
                                KR
                            </button>
                            <button onClick={this.props.selectEn} className={'lan-btn '+(this.props.lang==='en'?'la-active':'none')+ ' english'}>
                                EN
                            </button>    
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navi;