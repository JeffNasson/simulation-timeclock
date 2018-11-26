import React,{Component} from 'react';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';

export default class NewPunch extends Component{
    constructor(){
        super()
        this.state={
            punchType:'In',
            punchDay:'Monday',
            punchHr:0,
            punchMin:0,
            punchDate:'',
            am_pm:'AM'
        }
        this.newPunch=this.newPunch.bind(this)
        this.newPunchType=this.newPunchType.bind(this)
        this.newPunchDay=this.newPunchDay.bind(this)
        this.newPunchHr=this.newPunchHr.bind(this)
        this.newPunchMin=this.newPunchMin.bind(this)
        this.newPunchDate=this.newPunchDate.bind(this)
        this.newAMPM=this.newAMPM.bind(this)
    }

    //POST /api/punch
    //on click the POST request will send the info to the backend, the Create Punch button will route to the Home page
    newPunch(){
        axios.post(`/api/punch`,this.state)
             .then(
                 window.location.assign('/')
             )
    }

    newPunchType(val){
        this.setState({punchType:val})
    }
    newPunchDay(val){
        this.setState({punchDay:val})
    }
    newPunchHr(val){
        this.setState({punchHr:val})
    }
    newPunchMin(val){
        this.setState({punchMin:val})
    }
    newPunchDate(val){
        this.setState({punchDate:val})
    }
    newAMPM(val){
        this.setState({am_pm:val})
    }
    

    render(){
        console.log(this.state)
        return(
            <div className='newpunch-parent'>
                <h1>New Punch</h1>
                <div className='newpunch-child'>
                    <div className='date-and-day'>
                        <div className='newpunch-date'><h2>Date:</h2><input type='text' placeholder='mm/dd/yyyy' value={this.state.punchDate} onChange={(event)=>{this.newPunchDate(event.target.value)}} /> </div>
                        <div className='newpunch-select-day'>
                            <h2>Day:</h2>
                            <select onChange={(event)=>{this.newPunchDay(event.target.value)}} value={this.state.punchDay} >
                                <option>Monday</option>
                                <option>Tuesday</option>
                                <option>Wednesday</option>
                                <option>Thursday</option>
                                <option>Friday</option>
                                <option>Saturday</option>
                                <option>Sunday</option>
                            </select>
                        </div>
                    </div>
                    <div className='punch-time'>
                        <div className='newpunch-time-select'>
                            <h2>Time:</h2>
                            <div className='newpunch-time-hours-minutes'>

                            <h4>HR:  <input type='number' min='1' max='12' value={this.state.punchHr} onChange={(event)=>{this.newPunchHr(event.target.value)}} />
                            </h4>
                            <h4>Min: <input type='number' min='0' max='59' value={this.state.punchMin} onChange={(event)=>{this.newPunchMin(event.target.value)}} /></h4>
                            <h4><select value={this.state.am_pm} onChange={(event)=>{this.newAMPM(event.target.value)}}>
                                <option>AM</option>
                                <option>PM</option>
                            </select></h4>
                            
                            
                            </div>
                        </div>
                        <div className='newpunch-time-punchtype'>
                            <h2>Punch Type:</h2>
                            <select value={this.state.punchType} onChange={(event)=>this.newPunchType(event.target.value)}>
                                <option>In</option>
                                <option>Out</option>
                            </select>
                        </div>
                    </div>
                        <div className='newpunch-buttons'>
                            <button className='newpunch-create-button' onClick={this.newPunch}>Create Punch</button>
                            <Link to='/'><button className='newpunch-cancel-button' >Cancel</button></Link>
                        </div>
            </div>
        </div>
        )
    }
}