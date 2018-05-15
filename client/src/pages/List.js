import React from 'react';
import Link from 'react-router-dom/Link';

class List extends React.Component {

  state = {
    entries: []
  };

  componentDidMount() {
    fetch('http://localhost:8080/entries/all', { method: 'GET' }).then((res) => res.json()).then(res => {
      this.setState({entries: res});
    });
  }

  renderEntries = () => (
    this.state.entries.map(entry => (
      <tr key={entry.id}>
        <td>{entry.id}</td>
        <td>{entry.firstname[0]}. {entry.lastname}</td>
        <td><Link to={`/entry/${entry.id}`}>Details</Link></td>
      </tr>
    ))
  );

  render () {
    return (
      <div>
        <table style={{width: '100%'}}>
          <thead>
            <tr>
              <th style={{textAlign: 'left'}}>#ID</th>
              <th style={{textAlign: 'left'}}>Name</th>
              <th style={{textAlign: 'left'}}>Actions</th>
            </tr>
          </thead>
          <tbody>
          { this.renderEntries() }
          </tbody>
        </table>
      </div>
    );
  }

}

export default List;
