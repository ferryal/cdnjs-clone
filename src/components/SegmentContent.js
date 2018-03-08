import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import FormSearch from './FormSearch'
import Lists from './Lists'
import axios from 'axios'

class SegmentContent extends Component {
  constructor(){
    super()
    this.state = {
      lists: []
    }
  }
  componentDidMount(){
    this.Search()
  }

  Search = (query = '') => {
    axios.get(`https://api.cdnjs.com/libraries?search=${query}&fields=version,description`)
    .then(data => {
      this.setState({lists: data.data.results})
      console.log(data);
    })
    .catch(err => {
      console.log('Error', err)
    })
  }

  render(){
    return(
      <div>
        <div>
          <FormSearch onSearch={this.Search}/>
        </div>
        <Lists data={this.state.lists}/>
      </div>
    )
  }



  // <div>
  //   {/* form input */}
  //   <FormSearch />
  // </div>
}

export default SegmentContent
