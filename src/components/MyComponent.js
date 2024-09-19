import React from "react"
import AddUserInfor from "./AddUserInfor.js";
import DisplayInfor from "./DisplayInfor.js";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Hoi Dan IT", age: "16" },
            { id: 2, name: "Eric", age: "26" },
            { id: 3, name: "HaryPhamDev", age: "69" },
        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            //let listUsersNew = this.state.listUsers;
            //listUsersNew.unshift(userObj);
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    //JSX
    render() {
        //DRY: don't repeat yourself
        // console.log(typeof this.state.listUsers)
        return (
            <>
                < div className='a'>
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br /><br />

                    <DisplayInfor
                        listUsers={this.state.listUsers}
                    />
                </div >

                <div className='b'>

                </div>
            </>
        );
    }
}

export default MyComponent;