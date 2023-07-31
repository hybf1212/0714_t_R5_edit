import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';


const Header = () => {
  // const supportname = [
  //   {link : "#", name : "지구본"},
  //   {link : "#", name : "고객지원"},
  //   {link : "#", name : "TEL - 00000000"}
  // ]
  const gnbname = [
    { link: "event", tname: "이벤트" },
    { link: "contents", tname: "제품소개" },
    { link: "detail-spec", tname: "상세스펙" },
    { link: "store", tname: "스토어" }
  ];

  const linknm =  gnbname.map((v, i)=>{
    return v.link
  })



  

 

  return (
    <>
      <Navbar expand="lg" id="hd" className="d-flex flex-wrap fixed-top py-0">
        <div className="col-12 text-center border-bottom">Phone Number for Advertisement Page</div>
        <div className="container-lg">
          <h1 className="toplogo mb-0">
            <Navbar.Brand href="/" className="d-block">
              <img src="./img/LG-logo.svg" alt="logo" className="top-logo img-fluid d-block" />
            </Navbar.Brand>
          </h1>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav>
              <Scrollspy
                items={linknm}
                currentClassName="active"
                offset={-100}
                componentTag="ul"
                className="gnb d-flex"
              >
                {gnbname.map((item, index) => (
                  <li key={index}>
                    <Nav.Link href={`#${item.link}`}>{item.tname}</Nav.Link>
                  </li>
                ))}
              </Scrollspy>
            </Nav>
          </Navbar.Collapse>
          <div>
            <ul>
              <li><a href=""><i class="bi bi-cart2"></i></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
            </ul>
          </div>
        </div>
      </Navbar>
    </>
         
     
  );
};

export default Header