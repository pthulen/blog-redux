import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';

import UserHeader from './UserHeader';
import Photo from './Photo';

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
        
    }

    renderList() {
        return this.props.posts.map(post => {
            
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                        <Photo url={this.props.photos[0][post.id].url}/>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { photos: state.photos, posts: state.posts };
}
export default connect(mapStateToProps, { fetchPostsAndUsers: fetchPostsAndUsers })(PostList);