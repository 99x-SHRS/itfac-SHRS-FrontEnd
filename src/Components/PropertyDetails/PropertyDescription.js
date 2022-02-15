import '../../Assets/Styles/PropertyLocation.css'

const PropertyDescription = () =>{
    return(
        <div className='container pt-5'>
            <h4>&nbsp;Property Description</h4>
            <div className='PropertyLocation-form'>
                <div className="container">
                    <textarea class="form-control" rows="5" id="comment"></textarea>
                </div>
            </div>
            
        </div>
    )
}

export default PropertyDescription;