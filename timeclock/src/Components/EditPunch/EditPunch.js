import React,{Component} from 'react';

export default class EditPunch extends Component{

    //GET /api/punch/:id

    //PUT /api/punch/:id
    //Save Punch button will fire off the put request on click then route to the home page

    render(){
        return(
            <div className='editpunch-parent'>
                Edit Punch
                <button>Save Punch</button> 
                <button>Cancel</button>
            </div>
        )
    }
}