import '../../Assets/Styles/PropertyContactDetails.css'

const PropertyContactDetails = () =>{
    return(
        <div className='container pt-5'>
            <div className='container-propertydetails'>
            <h4>&nbsp;Property Contact Details</h4>
            <div className='PropertyContactDetails-form'>
                <div className="container">
                    <div class="row">
                        <div class="col-25">
                             <label for="fname">Property Name</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="pname" name="PropertyName"  />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                             <label for="fname">Contact Number</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="contactnumber" name="ContactNumber" />
                        </div>
                    </div>
                
                </div>
                </div>    
            </div>
            
        </div>
    )
}

export default PropertyContactDetails;