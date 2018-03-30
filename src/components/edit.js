import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editPlayer } from '../actions/';
import { Link } from 'react-router-dom';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      region: '',
      playerIdx: ''
    }
  }
  componentDidMount() {
    const player = this.props.players.filter(player => {
      return player.id === this.props.match.params.id;
    })[0];

    const { name, regions } = player;

    let regionStr;
    regions.length > 1 ? regionStr = regions.join(',') : regionStr = regions[0];

    this.setState({
      name: player.name,
      region: regionStr,
      playerIdx: this.props.players.indexOf(player)
    })
  }

  onNameChange(name) {
    this.setState({ name });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Edit Player</h1>
        {/* <h3>{this.state.name}</h3>
        <h3>{this.state.region}</h3> */}
        <form>
          <div className='form-group'>
            <label htmlFor='playerName'>Player Name</label>
            <input
              onChange={e => this.onNameChange(e.target.value)}
              className="form-control"
              id='playerName'
              value={this.state.name}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='playerRegion'>Player Region</label>
            <input
              onChange={e => this.onRegionChange(e.target.value)}
              className="form-control"
              id='playerRegion'
              value={this.state.region}
            />
          </div>
          <button type='submit' className='btn btn-primary'>Submit</button>
          <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { players: state.players };
}

export default connect(mapStateToProps)(Edit);
