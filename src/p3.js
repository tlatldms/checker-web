import React, { Component } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Label from 'images/label.png';
class p3 extends Component {

    state={
        images: [
          { id: 1, src: Label },
          { id: 2, src: Label },
          { id: 3, src: Label },
          { id: 4, src: Label },

        ]
      }
    render() {
        const styles = {
            normalSection: {
              background: '#282c34',
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            },
            pinContainer: {
              width: '70vh',
              height: '70vh',
              borderRadius: '100%',
              margin: '0 auto',
              overflow: 'hidden',
              backgroundColor: 'black',
              
            },
            slideOuter: {
                
                backgroundColor: 'pink',
                width: '70vh',
                height: '70vh',
                
            },
            slideContainer: {
              
              display: 'flex',
              width: '200%',
              
              paddingTop:'30vh'

            },
            panel: {
            height: '30%',
              padding: '10px'
            },
            img: {
              width: '100%'
            },
            forMargins: {
                marginTop:'20vh'
            }
          };

      return (

        <Controller className="control-control">
          <Scene triggerHook="onLeave" duration={2000} pin>
            {progress => (
                <div>
                
              <div className="pin-container" style={styles.pinContainer}>
              
                <Timeline totalProgress={progress} paused >
                  <Tween from={{ x: '0%' }} to={{ x: '-50%' }} >
                  <div className="slide-outer" >
                    <div
                      className="slide-container"
                      style={{
                        ...styles.slideContainer
                      }}
                    >
                      {this.state.images.map(image => (
                        <div className="panel" style={styles.panel} key={image.id}>
                          <img src={image.src} style={styles.img} alt="something" />
                        </div>
                      ))}
                    </div>
                    </div>
                  </Tween>
                </Timeline>

              </div>
            </div>
            )}
          </Scene>
        </Controller>
      );
    };
}

export default p3;