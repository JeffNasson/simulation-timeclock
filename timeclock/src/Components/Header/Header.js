import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        return(
            <div className='header-parent'>
                <Link className='header-image' to='/'><img></img></Link>
            </div>
        )
    }
}