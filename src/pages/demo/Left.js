import React from 'react';
import Child from './Child';
export default class Left extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    handleAdd() {
        this.setState({
            count: this.state.count - 1
        })
    }
    handleAddList = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        let style = {
            padding: 50
        }
        return (
            <div>
                <p>生命周期</p>
                <button onClick={this.handleAdd.bind(this)}>点击一下</button>
                <button onClick={this.handleAddList}>点击一下</button>
                <p>{this.state.count}</p>
                <Child></Child>
            </div>
        )
    }

}