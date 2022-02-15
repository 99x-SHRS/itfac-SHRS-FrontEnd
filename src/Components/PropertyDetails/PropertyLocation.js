import '../../Assets/Styles/PropertyLocation.css'

const PropertyLocation = () =>{
    return(
        <div className='container pt-5'>
            <h4>&nbsp;Property Location</h4>
            <div className='PropertyLocation-form'>
                <div className="container">
                    <div class="row">
                        <div class="col-25">
                             <label for="streetno">Street Address1</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="pname" name="PropertyName" placeholder="No:13 " />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                             <label for="streetname">Street Address2</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="streetaddress2" name="StreetAddress" placeholder="Ahiyangala" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                             <label for="town">Town</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="town" name="town" placeholder="Kadana" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                             <label for="district">District</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="district" name="district" placeholder="Galle" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                             <label for="province">Province</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="province" name="province" placeholder="Southern" />
                        </div>
                    </div>
                
                </div>
            </div>
            
        </div>
    )
}

export default PropertyLocation;