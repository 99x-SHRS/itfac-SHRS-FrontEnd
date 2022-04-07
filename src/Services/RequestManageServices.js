import { useEffect, useState } from "react";
import axios from "axios";

function RequestManageService() {
  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);
  useEffect(() => {
    const getacceptedDetails = () => {
      const data = {
        status: "accepted",
        page: 1,
      };
      axios
        .get(`http://localhost:8000/api/hotel/getHotelsByStatus`, data)
        .then((res) => {
          //console.log(res);
          const data = res.data;
          console.log(data);
          setItems(data);
        })
        .catch((err) => {
          console.log(err);
        });
      // const total = res.headers.get("x-total-count");
      // setpageCount(Math.ceil(total / 10));
      // //console.log(total);
    };
    getacceptedDetails();
  }, []);

  useEffect(() => {
    const getrejectedDetails = () => {
      const data = {
        status: "accepted",
        page: 1,
      };
      axios
        .get(`http://localhost:8000/api/hotel/getHotelsByStatus`, data)
        .then((res) => {
          //console.log(res);
          const data = res.data;
          console.log(data);
          setItems(data);
        })
        .catch((err) => {
          console.log(err);
        });
      // const total = res.headers.get("x-total-count");
      // setpageCount(Math.ceil(total / 10));
      // //console.log(total);
    };
    getrejectedDetails();
  }, []);

  useEffect(() => {
    const getpendingDetails = () => {
      const data = {
        status: "accepted",
        page: 1,
      };
      axios
        .get(`http://localhost:8000/api/hotel/getHotelsByStatus`, data)
        .then((res) => {
          //console.log(res);
          const data = res.data;
          console.log(data);
          setItems(data);
        })
        .catch((err) => {
          console.log(err);
        });
      // const total = res.headers.get("x-total-count");
      // setpageCount(Math.ceil(total / 10));
      // //console.log(total);
    };
    getpendingDetails();
  }, []);

  useEffect(() => {
    const getallDetails = () => {
      const data = {
        status: "accepted",
        page: 1,
      };
      axios
        .get(`http://localhost:8000/api/hotel/getHotelsByStatus`, data)
        .then((res) => {
          //console.log(res);
          const data = res.data;
          console.log(data);
          setItems(data);
        })
        .catch((err) => {
          console.log(err);
        });
      // const total = res.headers.get("x-total-count");
      // setpageCount(Math.ceil(total / 10));
      // //console.log(total);
    };
    getallDetails();
  }, []);
}
export default RequestManageService;