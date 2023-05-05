import { Outlet } from "react-router-dom"
import '../scss/contact.scss'
import Weed from '../pictures/gorgeous.webp'
import ContentReveal from "./Reveal/Reveal"

const Contact = () =>{

    return(<>
            <div className="d-flex flex-column mx-auto">
            <div className="contact">
                <h1 className="text-center text-white">555-555-5555</h1>
                <h1 className="text-center text-white">customers.grow.hydro@gmail.com</h1>
                <img src={Weed} alt='weed' className="mx-auto rounded-circle"/>
                <ContentReveal />
            </div>
            <Outlet />
            </div>
           </>)
}

export default Contact