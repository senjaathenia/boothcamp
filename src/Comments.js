import React, { Component } from "react";
import { faker } from '@faker-js/faker';
import { comments } from './commentData';

class CommentComponent extends Component {
  render() {
    const { author, date, text, avatar } = this.props;

    return (
      <div className="comment">
        <a className="avatar">
          <img src={avatar || faker.image.avatar()} alt="avatar" />
        </a>
        <div className="content">
          <a className="author">{author}</a>
          <div className="metadata">
            <span className="date">{date}</span>
          </div>
          <div className="text">{text}</div>
          <div className="actions">
            <a className="reply">Reply</a>
          </div>
        </div>
      </div>
    );
  }
}

class Comment extends Component {
  render() {
    return (
      <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>
        {comments.map((comment, index) => (
          <CommentComponent key={index} {...comment} />
        ))}
        <form className="ui reply form">
          <div className="field">
            <textarea></textarea>
          </div>
          <div className="ui blue labeled submit icon button">
            <i className="icon edit"></i> Add Reply
          </div>
        </form>
      </div>
    );
  }
}

export default Comment;
