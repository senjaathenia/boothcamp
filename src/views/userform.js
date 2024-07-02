import React, { Component } from 'react';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      notelp: ''
    };
  }

  // Fungsi untuk menangani perubahan input
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  // Fungsi untuk menangani submit form
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, notelp } = this.state;
    alert(`Data yang Anda Masukkan:\nNama: ${name}\nEmail: ${email}\nNomor Telepon: ${notelp}`);
  }

  render() {
    const { name, email, notelp } = this.state;

    return (
      <div>
        <h1 class = "input">User Input Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Nama:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Nama"
              required
              onChange={this.handleChange}
              value={name}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              required
              onChange={this.handleChange}
              value={email}
            />
          </div>
          <div>
            <label>Nomor Telepon:</label>
            <input
              type="text"
              name="notelp"
              className="form-control"
              placeholder="No Telp"
              required
              onChange={this.handleChange}
              value={notelp}
            />
          </div>
          <br></br>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default UserForm;
