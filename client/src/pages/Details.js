import React from 'react';
import Link from 'react-router-dom/Link';

class Details extends React.Component {

  state = {
    entry: null
  };

  componentDidMount() {
    fetch(`http://localhost:8080/entry/${this.props.match.params.id}`, { method: 'GET' }).then((res) => res.json()).then(res => {
      this.setState({entry: res});
    });
  }

  render () {

    if (!this.state.entry) {
      return <div>Loading</div>
    }

    const { entry } = this.state;

    return (
      <div>
        <h1>{entry.firstname} {entry.lastname}</h1>
        <div>Id: #{entry.id}</div>
        <div>Email: {entry.email}</div>
        <div>Phone: {entry.phone}</div>
      </div>
    );
  }

}

export default Details;