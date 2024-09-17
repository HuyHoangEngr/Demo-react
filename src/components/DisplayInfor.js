import React from "react";

class DisplayInfor extends React.Component {
    render() {
        //destructuring array/object
        const { listUsers } = this.props;
        //object- dùng destructuring thì phần tử phải giống với phẩn tử ở Component cha
        // console.log(typeof listUsers)
        //const listUsers = this.props.listUsers;
        //props => viết tắt properties: tài sản cha truyền sang con
        return (
            <div>
                {
                    listUsers.map((user, index) => {
                        return (
                            <div key={user.id}>
                                <div>My name's {user.name}</div>
                                <div>My age's {user.age}</div>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default DisplayInfor;