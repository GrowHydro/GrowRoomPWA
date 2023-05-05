import './scss/greenroom.scss'
import Navigate from './Navigate.js'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Hydro from './Hydro'
import Users from './Users'
import PotCards from './PotCards'
import Contact from './Components/Contact'
import Sci from './Components/Sci'

const WelcomeGreenRoom = () =>{


    return(<>
            <div className="greenroom">
                <Navigate />
                <Routes>
                    <Route index element={<PotCards />} />
                    <Route path="/" element={<PotCards />} />
                    <Route path="/hydro" element={<Hydro />} />
                    <Route path="users" element={<Users />} />
                    <Route path="/sci" element={<Sci />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Outlet />
            </div>
           </>)
}

export default WelcomeGreenRoom