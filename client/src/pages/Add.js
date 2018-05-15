import React from 'react';

class Add extends React.Component {

  onSubmit = (e) => {
    e.preventDefault();

    const fields = {
      firstname: this.firstname.value,
      lastname: this.lastname.value,
      email: this.email.value,
      phone: this.phone.value
    };

    fetch(`http://localhost:8080/entry`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(fields)
      })
      .then((res) => res.json()).then(res => {
        alert(res.msg);
    });

  };

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <input required type="text" placeholder="firstname" ref={node => this.firstname = node}/>
        </div>
        <div>
          <input required type="text" placeholder="lastname" ref={node => this.lastname = node}/>
        </div>
        <div>
          <input required type="email" placeholder="email" ref={node => this.email = node}/>
        </div>
        <div>
          <input required type="text" placeholder="phone" ref={node => this.phone = node}/>
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    );
  }

}

export default Add;
