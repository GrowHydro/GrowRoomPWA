import { Outlet } from "react-router-dom"
import './scss/hydroponics.scss'

const Hydro = () =>{

    return(<>
            <div className="hydroponics mx-auto">
                <p>Filler</p>
                <p>More Filler</p>
                <p>This looks cool tho</p>
            </div>
            <Outlet />
           </>)
}

export default Hydro