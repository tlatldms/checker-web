import React, { Component } from 'react';
import Logo from 'checker-logo.svg';
let naviScroll="before-height"
class Navi extends Component {
    state={
        scroll: 3,
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
            naviScroll="after-height"
        } else {
            naviScroll="before-height"
        }
    }
    
    render() {
        
        return (
            <div className={`navi ${naviScroll}`}>
                <img src={Logo} alt="" />
                <div class="lan-btns">
                    <div>
                        <button onClick={this.listenScroll} class="korean">
                        KR
                        </button>
                        <button class="english">
                        EN
                        </button>    
                    </div> 
                </div>
            </div>
        );
    }
}

export default Navi;