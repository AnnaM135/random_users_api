import React, {useState} from 'react'

function Search({users}) {
    const [search, setSearch] = useState("")

    const searchHandler = () => {
        users = users.filter((user) => {
            console.log(user.name.first)
            //return user.name.first.toLowerCase().includes(search.toLowerCase())
        })
    }
    
    return (
        <div>
            <input placeholder = "Search..." onChange = {(e) => setSearch(e.target.value)}/>
            <button onClick = {() => searchHandler()}>loop</button>
        </div>
    )
}

export default Search


