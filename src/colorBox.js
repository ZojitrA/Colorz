import React, { Component } from 'react'
import './colorBox.css'

export default class colorBox extends Component {
    render() {
        return (
            <div style={{background: this.props.background}} className="color-box">
                <span>{this.props.name}</span>
                
            </div>
        )
    }
}

