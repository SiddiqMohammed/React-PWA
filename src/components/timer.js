import React, { useEffect, useState } from "react";
import "./timer.css";
import jsonData from "../data/data.json";
import { db } from "../firebase";
import logo from "../img/footer.png";

// var flag = 0;

function App() {
  const [code, setCode] = useState("");

  const calculateTimeLeft = () => {};

  useEffect(() => {
    setTimeout(() => {
      // setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const handleSubmitCode = (e) => {
    e.preventDefault();
  };

  const [firstName, setFirstName] = useState("");

  const handleSubmit = (e) => {
    var d = new Date();

    e.preventDefault();

    // db.collection("session")
    //   .add({
    //     FirstName: firstName,
    //     LastName: lastName,
    //     Email: email,
    //     Number: number,
    //     dateTime: String(d),
    //     Entry: 0,
    //   })
    //   .then(() => {
    //     setTimeout(function () {
    //       window.location.reload();
    //     }, 5000);
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });
  };

  return (
    <>
      <div className="outer-div"></div>
    </>
  );
}

export default App;
