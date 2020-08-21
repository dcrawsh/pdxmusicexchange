import React, { Component } from 'react'





export default class Comment extends Component {

    handleOnClick() {
        this.props.deleteComment(this.props.comment)
        this.props.fetchPosts()
    }

    // refreshPage() {
    //     window.location.reload(false);
    //   }


    render() {
        console.log(this.props.comment)
        return (
            <div>
                {this.props.comment.content}
                <button onClick={() => this.handleOnClick()}> X </button>
                {/* <CommentInput postId={this.props.comment.post_id} postComment={this.props.postComment}/> */}
            </div>
        )
    }
}
