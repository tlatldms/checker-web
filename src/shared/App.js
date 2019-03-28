import React, { Component } from 'react';
import * as Text from 'textKorean';
import p1_back from 'aa.jpg';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="full-bkgd white-text">
                    <p class="p1_1">{Text.p1_1}</p>
                    <br/><br/><br/>
                    <h1 class="p1_2">{Text.p1_2}</h1>
                    <h1 class="p1_2_1">{Text.p1_2_1}</h1>
                    <br/>
                    <p class="p1_3">{Text.p1_3}</p>
                 </div>
                 <div class="full-bkgd white-text">
                    <div class="center-texts">
                        <h1 class="p2_1">{Text.p2_1}</h1> 
                        <br/>
                        <pre><p class="p2_2">{Text.p2_2}</p></pre>
                    </div>
                 </div>
                 <div class="p3_bkgd">
                        dfsdf
                 </div>
                 <div class="p4_bkgd white-text">
                    <div class="center-texts">
                        <h1 class="p4_1">{Text.p4_1}</h1>
                        <br/>
                        <pre><p class="p4_2">{Text.p4_2}</p></pre>
                    </div>
                 </div>
                 <div class="full-bkfd p5_bkgd">
                 sdf
                 </div>
                 <div class="faq_bkgd">
                    FAQ
                 </div>
            </React.Fragment>
        );
    }
}

export default App;