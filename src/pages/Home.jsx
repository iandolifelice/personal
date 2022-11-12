import useInfos from "./../hooks/useInfos";
import "./../assets/css/Home.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Pdf from "./../assets/documents/cv_iandoli.pdf";

function Home(){
    let {lang} = useInfos();
    return (
        <Container className="home">
            <Row className="rowHome">
                <Col sm={{span:1, offset:1}} md={{span:4, offset:1}} lg={{span:1, offset:2}} xl={{span:3, offset:2}}>
                    <img src={process.env.PUBLIC_URL + '/images/fuffa.jpeg'} 
                    alt="Felice" 
                    onMouseEnter={(e)=>e.target.src=process.env.PUBLIC_URL + '/images/fuffa2.jpg'}
                    onMouseLeave={(e)=>e.target.src=process.env.PUBLIC_URL + '/images/fuffa.jpeg'}/>
                    </Col>
                <Col sm={{span:4, offset:1}} md={{span:6, offset:1}} lg={{span:5, offset:2}} xl={{span:5, offset:0}} className="contact">
                    <h2> 
                        {lang === "eng" ? 
                            "Ricercatore di tipo B"
                            : lang === "fr"?
                            "Ricercatore di tipo B"
                            : "Ricercatore di tipo B"
                        }
                    </h2>
                    <h4>
                    {lang === "eng" ? 
                            "Assistant professor"
                            : lang === "fr"?
                            "Assistant professor"
                            : "Assistant professor"
                        }
                    </h4>
                    <p> Dipartimento di Matematica ed Informatica (<a href="https://demacs.unical.it/" target="_blank" rel="noopener noreferrer">DEMACS</a>) <br/> Università della Calabria </p>
                    <div className="divMail">
                        <a className="CV" id="mail" href={`mailto:feliceiandolimd@gmail.com`}>
                            feliceiandolimd@gmail.com
                        </a>
                        <Link className="CV" to={Pdf} target="_blank" rel="noopener noreferrer">CV</Link>
                    </div>
                    
                    
                </Col>
            </Row>
            <Row>
                <Col sm={{span:10, offset:1}} md={{span:10, offset:1}} xl={{span:8, offset:2}}> 
                {lang === "eng" ? 
                            <p id="description">My research follows two paths. The first is concerned with the long time 
                                existence and stability of non-linear equations on compact manifolds, with 
                                particular interest to quasi-linear equations. The main tools used in this context 
                                are Birkhoff normal forms, microlocal analysis (in particular the paradifferential 
                                calculus á la Bony) and tools from number theory such as diophantine estimates. 
                                The second path concerns the dispersive estimates for solutions of linear equations 
                                in two cases: the wave equation considered in exterior domains and the Schrödinger 
                                equation perturbed with singular potentials (δ-type). The techniques used in this 
                                case come from harmonic and microlocal analysis.
                            </p>
                            : lang === "fr"?
                            <p> Ma recherche suit principalement deux chemins. Le premier étudie l'existence à long
                                terme et la stabilité d'equations non-linéaires sur variétés compactes, avec
                                intérêt particulier sur les equations quasi-linéaires. Les outils le plus utilisés
                                dans ce contexte sont les formes normales de Birkhoff, l'analyse mycrolocale (en 
                                particulier le calcul paradifférentiale à la Bony), comme aussi des résultats de la 
                                théorie des nombres comme les estimations diophantines.
                                Le deuxième chemin s'occupe des estimations dispersives des solutions 
                                d'équations linéaires en deux cas particuliers: l'équation "wave" considérée en 
                                domaines extérieurs et l'équation de Schrödinger perturbée avec des potentiels 
                                singuliers (δ-type). Les techniques utilisées dans ce cas, ont origine dans 
                                l'analyse harmonique et mycrolocale. 
                            </p>
                            : 
                            <p>
                                I miei lavori seguono due filoni principali. Nel primo, mi occupo dell'esistenza a lungo
                                termine e della stabilità delle equazioni non-lineari su varietà compatte, con particolare 
                                interesse alle equazioni quasi-lineari. Gli strumenti più utilizzati in questo 
                                contesto sono le forme normali di Birkhoff, l'analisi microlocale (in particolare
                                il calcolo paradifferenziale alla Bony), come anche dei risultati di teoria dei numeri, come
                                le stime diofantine. Nel secondo filone di ricerca mi occupo delle stime dispersive per le 
                                soluzioni di equazioni lineari in due casi particolari: l'equazione "wave" considerata in 
                                dominii esterni e l'equazione di Schrödinger perturbata con dei potenziali singolari (δ-type).
                                Le tecniche usate maggiormente in questo caso provengono dall'analisi armonica e microlocale. 
                            </p>
                        }
                
                </Col>
            </Row>
            
        </Container>
    )
}

export default Home;