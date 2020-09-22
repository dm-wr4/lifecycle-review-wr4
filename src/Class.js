import React, {Component} from 'react'

export default class Class extends Component {
    constructor(){
        super()

        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        // console.log('compDidMnt')
        this.setState({
            count: 1
        })
    }

    componentDidUpdate(prevProps, prevState){
        // console.log('compDidUpdt', prevProps, this.props)
        // console.log('compDidUpdt', prevState, this.state)
    }

    handleIncrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        // console.log('Class render', this.state, this.props)
        return (
            <div>
                Class.js
                <button onClick={() => this.handleIncrementCount()}>+</button>
                <button onClick={() => this.props.biggify()}>Biggify</button>
            </div>
        )
    }
}