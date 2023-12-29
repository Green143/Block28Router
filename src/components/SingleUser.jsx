import { Link, useParams } from "react-router-dom";

const SingleUser = ({users}) => {
 const params= useParams()
 const id = params.id*1
  //map the users
    const user= users.find((user) =>{
        return user.id=== id
    })
    if (!user) {return null}

   return(
    <div>
        <h2>{user.name}</h2>
        <h3>Email: {user.email}</h3>
        <Link to='/users'> Back to All Users </Link>
    </div>
   )
};

export default SingleUser
