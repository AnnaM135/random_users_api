import React, {useEffect, useState} from 'react'
import axios from "axios";
import "../home/home.css";
import "./users.css";
import Pagination from './Pagination';

function Users() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);
    
    const [icons] = useState([
        {id: 1, name: "fa fa-map-marker icon"},
        {id: 2, name: "fa fa-envelope icon"},
        {id: 3, name: "fa fa-mobile icon"}
    ])
    const [activeLink, setActiveLink] = useState(0)
    const [activeUser, setActiveUser] = useState(null)


    useEffect(function () {
        fetchUsers()
    }, [])

    useEffect(() => {
        setFilteredUsers(
            users.slice(0, 4).filter(user => {
                return (
                    user.name.first.toLowerCase().includes(search.toLowerCase())
                )
            })
        )
    }, [search, users])
 

    const fetchUsers = () => {
        axios.get("https://randomuser.me/api/?results=50")
         .then((response) => {
             const usersData = response.data.results
             setUsers(usersData)
         })
    }

    const PhraseGenerator = ({user, index}) => {
        const arr = [ "", user.location.street.name, user.email, user.phone ]
        if(index === activeUser){
            return <p>{arr[activeLink]}</p>
        }
        return arr[0]
    }

    const activeUserHandler = (userIndex, iconIndex) => {
        setActiveLink(iconIndex)
        setActiveUser(userIndex)
    }

    return (
        <div className = "userspage">
            <div className = "user_container">
                <h1>All USERS</h1>
                <input placeholder = "Search..." onChange = {(e) => setSearch(e.target.value)}/>

                <div className = "cards">
                   {
                       filteredUsers.map((user, index) => (
                        <div className = "cards_box" key = {index}>
                                     <img className = "cards_box-img" src = {user.picture.large} alt = "userPhoto"/>
                                     <h1>{user.name.title}. {user.name.first} {user.name.last}</h1>
                                     <PhraseGenerator user = {user} index = {index}  />
                                     <div className = "cards_box-icons">
                                         {
                                             icons.map((icon) => (
                                                 <i onMouseLeave = {() => setActiveLink(0)} onMouseEnter = {() => activeUserHandler(index, icon.id)} key = {icon.id} className = {icon.name} aria-hidden="true"></i>
                                             ))
                                         }
                                     </div>
                                 </div>
                       ))
                   }
                </div>
                   <Pagination  users = {users}/>
            </div>
        </div>
    )
}

export default Users
