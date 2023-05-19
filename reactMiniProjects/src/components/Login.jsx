import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";


function Login() {
  const [userCredential, setUserCredential] = useState({
    username: "",
    password: "",
    rememberUser: false,
  });
  const [showPass, setShowPass] = useState(false);
  const submitLoginForm = (e) => {
    e.preventDefault();
    setUserCredential(() => ({
      ...userCredential,
      username: e.target.username.value,
      password: e.target.password.value,
      rememberUser: e.target.rememberUser.value,
    }));
  };
  const togglePasswordVisibility = () => {
    setShowPass(!showPass);
  };

  const successLoginWithGoogle = (response)=>{
    console.log(response);
  }
  const failedLoginWithGoogle = (error)=>{
    console.log(error);
  }


  return (
    <Form
      className="card"
      style={{
        width: "350px",
        height: "400px",
        padding: "25px",
        marginTop: "150px",
        background: "none",
        color: '#02FF38'
      }}
      onSubmit={submitLoginForm}
    >
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" style={{borderColor: '#02FF38'}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <div className="input-group">
          <Form.Control
            type={showPass ? "text" : "password"}
            placeholder="Password"
            style={{borderColor: '#02FF38'}}
          />
          <div className="input-group-append">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="rememberUser">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
