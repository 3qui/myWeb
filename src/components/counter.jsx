import React from 'react'

export default class Counter extends React.Component {
    render(){
        return (
            <div>
                <p style={{color:'red'}}>
                    点击次数{this.props.value}
                </p>
                <button onClick={this.props.add}>加一</button>
                <button onClick={this.props.del}>减一</button>
            </div>
        )
    }
}