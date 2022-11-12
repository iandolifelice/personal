
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./../assets/css/Research.css";
import useInfos from "../hooks/useInfos";
import {useState, useEffect} from 'react';
import {FaPaw, FaPepperHot, FaAppleAlt, FaBold, FaCat, FaCrow, FaCamera, FaBomb, FaDog, FaFire} from 'react-icons/fa';
import { IconContext } from "react-icons";

function Research(){
    let {lang, setLang} = useInfos();
    const [avecEt, setAvecEt] = useState({avec:"with", et:"and"});


    useEffect(()=>{
        if (lang=== "eng"){
            setAvecEt({avec:"with", et: "and"});
        }
        else if (lang === "fr"){
            setAvecEt({avec:"avec", et: "et"});
        }
        else setAvecEt({avec:"con", et: "e"});
    }, [lang]);


    return (
        <IconContext.Provider value={{color:"#fb7521", size:"1.3rem" }}>
    <Container>
        <section className='research'> 
            <h2>{lang === "eng" ? "Articles published or accepted by a peer-reviewed journal"
            : 
            lang === "fr"? 
            "Articles publiés, ou acceptés, dans des revues à comité de lecture"
            : "Articoli pubblicati o accettati da un giornale peer-reviewed"}</h2>
            <Row className='row'>
                <Col xl={{span:7, offset:1}} xs={{span:12}} sm={{span:10, offset:1}} md={{span:10}} lg={{span:10, offset:1}}>
                    <p className='title'> <span className='icon'><FaPaw width="!2em"/></span> Long time solutions for quasi-linear Hamiltonian perturbations of Schrödinger and Klein-Gordon equations on tori</p> 
                    <p>
                        {avecEt.avec} R. Feola {avecEt.et} B. Grébert.<br/>
                        <span>À paraître sur <em>Analysis and PDES </em></span>
                    </p>
                    <div className='buttons'>
                        <a 
                            className='arxiv' 
                            href="https://arxiv.org/abs/2009.07553" 
                            target="_blank" 
                            rel="noopener noreferrer"> arXiv
                        </a>
                    </div>
                </Col>
            </Row>
            <Row className='row'>
                <Col xl={{span:7, offset:1}} xs={{span:12}} sm={{span:10, offset:1}} md={{span:10}} lg={{span:10, offset:1}} >
                    <p className='title'> <span className='icon'><FaPepperHot/></span> Local well-posedness for quasi-linear NLS with large Cauchy data on the circle</p>
                    <p> {avecEt.avec} R. Feola.<br/>
                    <span> <em>Annali della scuola Normale Superiore di Pisa</em> (Classe di Scienze).</span></p>
                    <div className='buttons'>
                        <a 
                            className='arxiv' 
                            href="https://arxiv.org/abs/1806.03437" 
                            target="_blank" 
                            rel="noopener noreferrer"> arXiv
                        </a>
                        <a 
                            className='arxiv' 
                            href="https://www.sciencedirect.com/science/article/abs/pii/S0294144918300428" 
                            target="_blank" 
                            rel="noopener noreferrer"> Journal
                        </a>
                    </div>
                </Col>
                
            </Row>
            <Row className='row'>
                <Col xl={{span:7, offset:1}} xs={{span:12}} sm={{span:10, offset:1}} md={{span:10}} lg={{span:10, offset:1}}>
                    <p className='title'><span className='icon'><FaAppleAlt/></span> Long time existence for fully nonlinear NLS with small Cauchy data on the circle</p>
                    <p> 
                        {avecEt.avec} R. Feola.<br/>
                        <span> <em>Annali della scuola Normale Superiore di Pisa</em> (Classe di Scienze).</span>
                    </p>
                    <div className='buttons'>
                        <a 
                            className='arxiv'
                            href="https://arxiv.org/abs/1806.03437" 
                            target="_blank" 
                            rel="noopener noreferrer"> arXiv
                        </a>
                        <a 
                            className='arxiv' 
                            href="https://journals.sns.it/index.php/annaliscienze/article/view/777" 
                            target="_blank" 
                            rel="noopener noreferrer"> Journal
                        </a>
                    </div>
                </Col>
            </Row>
            <Row className='row'>
                <Col xl={{span:7, offset:1}} xs={{span:12}} sm={{span:10, offset:1}} md={{span:10}} lg={{span:10, offset:1}}>
                    <p className='title'> <span className='icon'><FaBold/></span>Long-time existence for semi-linear beam equations on irrational tori</p>
                    <p>
                        {avecEt.avec} J. Bernier, B. Grébert {avecEt.et} R. Feola. <br/>
                        <span> <em>Journal of dynamics and differential equation.</em> </span>
                    </p>
                    <div className='buttons'>
                        <a 
                            className='arxiv' 
                            href="https://arxiv.org/abs/2011.02345" 
                            target="_blank" 
                            rel="noopener noreferrer"> arXiv
                        </a>
                        <a 
                            className='arxiv' 
                            href="https://a.springer.com/article/10.1007/s10884-021-09959-3?wt_mc=Internal.Event.1.SEM.ArticleAuthorOnlineFirst&utm_source=ArticleAuthorOnlineFirst&utm_medium=email&utm_content=AA_en_06082018&ArticleAuthorOnlineFirst_20210302" 
                            target="_blank" 
                            rel="noopener noreferrer"> Journal
                        </a>
                    </div>
                </Col>
            </Row>
            <Row className='row'>
                <Col xl={{span:7, offset:1}} xs={{span:12}} sm={{span:10, offset:1}} md={{span:10}} lg={{span:10, offset:1}}>
                    <p className='title'><span className='icon'><FaCat/></span> Local well-posedness for the quasi-linear Schrödinger equation on tori</p>
                    <p> 
                        {avecEt.avec} R. Feola. <br/>
                        <span> <em> Journal de Mathématiques pures et appliquées</em> </span>
                    </p>
                    <div className='buttons'>
                        <a 
                            className='arxiv' 
                            href="https://arxiv.org/pdf/2003.04815.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"> arXiv
                        </a>
                        <a className='arxiv' 
                            href="https://www.sciencedirect.com/science/article/abs/pii/S0021782421001707" 
                            target="_blank" 
                            rel="noopener noreferrer"> Journal
                        </a>
                    </div>
                </Col>
            </Row>
            <Row className='row'>
                <Col xl={{span:7, offset:1}} xs={{span:12}} sm={{span:10, offset:1}} md={{span:10}} lg={{span:10, offset:1}}> 
                    <p className='title'> <span className='icon'><FaCrow/></span> Long-time stability of the quantum hydro-dynamic system on irrational tori</p>
                    <p>
                        {avecEt.avec} R. Feola {avecEt.et} F. Murgante. <br/>
                        <span> <em>Mathematics in Engineering</em></span>
                    </p>
                    <div className='buttons'>
                        <a className='arxiv' 
                            href="https://arxiv.org/abs/2105.07243" 
                            target="_blank" 
                            rel="noopener noreferrer"> arXiv
                        </a>
                        <a className='arxiv' 
                            href="https://www.aimspress.com/article/doi/10.3934/mine.20220230" 
                            target="_blank" 
                            rel="noopener noreferrer"> Journal
                        </a>
                    </div>
                </Col>
            </Row>
            <Row className='row'>
                <Col xl={{span:7, offset:1}} xs={{span:12}} sm={{span:10, offset:1}} md={{span:10}} lg={{span:10, offset:1}}> 
                    <p className='title'> <span className='icon'><FaCamera/></span>Dispersive estimates for Schrödinger operators with point Interactions in ℝ^3</p>
                    <p> 
                        {avecEt.avec} R. Scandone.  <br/>
                        <span> <em>Advances in Quantum Mechanics: Contemporary Trends and Open Problems.</em> </span>
                    </p>
                    <div className='buttons'>
                        <a 
                            className='arxiv' 
                            href="https://arxiv.org/abs/1703.10194" 
                            target="_blank" 
                            rel="noopener noreferrer"> arXiv
                        </a>
                        <a 
                            className='arxiv' 
                            href="https://a.springer.com/chapter/10.1007/978-3-319-58904-6_110" 
                            target="_blank" 
                            rel="noopener noreferrer"> Journal
                        </a>
                    </div>
                </Col>
            </Row>
            
        </section>
        <section className='research'> 
            <h2>{lang==="eng"?
            "Articles submitted to a peer-reviewed journal"
            :lang === "fr" ?
            "Articles soumis dans des revues à comité de lecture"
            :"Articoli proposti a un giornale peer-reviewed"}</h2>
            
            <Row className='row'>
                <Col xl={{span:7, offset:1}} xs={{span:12}} sm={{span:10, offset:1}} md={{span:10}} lg={{span:10, offset:1}}> 
                <p className='title'> 
                    <span className='icon'><FaBomb/></span>
                    A non-linear Egorov theorem and Poincaré-Birkhoff normal forms for quasi-linear PDEs on the circle
                </p>
                <p> {avecEt.avec} R. Feola </p>
                <div className='buttons'>
                    <a className='arxiv' href="https://arxiv.org/abs/2002.12448"> arXiv</a>
                </div>
                </Col>
            </Row>
            <Row className='row'>
                <Col xl={{span:7, offset:1}} xs={{span:12}} sm={{span:10, offset:1}} md={{span:10}} lg={{span:10, offset:1}}> 
                    <p className='title'> 
                        <span className='icon'><FaDog/></span>
                        On the Cauchy problem for quasi-linear Hamiltonian KdV type equations
                    </p>
                    <div className='buttons'>
                        <a className='arxiv' href="https://arxiv.org/abs/2202.06710"> arXiv</a>
                    </div>
                </Col>
            </Row>
            <Row className='row'>
                <Col xl={{span:7, offset:1}} xs={{span:12}} sm={{span:10, offset:1}} md={{span:10}} lg={{span:10, offset:1}}>
                    <p className='title'> 
                        <span className='icon'><FaFire/></span>
                        Dispersive estimates for the wave equation outside of a cylinder in ℝ^3
                    </p>
                    <p>{avecEt.avec} O. Ivanovici</p>
                    <div className='buttons'>
                        <a className='arxiv' href="https://hal.archives-ouvertes.fr/hal-0362548"> arXiv</a>
                    </div>
                </Col>
            </Row>
        </section>
        <section className="research lien">
            <p> {lang==="eng" ? "Useful links"
            : 
            lang ==="fr" ? "Liens utiles"
            : "Link utili"}: <a href="https://scholar.google.com/citations?hl=it&user=qhxXIUIAAAAJ"
                                target="_blank" 
                                rel="noopener noreferrer"> Google Scholar</a></p>
        </section>
    </Container>
    </IconContext.Provider>)
}

export default Research;