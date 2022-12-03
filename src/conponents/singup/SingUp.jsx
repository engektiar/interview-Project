import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Leftside from "./../Leftside/Leftside";

const SingUp = () => {
  const [fname, setfanme] = useState("");
  const [lname, setlanme] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState();
  const [error, setError] = useState(false);
  const [next, setNext] = useState(1);

  console.log("next-Value", next);
  const nextStep = (type) => (e) => {
    e.preventDefault();
    console.log("e", e);
    console.log("type", type);
    setNext(next + type);
  };
  const previousStep = (e) => {
    console.log("prev", e);
    setNext(next - e);
  };
  const managenextpage = (e) => {
    e.preventDefault();
    if (fname.length == 0 || lname.length == 0) {
      setError(true);
    }
  };
  return (
    <div>
      <section>
        <Row>
          <Col md={8}>
            <Leftside />
          </Col>
          <Col md={4}>
            <div className="logingfrom">
              <h4 className=" text-center logintitle">SingUp From</h4>
              <Form onSubmit={nextStep(1)} hidden={next !== 1 ? true : false}>
                <div className="inputbox">
                  <input className="inputfiled " type="text" placeholder="Write Frist Name" value={fname} onChange={(e) => setfanme(e.target.value)} />
                  {error && fname.length <= 0 ? <label> Name can't be Empty</label> : ""}
                  <input className="inputfiled " type="text" placeholder="Write Lust Name" value={lname} onChange={(e) => setlanme(e.target.value)} />
                  {error && lname.length <= 0 ? <label> Name can't be Empty</label> : ""}
                  <div className="loginbutton">
                    <button type="submit" className="loginbtn">
                      Next Step
                    </button>
                  </div>
                </div>
              </Form>
              <Form onSubmit={nextStep(1)} hidden={next !== 2 ? true : false}>
                <div className="inputbox">
                  <input className="inputfiled " type="text" placeholder="1xxxxxxxxxx" value={number} onChange={(e) => setnumber(e.target.value)} />
                  {error && number.length <= 0 ? <label> Name can't be Empty</label> : ""}
                  <input className="inputfiled " type="email" placeholder="Write Email Address " value={email} onChange={(e) => setemail(e.target.value)} />
                  {error && email.length <= 0 ? <label> Name can't be Empty</label> : ""}
                  <div className="loginbutton back">
                    <button
                      className="backbutton"
                      onClick={() => {
                        setNext(next - 1);
                      }}
                    >
                      Back{" "}
                    </button>
                    <button type="submit" className="loginbtn">
                      Next Step
                    </button>
                  </div>
                </div>
              </Form>
              <Form onSubmit={nextStep(1)} hidden={next !== 3 ? true : false}>
                <div className="inputbox">
                  <input className="inputfiled " type="password" placeholder="Write password   " value={password} onChange={(e) => setpassword(e.target.value)} />
                  {error && email.length <= 0 ? <label> Name can't be Empty</label> : ""}
                  <div className="loginbutton back">
                    <button
                      className="backbutton"
                      onClick={() => {
                        previousStep(1);
                      }}
                    >
                      Back
                    </button>
                    <button type="submit" className="loginbtn">
                      Next Step
                    </button>
                  </div>
                </div>
              </Form>

              {/* <Form hidden={next !== 2 ? true : false}>
                <div className="inputbox">
                  <input className="inputfiled " type="text" placeholder="1xxxxxxxxxx" />
                  <input className="inputfiled " type="text" placeholder="Write Email Address " />
                  <div className="loginbutton back">
                    <button
                      className="backbutton"
                      onClick={() => {
                        previousStep(1);
                      }}
                    >
                      Back{" "}
                    </button>
                    <button className="loginbtn">Next Step</button>
                  </div>
                </div>
                <div className="inputbox" hidden={next !== 3 ? true : false}>
                  <input className="inputfiled " type="password" placeholder="Write password   " />
                  <div className="loginbutton back">
                    <button
                      className="backbutton"
                      onClick={() => {
                        previousStep(1);
                      }}
                    >
                      Back
                    </button>
                    <button className="loginbtn">Next Step</button>
                  </div>
                </div>
              </Form> */}
            </div>
            {/* totlay end sinup from  */}
            <div className="logingfrom">
              <h4 className=" text-center logintitle">Login From</h4>
              <Form>
                <div className="inputbox">
                  <input className="inputfiled " type="text" placeholder="Enter your email adderss " />
                  <input className="inputfiled " type="text" placeholder="  write  password " />
                  <div className="loginbutton back">
                    <button className="backbutton">Back </button>
                    <button className="loginbtn">Next Step</button>
                  </div>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default SingUp;
