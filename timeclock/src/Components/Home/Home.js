import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Home extends Component{
    constructor(){
        super()
        this.state={
            punches:[],
        }
        this.deletePunch=this.deletePunch.bind(this);
        this.editPunch=this.editPunch.bind(this);
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
    deletePunch(id){
        axios.delete(`/api/punch/${id}`)
             .then((res)=>{
                 this.setState({punches:res.data})
             })
    }


    editPunch(id){
        axios.get(`/api/punch/${id}`)
             .then((res)=>{console.log(res)
                 this.setState({punches:res.data})
             })
    }

    

    render(){
        let displayPunches = this.state.punches.map((punch,i)=>{
            return(
                <div className='display-punches' key={i}>
                    <h3>{punch.punch_type}</h3>
                    <h3>Date:</h3><h4>{punch.date_punch}</h4>
                    <h3>Day:</h3><h4>{punch.days}</h4>
                    <h3>Time:</h3><h4>{punch.hours}:{punch.minutes} {punch.am_pm}</h4>
                    <Link to={`/edit/${punch.id}`}><button className='edit-punch-home'>Edit</button></Link>
                    <button className='delete-punch-home' onClick={()=>this.deletePunch(punch.id)} >Delete</button>
                </div>
            )
        })
        return( 
        <div className='home-parent'>
            <h1>My Punches</h1>
            {displayPunches}
            <Link to='/new'><button className='link-to-new-button'>New Punch</button></Link>
        </div>
        )
    }
}