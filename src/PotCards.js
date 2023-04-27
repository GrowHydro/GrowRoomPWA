import { useNavigate } from "react-router-dom";
import Mock from './pictures/mock.jpg'
import VerticalFarm from './pictures/vertical-farm.jpg'
import './scss/hydroponics.scss'
import 'bootstrap/dist/css/bootstrap.css';
const cardInfo = [
    {img: VerticalFarm, class: 'farm', alt: "Grow indoors", des: 'A vertical Fram using hydroponics', info: 'Hydropoincs grow faster and give more flower', title: 'Hydro'},
    {img: Mock, class: 'kit', alt: 'hydroponics setup', des: 'a plug and grow hydroponics setup', info: 'our models take the guess work and sweat out of growing pot', title: 'Kits' },
    {img: VerticalFarm, class: 'farm', alt: "Grow indoors", des: 'A vertical Fram using hydroponics', info: 'Hydropoincs grow faster and give more flower'},
    {img: Mock, class: 'kit', alt: 'hydroponics setup', des: 'a plug and grow hydroponics setup', info: 'our models take the guess work and sweat out of growing pot' },
]
const PotCards = () =>{
    const navigate = useNavigate();

    const followLink=(link)=>{
        debugger;
        navigate("/"+link);
    }

    const makeComponents = () =>{
        return cardInfo.map((card)=><span onClick={()=>followLink(card.title.toLocaleLowerCase())} className={card.class + " " + 'card'} key={card.alt}><h1>{card.title}</h1></span>)
    }

    return(<>
            <div className='d-flex flex-column mx-auto home'>
                <h1 className="mx-auto text-warning font-italic">Grow and save like a boss</h1>
                <div className="mx-auto">
                {makeComponents()}
                </div>
            </div>
           </>)
}

export default PotCards