import React,{Component} from'react';
import {connect} from 'react-redux';
import  {bindActionCreators} from 'redux';
import { getData} from '../actions/index'


class Search extends Component {
    constructor(props){
        super(props);
        this.state = {term:''};
        this.onchanges = this.onchanges.bind(this);
        this.onsumbit = this.onsumbit.bind(this);
        

    }

        onchanges(event){
           // console.log(event.target.value)
            this.setState({term:event.target.value});
        }
        onsumbit(event){
            event.preventDefault();
            this.props.getData(this.state.term);
            this.setState({term:' '})
        }

    render(){

        return(

            <form onSubmit={this.onsumbit}  className="input-group">
                <input className="form-control"
                placeholder="eneter city name to see climate"
                value={this.state.term}
                onChange = {this.onchanges}
               />
                <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Search</button>
                </span>
                </form>


        );
    }
}

function mapDispatchToProps(dispatch){

     return bindActionCreators( {getData},dispatch);
}


 
export default connect(null,mapDispatchToProps)(Search)