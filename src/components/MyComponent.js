import React from "react"
import UserInfor from "./UserInfor.js";
import DisplayInfor from "./DisplayInfor.js";

class MyComponent extends React.Component {

    //JSX
    render() {
        const myInfor = ['ab', 'c', 'c']
        return (
            <div>
                <UserInfor />
                <br /><br />
                <DisplayInfor name="Hoi Dan IT" age="30" />
                <hr />
                <DisplayInfor name={"Paul"} age={31} myInfor={myInfor} />
            </div>
        );
    }
}

export default MyComponent;