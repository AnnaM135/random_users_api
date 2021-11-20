import React, {useEffect, useState} from 'react'
import axios from "axios";
import "../home/home.css";
import "./users.css";

function Users() {
    useEffect(function () {
        fetchUsers()
    }, [])

    const [users, setUsers] = useState([])

    const fetchUsers = () => {
        axios.get("https://randomuser.me/api/?results=4")
         .then((response) => {
             const usersData = response.data.results
             setUsers(usersData)
         })
    }

    return (
        <div className = "homepage">
            <div className = "container">
                <h1>All USERS</h1>
                <h2>aytex klini filter dasht</h2>
                <h2>aytex klini search dasht</h2>

                <div className = "cards">
                    {
                        users.map((user, index) => (
                            <div className = "cards_box" key = {index}>
                                <img className = "cards_box-img" src = {user.picture.large} />
                                <h1>{user.name.title}. {user.name.first} {user.name.last}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Users
