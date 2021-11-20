import React from 'react'
import Nav from '../navigation/Nav';
import "./home.css"

function Home() {
    
    return (
        <div className = "homepage">
            <div className = "container">
                <Nav />
                <section className = "main_content">
                    <div>
                        <h1 className = "main_content-title">Don't be busy, Be Productive</h1>
                        <p className = "main_content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sequi nulla exercitationem voluptate consequatur fugiat provident explicabo neque expedita numquam?</p>
                        <button className = "main_content-btn">All Users</button>
                    </div>
                    <div>
                        <img className="main_content-img" src="./images/home_img.svg" alt="main-img" />
                    </div>
                </section>
                <div className = "contacts">
                    <i className = "fa fa-facebook"></i>
                    <i className = "fa fa-git"></i>
                    <i className = "fa fa-twitter"></i>
                    <i className = "fa fa-youtube"></i>
                </div>
            </div>
        </div>
    )
}

export default Home
