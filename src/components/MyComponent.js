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

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;