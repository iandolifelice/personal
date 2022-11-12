import {Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./../assets/css/Teaching.css";
import useInfos from "../hooks/useInfos";


function Teaching(){
    let {lang, setLang} = useInfos();
    return (
        <Container>
            <section className="teaching">
                <h2> {lang === "eng"?
                    "Teaching"
                    :lang === "fr"?
                    "Enseignement"
                    : "Insegnamento"} 
                </h2>
                <Row className='row'>
                    <Col xl={{span:7}}>
                        <p > <span className='title'> Math. pour les études scientifiques II</span>,
                            <span> 36h (exercises) 2021-2022 <br/><em>Sorbonne Université, L1</em></span>
                        </p>
                    </Col>
                </Row>
                <Row className='row'>
                    <Col xl={{span:7}}>
                        <p > <span className='title'> Topologie et calcul différentiel</span>,
                            <span> 36h (exercises) 2021-2022 <br/><em>Sorbonne Université, L2</em></span>
                        </p>
                    </Col>
                </Row>
                <Row className='row'>
                    <Col xl={{span:7}}>
                        <p > <span className='title'> Équations différentielles</span>,
                            <span> 36h (exercises) 2020-2021 <br/><em>Sorbonne Université, L2</em></span>
                        </p>
                    </Col>
                </Row>
                <Row className='row'>
                    <Col xl={{span:7}}>
                        <p > <span className='title'> Séries et séries de fonctions</span>,
                            <span> 36h (exercises) 2020-2021 <br/><em>Sorbonne Université, L2</em></span>
                        </p>
                    </Col>
                </Row>
                
                
                {/* <ul>
                    <li>36h (exercises): <span> Séries et Séries de fonctions</span>, 2020-2021, (Sorbonne U.), L2  </li>
                    <li>36h (exercises): <span>Equations différentielles </span>, 2020-2021, (Sorbonne U.), L2 </li>
                    <li>36h (exercises): <span>Topologie et calcul différentiel </span>, 2021-2022, (Sorbonne U.), L2 </li>
                    <li>36h (exercises): <span>Math. pour les études scientifiques II </span>, 2021-2022, (Sorbonne U.), L1 </li>
                </ul> */}
            </section>
        </Container>)
}

export default Teaching;