import React, {Component} from 'react';

class Step extends Component {

    constructor (props) {
        super(props);
        this.inputRef = React.createRef();
    }

    // componentDidMount(){
    //     console.log(this.inputRef);
    //     this.inputRef.current.focus();
    // }

    setStepOnInput = () => {
        this.props.stepMethod(this.inputRef.current.value);
        console.log(this.inputRef.current.value);
    }

    render() {
        return(
            <div>
                <label for='step'>Krok:</label>
                <input ref={this.inputRef} onChange={this.setStepOnInput} type='number' id='step' placeholder='set step'></input>
            </div> 
        )
    }
}

export default Step;