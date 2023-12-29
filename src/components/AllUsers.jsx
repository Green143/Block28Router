import { Link } from "react-router-dom";

const AllUsers = ({users}) => {
 
  return (
    <div>
      <h2>All Users</h2>
        <ul>
          {users.map((user)=>{
            return(
                <li key= {user.id}> 
                <Link to= {`/users/${user.id}`} >{user.name}</Link>
                </li>
            )
          })
        }
        </ul>

    </div>
  );
};
export default AllUsers

