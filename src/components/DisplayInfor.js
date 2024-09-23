import React from "react";
import './DisplayInfor.scss'
import logo1 from './../logo.svg'

//stateless vs stateful
// class DisplayInfor extends React.Component {

//     render() {
//         console.log('>>> call me render ')
//         //destructuring array/object
//         const { listUsers } = this.props;
//         //object- dùng destructuring thì phần tử phải giống với phẩn tử ở Component cha
//         //const listUsers = this.props.listUsers;
//         //props => viết tắt properties: tài sản cha truyền sang con
//         return (
//             <div className='display-info-container'>
//                 {true &&
//                     <>
//                         {listUsers.map((user, index) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "red" : "green"}>
//                                     <div>
//                                         <div>My name's {user.name}</div>
//                                         <div>My age's {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;
    return (
        <div className='display-info-container'>
            {true &&
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