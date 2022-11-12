import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./../assets/css/Footer.css";
import {Link} from "react-router-dom";
import Pdf from "./../assets/documents/cv_iandoli.pdf";

function Footer(props){
    const {setNavLink} = props;
    return (
        <section id="footer" className="footer">
            <Container>
            <Row>
                <Col md={{span:4, offset:1}}>
                    <div>
                    <h2> Felice Iandoli</h2>
                        <a id="mail" href={`mailto:feliceiandolimd@gmail.com`}>
                                feliceiandolimd@gmail.com
                        </a>
                    </div>
                </Col>
                <Col md={{span:3}}>
                    <div className='col1'>
                        <Link to={Pdf} target="_blank" rel="noopener noreferrer">CV</Link>
                        <a href="https://demacs.unical.it/" target="_blank" rel="noopener noreferrer">DEMACS</a>
                        <a href="https://scholar.google.com/citations?hl=it&user=qhxXIUIAAAAJ" target="_blank" rel="noopener noreferrer"> Google Scholar</a>
                    </div>
                </Col>
                <Col md={{span:3}}>
                    <div className='col2'>
                        <Link to = "/" onClick={()=>setNavLink("home")}> Home</Link>
                        <Link to = "/research" onClick={()=>setNavLink("research")}> Research</Link>
                        <Link to = "/teaching" onClick={()=>setNavLink("teaching")}> Teaching</Link>
                        {/* <Link> Conferences</Link> */}
                    </div>
                </Col>
            </Row>
            {/* <Row>
                
                <Col md={{span:3, offset:1}}>
                    Lieu de travail
                </Col>
            </Row>
            <Row>
                <Col md={{ span:3, offset:4}}>
                    Research
                </Col>
                <Col md={{span:3, offset:1}}>
                    Adresse mail
                </Col>
            </Row>
            <Row>
                <Col md={{ span:3, offset:4}}>
                    Teaching
                </Col>
                <Col md={{span:3, offset:1}}>
                    Google Scholar
                </Col>
            </Row>
            <Row>
                <Col md={{ span:3, offset:4}}>
                    Conferences
                </Col>
                <Col md={{span:3, offset:1}}>
                    DEMACS
                </Col>
            </Row> */}


            
            </Container>
        </section>
        
    )
}

export default Footer;