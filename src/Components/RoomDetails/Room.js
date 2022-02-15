import '../../Assets/Styles/PropertyContactDetails.css'

const Room = () =>{
    return(
        <div className='container pt-5'>
            <div class="container">
            <h2>Enter details about your room</h2>
            
            <form>
                <div class="form-group">
                    <label for="sel1" class="form-label">Select one (Choose your room type:):</label>
                        <select class="form-select" id="sel1" name="sellist1">
                            <option>Deluxe Double Room</option>
                            <option>Superior Room</option>
                            <option>Single Room</option>
                            <option>type4</option>
                        </select>
                </div>
                <div class="form-group">
                    <label for="rate">Rate:</label>
                    <input type="text" class="form-control" id="rate" />
                </div>
            </form>
        </div>
            
    </div>
    )
}

export default Room;