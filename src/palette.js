import React, { Component } from 'react'
import ColorBox from './colorBox'
import './palette.css'

export default class palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map(color => {
            return <ColorBox background={color.color} name={color.name}/>
        })

        return (
            <div className='palette'>
                {/* navbar eventually */}
                <div className='palette-colors'>
                    {colorBoxes}
                </div>
                {/* footer eventually */}
            </div>
        )
    }
}

