import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'HuyHoang',
        address: 'Dong Nai',
        age: 30
    };

    handleMouseOver(event) {
        // console.log(event.pageX)
    }

    handleClick(event) {
        console.log(">> Click me !")

        //merge State => react class
        this.setState({
            name: 'Paul',
            age: Math.floor((Math.random() * 100) + 1)
        })
    }

    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}

                <button onMouseOver={this.handleMouseOver}>Hover me !</button>
                <button onClick={(event) => { this.handleClick(event) }}>Click me !</button>
            </div>
        );
    }
}

export default MyComponent;