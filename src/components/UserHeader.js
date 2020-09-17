import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {

    render() {
        //deconstruct user off the users prop
        const { user } =this.props;
        if(!user) {
            return null;
        }
        
        return (
            <div className="header">
                {user.name}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) }
}
export default connect(mapStateToProps)(UserHeader);