import React, {Component} from 'react';
import './Counter.css';
import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
// import Clock from './Clock';
import ClockFunctional from './ClockFunctional';
import Step from './Step';

class Counter extends Component {

    constructor(props) {

        super(props);
        this.initStateValue = 10;

        this.state = {
            counterValue: this.initStateValue,
            showClock: true,
            stepValue: 5
        }

    }

    

    addValue = (action) => {
        
        this.setState( (prevState, prevProps) => {
            let currentCounterValue = prevState.counterValue;

            if(action === 'add') {
                currentCounterValue += this.state.stepValue;
            } else if(action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            } else {
                currentCounterValue = 0;
            }

            return({
                counterValue: currentCounterValue
            });
        });
    }

    toggleClock = () => {
        this.setState ( (prevstate) => {
            return({
                showClock: !prevstate.showClock
            })
        })
    }

    setStepOnInput = (value) => {
        this.setState({
            stepValue: parseFloat(value),
        });
    }

    render() {

        let clockElement = '';

        if (this.state.showClock == true) {
            clockElement = <ClockFunctional toggleClockMethod={this.toggleClock} />
        } else {
            clockElement = <span className='show-clock' onClick={this.toggleClock}>show clock</span>
        }

        return (
            <div>
                <div className='counter'>
                    <Display displayValue={this.state.counterValue} />
                    <ButtonsPanel buttonMethod={this.addValue}/>
                    <Step stepMethod={this.setStepOnInput}/>
                    {clockElement}
                </div>
            </div>
        )
    }
}






export default Counter;