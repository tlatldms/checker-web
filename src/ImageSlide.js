import React, { Component } from 'react';

class ImageSlide extends Component {
    constructor(props) {
        super(props);
        this.state={
            url: this.props.url
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if (nextProps.lang !== prevState.lang | nextProps.url !== prevState.url ) {
            return  {lang : nextProps.lang, url: nextProps.url} ;
        } else return null;
    }

    render() {
        const Text=this.props.text;
        return (           
            <div className="test-transition">
                
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
                                <p className="p1_3 x28">{Text[`p1_3_${(this.state.url+1)%3+1}`]}</p>   
                            </div>
                            <div className="white-vertical-line-0"></div>
                        </div>
                    </div>
                </div>
            </div>      
        );
    }   
}

export default ImageSlide;

