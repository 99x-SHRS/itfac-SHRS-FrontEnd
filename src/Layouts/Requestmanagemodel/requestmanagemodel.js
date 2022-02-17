import Pendingrequest from "../../Components/Pendingrequest/pendingrequest";
import Rejectedrequest from "../../Components/Rejectedrequest/rejectedrequest";
import Acceptedrequest from "../../Components/Acceptedrequest/acceptedrequest";
import { Tabs, Tab } from "react-bootstrap";
import { Collapse } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

function Requestmanagemodel() {
  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `http://localhost:3004/comments?_page=1&_limit=10`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setpageCount(Math.ceil(total / 10));
      //console.log(total);
      setItems(data);
    };
    getComments();
  }, []);

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `http://localhost:3004/comments?_page=${currentPage}&_limit=10`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    //console.log(data.selected);

    let currentPage = data.selected + 1;
    const commentsFromServer = await fetchComments(currentPage);
    setItems(commentsFromServer);
  };
  return (
    <div class="container">
      <div className="d-flex justify-content-center m-4">
        <h1>Request Manage</h1>
      </div>
      <Tabs
        defaultActiveKey="all"
        transition={Collapse}
        id="noanim-tab-example"
        className="mb-3 mt-4 row-g-2 d-flex justify-content-center"
      >
        {/* <Tab eventKey="all" title="All Request">
          <div className="container">
            <div className="row g-3 rounded-3 shadow p-2 border border-light mt-4">
              <div className="col-4 d-flex justify-content-center">
                <h2>All Request</h2>
              </div>
              <div className="col-8">
                <div className="row g-1 rounded-3 bg-secondary text-white align-middle mb-2">
                  <div className="col-sm-3 d-flex justify-content-center">
                    <p>Hotel Name</p>
                  </div>
                  <div className="col-sm-3 d-flex justify-content-center">
                    <p>Owner Name</p>
                  </div>
                  <div className="col-sm-2 d-flex justify-content-center">
                    <p>Location</p>
                  </div>
                  <div className="col-sm-2 d-flex justify-content-center">
                    <p>Status</p>
                  </div>
                  <div className="col-sm-2 d-flex justify-content-center">
                    <p>Actions</p>
                  </div>
                </div>
                <Pendingrequest
                  hname="Beach Hotel"
                  oname="O.W.Kodithuwakku"
                  location="Mount Lavinia"
                  status="pending"
                />
                <Pendingrequest
                  hname="Hilltop Hotel"
                  oname="Sumudu"
                  location="Yatiyanthota"
                  status="pending"
                />
                <Acceptedrequest
                  hname="Samudura Hotel"
                  oname="K.Perera"
                  location="Matara"
                  status="accepted"
                />
                <Rejectedrequest
                  hname="Sewana Hotel"
                  oname="S.Gunasena"
                  location="Polonnaruwa"
                  status="Rejected"
                />
              </div>
            </div>
          </div>
        </Tab> */}

        {/* <Tab eventKey="pending" title="Pending Request">
          <div className="container">
            <div className="row g-3 rounded-3 shadow p-2 border border-light mt-4">
              <div className="col-4 d-flex justify-content-center">
                <h2>Pending Request</h2>
              </div>
              <div className="col-8">
                <div className="row g-1 rounded-3 bg-secondary text-white align-middle mb-2">
                  <div className="col-sm-3 d-flex justify-content-center">
                    <p>Hotel Name</p>
                  </div>
                  <div className="col-sm-3 d-flex justify-content-center">
                    <p>Owner Name</p>
                  </div>
                  <div className="col-sm-2 d-flex justify-content-center">
                    <p>Location</p>
                  </div>
                  <div className="col-sm-2 d-flex justify-content-center">
                    <p>Status</p>
                  </div>
                  <div className="col-sm-2 d-flex justify-content-center">
                    <p>Actions</p>
                  </div>
                </div>
                <Pendingrequest
                  hname="Beach Hotel"
                  oname="O.W.Kodithuwakku"
                  location="Mount Lavinia"
                  status="pending"
                />
                <Pendingrequest
                  hname="Taj Hotel"
                  oname="K.C.Perera"
                  location="Dehiwala"
                  status="pending"
                />
                <Pendingrequest
                  hname="Hilltop Hotel"
                  oname="Sumudu"
                  location="Yatiyanthota"
                  status="pending"
                />
                <Pendingrequest
                  hname="Samudura Hotel"
                  oname="K.Perera"
                  location="Matara"
                  status="pending"
                />
                <Pendingrequest
                  hname="Gem Hotel"
                  oname="K.Fernando"
                  location="Negambo"
                  status="pending"
                />
                <Pendingrequest
                  hname="Sewana Hotel"
                  oname="S.Gunasena"
                  location="Polonnaruwa"
                  status="pending"
                />
              </div>
            </div>
          </div>
        </Tab> */}

        {/* <Tab eventKey="accepted" title="Accepted Request">
          <div className="container">
            <div className="row g-3 rounded-3 shadow p-2 border border-light mt-4">
              <div className="col-4 d-flex justify-content-center">
                <h2>Accepted Request</h2>
              </div>
              <div className="col-8">
                <div className="row g-1 rounded-3 bg-secondary text-white align-middle mb-2">
                  <div className="col-sm-3 d-flex justify-content-center">
                    <p>Hotel Name</p>
                  </div>
                  <div className="col-sm-3 d-flex justify-content-center">
                    <p>Owner Name</p>
                  </div>
                  <div className="col-sm-2 d-flex justify-content-center">
                    <p>Location</p>
                  </div>
                  <div className="col-sm-2 d-flex justify-content-center">
                    <p>Status</p>
                  </div>
                  <div className="col-sm-2 d-flex justify-content-center">
                    <p>Actions</p>
                  </div>
                </div>
                <Acceptedrequest
                  hname="Beach Hotel"
                  oname="O.W.Kodithuwakku"
                  location="Mount Lavinia"
                  status="accepted"
                />
                <Acceptedrequest
                  hname="Taj Hotel"
                  oname="K.C.Perera"
                  location="Dehiwala"
                  status="accepted"
                />
                <Acceptedrequest
                  hname="Hilltop Hotel"
                  oname="Sumudu"
                  location="Yatiyanthota"
                  status="accepted"
                />
                <Acceptedrequest
                  hname="Samudura Hotel"
                  oname="K.Perera"
                  location="Matara"
                  status="accepted"
                />
                <Acceptedrequest
                  hname="Gem Hotel"
                  oname="K.Fernando"
                  location="Negambo"
                  status="accepted"
                />
                <Acceptedrequest
                  hname="Sewana Hotel"
                  oname="S.Gunasena"
                  location="Polonnaruwa"
                  status="accepted"
                />
              </div>
            </div>
          </div>
        </Tab> */}

        <Tab eventKey="rejected" title="Rejected Request">
          <div className="container">
            <div className="row g-3 rounded-3 shadow p-2 border border-light mt-4">
              <div className="col-4 d-flex justify-content-center">
                <h2>Rejected Request</h2>
              </div>
              <div className="col-8">
                <div className="row g-1 rounded-3 bg-secondary text-white align-middle mb-2">
                  <div className="col-sm-3 d-flex justify-content-center">
                    <p>Hotel Name</p>
                  </div>
                  <div className="col-sm-3 d-flex justify-content-center">
                    <p>Owner Name</p>
                  </div>
                  <div className="col-sm-2 d-flex justify-content-center">
                    <p>Location</p>
                  </div>
                  <div className="col-sm-2 d-flex justify-content-center">
                    <p>Status</p>
                  </div>
                  <div className="col-sm-2 d-flex justify-content-center">
                    <p>Actions</p>
                  </div>
                </div>
                <Rejectedrequest
                  hname="Beach Hotel"
                  oname="O.W.Kodithuwakku"
                  location="Mount Lavinia"
                  status="Rejected"
                />
                <Rejectedrequest
                  hname="Taj Hotel"
                  oname="K.C.Perera"
                  location="Dehiwala"
                  status="Rejected"
                />
                <Rejectedrequest
                  hname="Hilltop Hotel"
                  oname="Sumudu"
                  location="Yatiyanthota"
                  status="Rejected"
                />
                <Rejectedrequest
                  hname="Samudura Hotel"
                  oname="K.Perera"
                  location="Matara"
                  status="Rejected"
                />
                <Rejectedrequest
                  hname="Gem Hotel"
                  oname="K.Fernando"
                  location="Negambo"
                  status="Rejected"
                />
                <Rejectedrequest
                  hname="Sewana Hotel"
                  oname="S.Gunasena"
                  location="Polonnaruwa"
                  status="Rejected"
                />

                <ReactPaginate
                  previousLabel={"<<"}
                  nextLabel={">>"}
                  breakLabel={". . ."}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={4}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination justify-content-center"}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"page-item"}
                  previousLinkClassName={"page-link"}
                  nextClassName={"page-item"}
                  nextLinkClassName={"page-link"}
                  breakClassName={"page-item"}
                  breakLinkClassName={"page-link"}
                  activeClassName={"active"}
                />
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
export default Requestmanagemodel;
