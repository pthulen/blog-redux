import React, { Component } from 'react';

class Photo extends Component {
    render() {
        return (
                <div  className="container photobox">
                    <img style={{"height" : "100px", "width" : "100px"}} alt="placeholder imagine" className="circle responsive-img" src={this.props.url} />
                </div>
        );
    }
}

export default Photo;