import React from "react"
import UserInfor from "./UserInfor.js";
import DisplayInfor from "./DisplayInfor.js";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Hoi Dan IT", age: "16" },
            { id: 2, name: "Eric", age: "26" },
            { id: 3, name: "HaryPhamDev", age: "69" },
        ]
    }

    //JSX
    render() {
        //DRY: don't repeat yourself
        // console.log(typeof this.state.listUsers)
        return (
            < div >
                <UserInfor />
                <br /><br />

                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
            </div >
        );
    }
}

export default MyComponent;