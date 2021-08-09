//connect allows us to decide which data we can use from store as props in our component
import {connect} from "react-redux";
import UserComponent from "../../Components/User/UserComponent";

import {addUserToStore, signinUpuser} from "../../../State/User/UserAction";

//mapStateToProps : to make your component able to read data from store (subscriber)
let mapStateToProps = (state) =>{ //this state is the store
    return {
        user : state.userReducer.user
    }
}

//mapDispatchToProps : to make your component able to push data to the store using action (publisher)
let mapDispatchToProps = (dispatch) => {
    return {
        addUser : (user) => {
            dispatch(addUserToStore(user))
        },
        loginUser : (user)=>{
            dispatch(signinUpuser(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);