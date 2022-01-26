import '../../Assets/styles/css/header.css'
import Searchbox from '../../Components/Searchbar'
import Navbar from '../../Components/Navbar/navbar'

const Header = () => {
  return (
    <div className='header'>
      <Navbar />
      <Searchbox />
    </div>
  )
}

export default Header
