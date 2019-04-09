import React, { Component } from 'react';
import * as Text from 'textKorean';
import SlideToggle from 'react-slide-toggle';
import Open from 'images/open.png';
import Close from 'images/close.png';
//const eases = window.eases;
//const ToggleText = () => "Toggle";

class FaqItem extends Component {

    state = {
        opened: false,
    }

    handdleToggle = (e) => {
        this.state.opened = !this.state.opened
        if (this.state.opened === true) {
        }
    }

    render() {
        const obj = this.props.obj;
        
        return (
            <div className="faq-item-box">
        
                
                <SlideToggle
                    onExpanded={({ hasReversed }) => {
                        this.setState({opened:true})
                    }}
                    onCollapsed={({ hasReversed }) => {
                        this.setState({opened:false})
                    }}
                    duration={300}
                    collapsed
                    render={({ onToggle, setCollapsibleElement }) => (
                        <div className="my-collapsible">
                            <div className="question-and-button">
                                <div className="question-text">
                                    <span class="Q">Q{obj}.</span> {Text["p6_q"+String(obj)]}
                                </div>
                                <button className={`my-collapsible__toggle faq-btn-${obj}`} onClick={onToggle}>
                                    <img className="faq-rotate-btn" src={this.state.opened==true?Close:Open} alt="" />
                                </button>
                            </div>
                            <div className="my-collapsible__content" ref={setCollapsibleElement}>
                                <div className="my-collapsible__content-inner">
                                    <div className="answer">
                                        {Text["p6_a"+String(obj)]}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                />

            </div>
        );
    }
};

export default FaqItem;