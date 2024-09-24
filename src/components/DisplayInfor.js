import React, { useEffect, useState } from "react";
import './DisplayInfor.scss'
import logo1 from './../logo.svg'

//stateless vs stateful

const DisplayInfor = (props) => {
    const { listUsers } = props;

    //useState => ten bien, ham cap nhat bien
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        //Cap nhat lai gia tri cua bien isShowHideListUser
        setShowHideListUser(!isShowHideListUser);
    }

    console.log(">>> call me render")

    useEffect(
        () => {
            if (listUsers.length === 0) {
                alert('You deleted all the users')
            }
            console.log('>>> call me useEffect')
        }, [listUsers]
    );

    return (
        <div className='display-info-container'>
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide list users" : "Show List users"}
                </span>
            </div>
            {isShowHideListUser &&
                <>
                    {listUsers.map((user, index) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "red" : "green"}>
                                <div>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}

export default DisplayInfor;