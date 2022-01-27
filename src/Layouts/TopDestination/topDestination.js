import '../../Assets/styles/css/Layouts/topdestination.css'
import GalleLogo from '../../Assets/images/galle.jpg'
import EllaLogo from '../../Assets/images/ella.jpg'
import AnuradapraLogo from '../../Assets/images/anuradapra.jpg'

const TopDestination = () => {
  return (
    <div className='container topDestination-container mt-5 bg-light rounded p-3'>
      <div className='row'>
        <div className='col-md-4 test mb-5 '>
          <div className='title-logo text-center'>
            <h2>Anuradhapura</h2>
            <h3>Get some fresh air</h3>
          </div>
          <div className='circle'>
            <div className='circle_inner'>
              <div className='circle_inner__layer'>
                <img src={AnuradapraLogo} />
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4 test mb-5'>
          <div className='title-logo text-center'>
            <h2>Galle</h2>
            <h3>Get some fresh air</h3>
          </div>
          <div className='circle'>
            <div className='circle_inner'>
              <div className='circle_inner__layer'>
                <img src={GalleLogo} />
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4 test mb-5'>
          <div className='title-logo text-center'>
            <h2>Ella</h2>
            <h3>Get some fresh air</h3>
          </div>
          <div className='circle'>
            <div className='circle_inner'>
              <div className='circle_inner__layer'>
                <img src={EllaLogo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopDestination
