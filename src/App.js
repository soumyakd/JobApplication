import React from 'react'
import ApplicationForm from './ApplicationForm'
import { BrowserRouter, Route} from 'react-router-dom'
import AdminDashboard from './AdminDashboard'

function Home(props){
    return(
        <BrowserRouter>
            <div> 
                <h1> Job Application </h1>

                <Route path = '/' component = {ApplicationForm} exact = {true} />
                <Route path = '/admin' component = {AdminDashboard} />
            </div>
        </BrowserRouter>  
    )
}
export default Home