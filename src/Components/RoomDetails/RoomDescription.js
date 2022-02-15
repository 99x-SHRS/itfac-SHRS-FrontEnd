const RoomDescription =() =>{
    return(
        <div className='container pt-5'>
            <div class="container">
            <h5>Room Description</h5>
  
            {/*<form>
                <div class="form-group">
                    <label for="comment">About room:</label>
                    <textarea class="form-control" rows="5" id="comment"></textarea>
                </div>
            </form>*/}


            <form action="/action_page.php">
                <div class="form-floating mb-3 mt-3">
                <textarea class="form-control" id="description" name="text" placeholder="description goes here"></textarea>
                <label for="description">About room</label>
                </div>
            </form>
            </div>
        </div>
    )
}

export default RoomDescription