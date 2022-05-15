import React, { useState } from "react";
import { Card, Form, Button, Alert} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../contexts/AuthContext";

const Login = () => {
    const [state, setState] = useState({
        Name: "",
        Email: "",
        Password: "",
        Number: ""
      });
  
  const navigate = useNavigate();

  const { logIn } = useUserAuth;
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.Name || !state.Email || !state.Password || !state.Number) {
      setError("please fill all the input fields");
    } else {
      setError("")
      navigate("/Home");
    }


  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">LogIn Form</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter the Name"
                onChange={(e) =>
                    setState({ ...state, Name: e.target.value })
                  }
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e) =>
                    setState({ ...state, Email: e.target.value })
                  }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) =>
                    setState({ ...state, Password: e.target.value })
                  }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Ph No</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter the Number"
                onChange={(e) =>
                    setState({ ...state, Number: e.target.value })
                  }
              />
            </Form.Group>
            <Button type="Submit" className="mt-4">LOG IN</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};
export default Login;
