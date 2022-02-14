function Acceptedrequest(props) {
    return (
      <div className="rounded-3 shadow border border-info row g-1 align-middle mb-2">
        <div className="col-sm-3 d-flex justify-content-center my-auto">
          <p>{props.hname}</p>
        </div>
        <div className="col-sm-3 d-flex justify-content-center my-auto">
          <p>{props.oname}</p>
        </div>
        <div className="col-sm-2 d-flex justify-content-center my-auto">
          <p>{props.location}</p>
        </div>
        <div className="col-sm-2 d-flex justify-content-center my-auto">
          <p>{props.status}</p>
        </div>
        <div className="col-sm-2 pb-2 d-flex justify-content-center">
          <button type="button" class="btn btn-outline-primary btn-sm mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pen-fill"
              viewBox="0 0 16 16"
            >
              <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
  export default Acceptedrequest;
  