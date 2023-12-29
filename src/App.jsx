import {useState, useEffect} from "react";
import axios from "axios";
import {Route, Routes, useLocation, Link} from "react-router-dom";
import AllPosts from "./components/AllPosts.jsx";
import HomePage from "./components/Home.jsx";
import SingleUser from "./components/SingleUser.jsx";
import AllUsers from "./components/AllUsers.jsx";
import SinglePost from "./components/SinglePost.jsx";
import "./App.css";
import "./index.css";

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const location = useLocation()
  const{pathname} = location //extract pathname from the location
  //console.log(pathname)
  


  useEffect(() => {
    //call api
    const fetchUserData = async () => {
      const data  = await axios.get("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
      setUsers(data.data);
      console.log(data)
    }; //fetch

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchPostsData = async () => {
      const data = await axios.get(
        "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts"
      );
      setPosts(data.data);
      //console.log(data);
    };

    fetchPostsData();
  }, []);

  return (
    <div>
      <nav>
        <Link to="/" className= {pathname === "/" ? "selected" : ""}> Home </Link> 

        <Link to="/users"className= {pathname === "/users" ? "selected" : ""}> Users- {users.length}</Link>

        <Link to="/posts"className= {pathname === "/posts" ? "selected" : ""}> Posts - {posts.length}</Link>

      
      </nav>

      <h1>Welcome to the Post Hub!</h1>

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/users" element={<AllUsers users={users}/>}/>
        <Route path="/posts" element={<AllPosts posts={posts} />}/>
        <Route path="/users/:id" element={<SingleUser users={users} />}/>
        <Route path="/posts/:id" element={<SinglePost posts={posts} />}/>
      </Routes>

    
    </div>
  );
}

export default App
