import useInfos from "../hooks/useInfos";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./../assets/css/Header.css";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";



function Header(props){
    const {navLink, setNavLink} = props;
    let {lang, setLang} = useInfos();

    const [classLink, setClassLink] = useState({research: "navLink", teaching:"navLink", conferences:"navLink"});

    useEffect(()=>{
        const classes={research: "navLink", teaching:"navLink", conferences:"navLink"};
        setClassLink({...classes, [navLink]:"navLink orangeClass"});
    }, [navLink]);


    console.log(lang);
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Link id="feliceHome" to="/personal" name="home" onClick={(e)=>setNavLink(e.target.name)}>Felice Iandoli</Link>
                
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className={classLink.research} to="/personal/research" name="research" onClick={(e)=>setNavLink(e.target.name)}> {lang === "eng" ? "Research" : lang === "fr" ? "Recherche" : "Ricerca"} </Link>
                        <Link className={classLink.teaching} to="/personal/teaching" name="teaching" onClick={(e)=>setNavLink(e.target.name)}> {lang === "eng" ? "Teaching" : lang === "fr" ? "Enseignement" : "Insegnamento"} </Link>
                        {/* <Link className={classLink.conferences} to="/conferences" name="conferences" onClick={(e)=>setNavLink(e.target.name)}> {lang === "eng" ? "Conferences" : lang === "fr" ? "Conférences" : "Conferenze"} </Link> */}
                    </Nav>
                    <Nav>
                    <NavDropdown title="Language" id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={()=>setLang("eng")}>English </NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>setLang("fr")}> Français </NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>setLang("ita")}> Italiano </NavDropdown.Item>                            
                </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                
                
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               
            </Container>
        </Navbar>


        // <nav class="navbar navbar-expand-lg navbar-light bg-light">
        //     <Link className="navbar-brand" to="/">Felice Iandoli</Link>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //       <span className="navbar-toggler-icon"></span>
        //     </button>

        //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //         <ul className="navbar-nav mr-auto">
        //             <li class="nav-item active">
        //             <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        //           </li>
        //           <li class="nav-item">
        //             <a class="nav-link" href="/">Link</a>
        //           </li>

        //         </ul>
        //     </div>
        // </nav>
        // {/* <Container>
        //     <Row className="navbar">
        //         <Col sm={{span: "auto", offset:1}} >
        //             <Link id="feliceHome" to={"/"}> Felice Iandoli</Link>
        //         </Col>
        //         <Col sm={{span: "auto", offset:2}}>
        //             <a id="cv" href = {Pdf} target = "_blank" rel="noreferrer">CV</a>
        //         </Col>
        //         <Col sm={{span:"auto"}}>
        //             <Link to={"/conferences"}> {lang === "eng" ? "Conferences" : lang === "fr" ? "Conférences" : "Conferenze"} </Link>
        //         </Col>
        //         <Col sm={1}>
        //             <Link to="/research"> {lang === "eng" ? "Research" : lang === "fr" ? "Recherche" : "Ricerca"} </Link>
        //         </Col>
        //         <Col sm={1}>
        //             <Link to="/teaching"> {lang === "eng" ? "Teaching" : lang === "fr" ? "Enseignement" : "Insegnamento"} </Link>
        //         </Col>
        //         <Col sm={2}>
        //             <button onClick={()=>setLang("eng")}> Eng </button>
        //             <button onClick={()=>setLang("fr")}> Fr </button>
        //             <button onClick={()=>setLang("ita")}> Ita </button>
        //         </Col>
        //     </Row>
        // </Container> */}
        
    )
}
{/* <img src={process.env.PUBLIC_URL + '/images/fuffa.jpeg'} alt="Felice" /> */}
export default Header;