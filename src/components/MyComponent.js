import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'HuyHoang',
        address: 'Dong Nai',
        age: 30
    };

    handleMouseOver(event) {
        console.log(event.pageX)
    }

    handleClick() {
        console.log(">> Click me !")
        console.log("My name is:", this.state.name);
    }

    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}

                <button onMouseOver={this.handleMouseOver}>Hover me !</button>
                <button onClick={this.handleClick}>Click me !</button>
            </div>
        );
    }
}

export default MyComponent;