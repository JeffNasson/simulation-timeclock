import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class NewPunch extends Component{
    constructor(){
        super()
        this.state={
            punches:[],
            punchType:'',
            punchDay:'',
            punchHr:null,
            punchMin:null,
            punchDate:null
        }
    }

    //POST /api/punch
    //on click the POST request will send the info to the backend, the Create Punch button will route to the Home page

    render(){
        return(
            <div className='newpunch-parent'>
                New Punch
                <div className='newpunch-date'><h2>Date:</h2><input type='date'/> </div>
                <div className='newpunch-select-day'>
                    <h2>Day:</h2>
                    <select>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                        <option>Sunday</option>
                    </select>
                </div>
                <div className='newpunch-time-select'>
                    <h2>Time:</h2>
                    HR:<input type='number' />
                    Min:<input type='number' />
                    <select>
                        <option>AM</option>
                        <option>PM</option>
                    </select>
                </div>
                <div className='newpunch-time-punchtype'>
                    <h2>Punch Type</h2>
                    <select>
                        <option>In</option>
                        <option>Out</option>
                    </select>
                </div>
                <button>Create Punch</button>
                <Link className='newpunch-cancel-button' to='/'><button>Cancel</button></Link>
            </div>
        )
    }
}