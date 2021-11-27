import React, {useState} from 'react';
import ReactPaginate from "react-paginate";
import "./users.css";



function Pagination({ users }) {
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage] = useState(4);
    const indexOfLastUser = currentPage * usersPerPage
    const indexOfFirstUser = indexOfLastUser - usersPerPage 
    const currentUser = users.slice(indexOfFirstUser, indexOfLastUser)
    const changePage = ({selected}) => {
        setCurrentPage(selected)
    }
    
    const pageNumbers =  Math.ceil(users.length / usersPerPage)
    
    
    return (
        <div>
                <ReactPaginate 
                           previousLabel={"Previous"}
                           nextLabel={"Next"}
                           pageCount={pageNumbers}
                           onPageChange={changePage}
                           containerClassName={"paginationBttns"}
                           previousLinkClassName={"previousBttn"}
                           nextLinkClassName={"nextBttn"}
                           disabledClassName={"paginationDisabled"}
                           activeClassName={"paginationActive"}
                      />
        </div>
    )
}

export default Pagination
