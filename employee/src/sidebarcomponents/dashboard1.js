import React, { useEffect, useState } from 'react'
import '../dashboard.css'
import Eye from '../assets/eye';
import { Link, Outlet } from 'react-router-dom';
import data from '../utils/data'
import AddEmployee from './addemployee';
function Dashboard1() {
    const data = [
        { id: 1, name: 'Alice', age: 30, city: 'New York', country: 'USA', job: 'Engineer' }
    ];
    const [tabData, setTabData] = useState(data)
    useEffect(() => {
        let arr=[...tabData]
        arr.push(JSON.parse(localStorage.getItem("data")))
        setTabData(arr)
    }, [localStorage.getItem("data")])
   

    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 4;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = tabData.slice(firstIndex, lastIndex)
    const npage = Math.ceil(tabData.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)
    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }
    function changePage(id) {
        setCurrentPage(id)
    }
    const[modal,setModal]=useState(false);
    const[show,setShow]=useState(true);
      const toggleModal=()=>{
        setModal(!modal)
        setShow(!show)
      }

    return (show)?( 
              
        <div className='dashboard1'>
            <div className='header'><h2>Statistics</h2></div>
            <div className='count'>
                <div><a>count1</a></div>
                <div><a>count1</a></div>
                <div><a>count1</a></div>
                <div><a>count1</a></div>
            </div>
            <div className='search'>
                <div class="container">
                    <input type="text" placeholder="Search..."></input>
                    <div className='document'>
                        <label for="document">select documents</label>
                        <select id='document' name='passport'>
                            <option value="option1">passports</option>
                            <option value="option2">active</option>
                            <option value="option3">going to expire</option>
                            <option value="option4">expired</option>
                        </select>
                    </div>
                    <div className='document'>
                        <label for="status">select status</label>
                        <select id='status' name='status'>
                            <option value="option1">active</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                            <option value="option4">Option 4</option>
                        </select>
                    </div>
                    <div className='document'>
                        <label for="vendor">select vendor</label>
                        <select id='vendor' name='vendor'>
                            <option value="option1">vendor</option>
                            <option value="option2">vendor1</option>
                            <option value="option3">vendor2</option>
                            <option value="option4">vendor3</option>
                        </select>
                    </div>
                    <div className='document'>
                        <label for="company">select company</label>
                        <select id='company' name='company'>
                            <option value="option1">company</option>
                            <option value="option2">client1</option>
                            <option value="option3">client2</option>
                            <option value="option4">client3</option>
                        </select>
                    </div>
                     <button  
                     onClick={toggleModal}
                     style={{ textDecoration:'none' }}>+ Add new employee </button>
                   
                   
                </div>
            </div>
            <div className='display'>       
                <div className='table'>
                    <table >
                        <thead>
                            <tr>
                                <th>employee Name</th>
                                <th>passport Number</th>
                                <th>Passport Status</th>
                                <th>Visa Number</th>
                                <th>Visa Status</th>
                                <th>VIEW DOCUMENTS</th>
                            </tr>
                        </thead>
                        <tbody >
                            {records.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td>{row.name}</td>
                                    <td><p className='status'>{row.age}</p></td>
                                    <td>{row.city}</td>
                                    <td > <p className='status'>{row.country}</p></td>
                                    <td><Eye /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <nav>
                        <ul className='pagination'>
                            <li className='page-item'>
                                <a href='#' className='page-link'
                                    onClick={prePage} >Prev</a>

                            </li>
                            {
                                numbers.map((n, i) => (
                                    <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                        <a href='#' className='page-item'
                                            onClick={() => changePage(n)}>{n}</a>

                                    </li>
                                ))
                            }
                            <li className='page-item'>
                                <a href='#' className='page-link'
                                    onClick={nextPage}>Next</a>

                            </li>
                        </ul>
                    </nav>
                </div>
          

            </div>

        </div>
    ): <AddEmployee trigger={modal}/>;
}
export default Dashboard1



