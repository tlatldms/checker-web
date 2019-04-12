import React, { Component } from 'react';
import Item from 'FaqItem';

class FaqList extends Component {
    
    render() {
        const datas = [1,2,3,4,5,6,7,8].map(
            (data, index) => 
                (
                    <Item
                        key={index}
                        obj={data}
                        text={this.props.text}
                    />
                )
          );

          return (
            <div>
                <div >
                    {datas}
                </div>
             
            </div>
        );
    }
}

export default FaqList;