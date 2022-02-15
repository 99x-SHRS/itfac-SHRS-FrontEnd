import '../../../Assets/Styles/ButtonGetStarted.css'
import getstartedicon from '../../../Assets/Images/getstartedicon.jpg'
import {Link} from 'react-router-dom'

//import { Link } from 'react-router-dom'

const ButtonGetStarted = () => {
    return(
        <div>
            <Link to="/createhotelaccount">
            <button className="ButtonGetStarted">LET'S GET STARTED
                <img src={getstartedicon} />
            </button>
            </Link>
            
        </div>
    )
}

export default ButtonGetStarted