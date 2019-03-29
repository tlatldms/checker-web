import React, { Component } from 'react';
import * as Text from 'textKorean';
//{ Text.p6_q`${String(obj)}` }
import SlideToggle from 'react-slide-toggle';

const eases = window.eases;

const ToggleText = () => "Toggle";

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
                {console.log(obj)}
                
                <SlideToggle
                    duration={1000}
                    collapsed
                    render={({ onToggle, setCollapsibleElement }) => (
                        <div className="my-collapsible">
                            <div className="question-and-button">
                                <div className="question-text">
                                    {Text["p6_q"+String(obj)]}
                                </div>
                                <button className="my-collapsible__toggle" onClick={onToggle}>
                                ▽
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