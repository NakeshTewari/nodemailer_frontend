import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Home = () => {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [files, setFiles] = useState(null);
  const [userEmail, setUserEmail]= useState("");
  const [appPassword, setAppPassword]= useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    console.log("email: ", email, "text: ", text, "files: ", files);
    const data = new FormData();

    data.append("email", email);
    data.append("text", text);
    data.append("file", files[0]);
    data.append("userEmail", userEmail);
    data.append("appPassword", appPassword);

    try {
      const res = await fetch("https://nodemailer-backend-2.onrender.com/send", {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        body: data,
      });
      console.log(res);


      if(res.status==200){
        alert("Email send successfully!");

    // setUserEmail("");
    // setAppPassword("");
    // setEmail("");
    // setText("");
    // setFiles(null);

    e.target.reset();
      }

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container mt-2">
        <div className="d-flex justify-content-center">
          <h2>send email with react and nodemailer </h2>
          <img
            src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
            alt="gmail photo"
            style={{ width: "50px" }}
          />
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <Form className="mt-2 col-lg" onSubmit={sendEmail}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your App Password of Gmail</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              onChange={(e) => setAppPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Reciver Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Enter text</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter text"
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Select File</Form.Label>
            <Form.Control
              type="file"
              placeholder="Enter text"
              onChange={(e) => setFiles(e.target.files)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Home;
