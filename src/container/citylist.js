import React,{Component} from 'react'
import {connect} from 'react-redux'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Datas from '../components/datacmp'


class Citylist extends Component{

    citydata(cityname){

        const datas = cityname.list.map(item => item.main.temp)
        const pressure = cityname.list.map(item => item.main.pressure)
        const Humidity = cityname.list.map(item => item.main.humidity)
       console.log(datas)
      return(     
            <tr key={cityname.city.name}><td >
                {cityname.city.name}
                </td>
                <td>
               <Datas datas={datas} colour="red" /></td>
              <td> <Datas datas={pressure} colour="blue" /></td>
               <td><Datas datas={Humidity} colour="pink" /></td>
               
                
                </tr>
        );
    }

    render(){


        return(
                <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temprature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                                    
                </tr>
                </thead>
                <tbody>
                    {this.props.item.map(this.citydata)}

                </tbody>

                </table>
        );
    }
}



function mapStateToProps({item}){
    return {item};
}


export default connect(mapStateToProps)(Citylist)