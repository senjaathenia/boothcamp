import React, { Component } from "react";
import { faker } from '@faker-js/faker';  // Import faker library
import { comments } from './commentData';  // Import comments data dari commentData.js

class CommentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,              // State untuk menyimpan jumlah likes
      time: new Date()       // State untuk menyimpan waktu saat ini
    };
  }
  
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date()   // Update waktu setiap detik
    });
  }

  handleLike = () => {
    this.setState((prevState) => ({
      likes: prevState.likes + 1   // Menambah jumlah likes setiap kali tombol "Click me" diklik
    }));
  };

  render() {
    const { author, date, text, avatar } = this.props;   // Mendestructure props yang diterima dari commentData
    const { likes, time } = this.state;   // Mendestructure state

    return (
      <div className="comment">
        <a className="avatar">
          <img src={avatar} alt="avatar" />
        </a>
        <div className="content">
          <a className="author">{author}</a>
          <div className="metadata">
            <span className="date">{time.toLocaleTimeString()}</span>   {/* Menampilkan waktu dalam format waktu lokal */}
          </div>
          <span className="likes-count">| Likes : {likes} </span>   {/* Menampilkan jumlah likes */}
          <div className="text">{text}</div>   {/* Menampilkan teks komentar */}
          <div className="actions">
            <div className="actions">
              <button className="like-button" onClick={this.handleLike}>Click me</button>   {/* Tombol untuk menambah likes */}
            </div>
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
        {/* Mapping untuk setiap objek komentar dari array comments */}
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
