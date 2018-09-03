import React, { Component } from 'react';

// This component will display the buttons on the dom

class InputField extends Component {

    render() {
        return (

            // Will display the current expression, which will be calculated when submitted
            <div className="equationInput row bg-dark text-light pl-2 pr-2">
                {this.props.expressionData.expression.map((entry, i) => {
                    console.log();
                    
                    // Formatting for input display, if the entry is a number it will not have spaces, if it is then it will have spaces.
                    let decimal = '.';
                    // To evaluate the decimal the conditional statement uses the unicode value for comparison
                    if (entry === decimal) {
                        return <span key={i} className="inputDisplay">{entry}</span>
                    }
                    else if (isNaN(entry)) {
                        return <span key={i} className="inputDisplay pl-1 pr-1"> {entry}  </span>
                    } else {
                        return <span key={i} className="inputDisplay">{entry}</span>
                    }

                })}
            </div>
        );
    }
}

export default InputField