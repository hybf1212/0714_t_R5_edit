import React from 'react';
import { Nav , Navbar} from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';

const Header = () => {
  // const supportname = [
  //   {link : "#", name : "지구본"},
  //   {link : "#", name : "고객지원"},
  //   {link : "#", name : "TEL - 00000000"}
  // ]
  const gnbname = [
    {link : "#event", name : "이벤트"},
    {link : "#contents", name : "제품소개"},
    {link : "#detail-spec", name : "상세스펙"},
    {link : "#", name : "스토어"}
  ]
  return (
    <>
     <Navbar expand="lg" id='hd' className='d-flex flex-wrap justify-content-between fixed-top py-0 '>
      
      <div className='col-12 text-center border-bottom'>광고페이지 전화번호삽입</div>
      <div className="container-lg">
        
      
       <h1 className='toplogo mb-0'><Navbar.Brand href="/" className='d-block'><img src="./LG-logo.png" alt="logo" className='img-fluid d-block' /></Navbar.Brand></h1>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className='justify-content-end'>
            <Nav>
              <Scrollspy
                items={['section1', 'section2', 'section3']}  // Replace with your section IDs
                currentClassName="active"
                offset={-100}  // Adjust the offset as needed
                componentTag="ul"
                className='gnb d-flex'
              >

                {
                  gnbname.map( (v, x) =>{
                    return <li><Nav.Link href={v.link}>{v.name}</Nav.Link></li>
                  })
                }             
              
            
              </Scrollspy>
            </Nav>
        </Navbar.Collapse>
        </div>
    </Navbar>
    


      
       
        {/* <div className='d-flex flex-column align-items-end'>
          <ul className='support d-flex'>
            {
              supportname.map( (v, x) =>{
                  return <li className='ms-4'><a href={v.link}>{v.name}</a></li>
                }
              )
            }              
          </ul>                   
          <ul className='gnb d-flex'>
            {
              gnbname.map( (v, x) =>{
                return <li><a href={v.link}>{v.name}</a></li>
              })
            }        
          </ul>    
        </div> */}
     
      {/* <div className='mainbanner'>
        <img src="./img/R5-mainbanner.png" alt="mainbanner" />
      </div>
      <a className='kakao-link' href="#"><img src="./img/kakao-img.png" alt="kakaotalk" /></a> */}
    </>
  );
};

export default Header