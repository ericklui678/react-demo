import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editPlayer } from '../actions/';
import { Link } from 'react-router-dom';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      region: ''
    }
  }

  componentDidMount() {
    console.log('edit did mount');
    console.log(this.props.match.params.id);
  }

  render() {
    console.log('props', this.props);
    return (
      <div>
        <h1>Edit</h1>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { players: state.players };
}

export default connect(mapStateToProps)(Edit);
