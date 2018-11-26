import React,{Component} from 'react';
import axios from 'axios';

export default class EditPunch extends Component{
    constructor(){
        super()
        this.state={
            date_punch:'',
            days:'',
            hours:0,
            minutes:0,
            am_pm:'',
            punch_type:''
        }
        this.putPunch=this.putPunch.bind(this);
        this.updateDate=this.updateDate.bind(this);
        this.updateDays=this.updateDays.bind(this);
        this.updateHours=this.updateHours.bind(this);
        this.updateMinutes=this.updateMinutes.bind(this);
        this.updateAm=this.updateAm.bind(this);
        this.refreshPage=this.refreshPage.bind(this)
    }

    //GET /api/punch/:id
    componentDidMount(){
        const punchId = this.props.match.params.id
        console.log(punchId)
        axios.get(`/api/punch/${punchId}`)
             .then(res=>{
                //  console.log(this.state.punch)
                 let punch = res.data[0];
                 this.setState({
                    date_punch:punch.date_punch,
                    days:punch.days,
                    hours:punch.hours,
                    minutes:punch.minutes,
                    am_pm:punch.am_pm,
                    punch_type:punch.punch_type
                 })
                //  console.log(this.state.punch)
             })
    }
    //PUT /api/punch/:id
    putPunch(){
        const punchId = this.props.match.params.id
        axios.put(`/api/punch/${punchId}`,this.state)
             .then((res)=>{
                 let punch = res.data[0];
                 console.log(res.data)
                //  this.setState({
                //     date_punch:punch.date_punch,
                //     days:punch.days,
                //     hours:punch.hours,
                //     minutes:punch.minutes,
                //     am_pm:punch.am_pm,
                //     punch_type:punch.punch_type
                //  })
             })
    }
    //Save Punch button will fire off the put request on click then route to the home page

    updateDate(val){
        this.setState({date_punch:val})
    }

    updateDays(val){
        this.setState({days:val})
    }

    updateHours(val){
        this.setState({hours:val})
    }

    updateMinutes(val){
        this.setState({minutes:val})
    }

    updateAm(val){
        this.setState({am_pm:val})
    }

    updatePunchType(val){
        this.setState({punch_type:val})
    }

    refreshPage(){
        window.location.reload()
    }

    render(){
        console.log(this.state)
        return(
            <div className='editpunch-parent'>
                <h3>Edit Punch</h3>
             <div className='editpunch-child'>
                <div className='date-and-day'>
               <h3> <h2>Date:</h2><input type='text' value={this.state.date_punch} onChange={(event)=>{this.updateDate(event.target.value)}} /> </h3>
                <h3><h2>Day:</h2> <select onChange={(event)=>{this.updateDays(event.target.value)}} value={this.state.days}>
                    <option>Monday</option>
                    <option>Tuesday</option> 
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                    <option>Sunday</option>
                </select></h3>
                </div>
                <div className='punch-time'>
                <div className='newpunch-time-select'>
                <h2>Time</h2>
                <div className='newpunch-time-hours-minutes'>
                <h3>Hr: <input type='number' min='3' max='32' value={this.state.hours} onChange={(event)=>{this.updateHours(event.target.value)}} /></h3>
                <h3>Min: <input type='number' min='0' max='59' value={this.state.minutes} onChange={(event)=>{this.updateMinutes(event.target.value)}} /></h3>
                <h3><select onChange={(event)=>{this.updateAm(event.target.value)}} value={this.state.am_pm} >
                            <option>AM</option>
                            <option>PM</option>
                          </select>
                </h3>
                </div>
                </div>
                <h3><h2>Punch Type:</h2><select onChange={(event)=>{this.updatePunchType(event.target.value)}} value={this.state.punch_type} >
                            <option>In</option>
                            <option>Out</option>
                          </select>
                </h3>
                </div>
                    <div className='newpunch-buttons'>
                        <button className='editpunch-save-button' onClick={this.putPunch}>Save Punch</button> 
                        <button className='editpunch-cancel-button' onClick={this.refreshPage}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}