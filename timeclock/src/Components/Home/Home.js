import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Home extends Component{
    constructor(){
        super()
        this.state={
            punches:[]
        }
    }

    //GET /api/punches
    componentDidMount(){
        axios.get(`/api/punches`)
             .then((res)=>{
                 console.log(res.data)
                 this.setState({punches: res.data})
             })
    }

    //DELETE /api/punch/:id

    render(){
        let displayPunches = this.state.punches.map((punch,i)=>{
            return(
                <div className='display-punches'>
                    <h3>{punch.punch_type}</h3>
                    <h3>Date: {punch.date_punch}</h3>
                    <h3>Day: {punch.days}</h3>
                    <h3>Time: {punch.hours}:{punch.minutes} {punch.am_pm}</h3>
                    <Link to='/edit'><button className='edit-punch-home'>Edit</button></Link>
                    <button className='delete-punch-home'>Delete</button>
                </div>
            )
        })
        return(
        <div className='home-parent'>
            <h1>My Punches</h1>
            {displayPunches}
            <Link className='link-to-new-button' to='/new'><button>New Punch</button></Link>
        </div>
        )
    }
}