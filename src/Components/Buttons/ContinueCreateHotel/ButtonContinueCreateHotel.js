import '../../../Assets/Styles/ButtonContinueCreateHotel.css'
import {Link} from 'react-router-dom'

const ButtonContinueCreateHotel = () => {
    return(
        <div className='container pt-5'>
            <blockquote class="blockquote text-center">
            <Link to="/createroom">
                <button className="ButtonContinueCreateHotel">Continue</button> 
            </Link>         
            </blockquote>
            
        </div>
    )
}

export default ButtonContinueCreateHotel;