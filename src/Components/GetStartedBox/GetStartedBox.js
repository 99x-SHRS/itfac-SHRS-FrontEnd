import ButtonGetStarted from '../Buttons/ButtonGetStarted/ButtonGetStarted.js'
import '../../Assets/Styles/GetStartedBox.css'

const GetStartedBox =() =>{
    return(
        <div className='container pt-5'>
            <center>
            
            <div className='container-getstarted'>
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-3"><h5>List your properties now on our website  </h5></div>
                <div class="col-sm-3"><ButtonGetStarted /></div>
                <div class="col-sm-3"></div>
            </div>

               {/*  <div className='row'>
                    <div className='col-sm-8'><h5>List your properties now on our website  </h5></div>
                    <div className='col-sm-4'><ButtonGetStarted /></div>
                </div> */}
            </div>
            </center>
        </div>    
            
           
        
    )
}

export default GetStartedBox;
