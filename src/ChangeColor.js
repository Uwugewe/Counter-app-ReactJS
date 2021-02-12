import React, {Component} from 'react';

class ChangeColor extends Component{

    constructor(props) {
        super(props);
        this.state = {
            headingClass: 'green',
        }
    }

    render() {
        return(
            <div>
                <div id='change-buttons'>
                    <h1 className={this.state.headingClass}>HELLO</h1>

                    <button onClick={ (e) => {
                        this.setState({
                            headingClass: 'blue'
                        })
                    }}>Blue</button>
                    <button onClick={ (e) => {
                        this.setState({
                            headingClass: 'yellow'
                        })
                    }}>yellow</button>
                    <button onClick={ (e) => {
                        this.setState({
                            headingClass: 'green'
                        })
                    }}>green</button>
                </div>
            </div>
        )
    }
}

export default ChangeColor;