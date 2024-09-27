import { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Authorize() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitDataForm = (event) => {
    event.preventDefault();
    localStorage.setItem(
      name,
      JSON.stringify({ userName: name, userPassword: password })
    );
    alert("Пользователь авторизован");
    setName("");
    setPassword("");
    navigate("/main");
  };

  return (
    <>
      <Container
        fluid
        className="m-0 bg-dark text-white d-flex flex-column justify-content-center align-items-center vh-100"
      >
        <h1 className="display-1">Sing in</h1>
        <Form className="w-50" onSubmit={submitDataForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="lead">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Add Your Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}
