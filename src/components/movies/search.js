import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { searchMovie } from '../../actions/index';
import './search.css';

class Search extends React.Component{

  constructor(props){
    super(props);

    this.state={term:''}
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event){
    this.setState({term: event.target.value});
  }
  // event.preventDefault() tells the browser don't submit the form.
  onFormSubmit(event){
    event.preventDefault();
    this.props.searchMovie(this.state.term);
    this.setState({term:''});
  }
  render(){
    return(
      <div class='search'>
      <form onSubmit={this.onFormSubmit} className='input-group'>
      <input
      placeholder='Search title'
      className='form-control'
      value={this.state.term}
      onChange={this.onInputChange} />
      <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Search</button>
      </span>
      </form>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({searchMovie},dispatch);
}

// here null is because this container doesn't care about state for now
export default connect(null,mapDispatchToProps)(Search);
