import React from "react"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Container, Row, Col, Button, Alert, Card } from "react-bootstrap"
import { useState } from "react";
import maincarimage from "../images/carmain.png"

export const MainPage = () => {

    const auth = useContext(AuthContext)
    const [show, setShow] = useState(true)
    return (
        <div className="page_basic_style">
            <h3>
                Басты бет
            </h3>
            {
                !auth.isAuthenticated ?
                    <Alert variant="danger">
                        <Alert.Heading>Құрметті клиент!</Alert.Heading>
                        <hr />
                        Cіз желіде тіркелмегенсіз! Өтінеміз, сайт ішіндегі толық ақпараттарды көре алу үшін жүйеге тіркеліңіз!
                    </Alert>
                    :
                    <Alert variant="success" show={show} onClose={() => setShow(false)} dismissible>
                        <Alert.Heading>Құрметті клиент!</Alert.Heading>
                        <hr />
                        <p>
                            Желіге қош келдіңіз!
                        </p>
                    </Alert>
            }
            <hr />
            <Container>
                <Row>
                    <Col className="col-lg-6 col-xl-6 col-xxl-6 d-lg-flex d-xl-flex justify-content-lg-end align-items-lg-center justify-content-xl-end align-items-xl-center">
                        <Row>
                            <Col className="col-lg-12 d-sm-flex justify-content-sm-end align-items-sm-center">
                                <p className="text-end d-sm-flex justify-content-sm-end align-items-sm-center">
                                    Көліктер бөлімінде сіздер көліктердің тізімін сұрыптау арқылы көре аласыздар. Толығырақ батырмасын басу арқылы бөлімге сілтеме ала аласыздар
                                </p>
                            </Col>
                            <Col className="col-lg-12 d-sm-flex justify-content-sm-end align-items-sm-center">
                                <Button href="/cars" variant="primary" type="button">Толығырақ</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="col-12 col-lg-6 col-xl-6 text-center d-lg-flex d-xl-flex justify-content-lg-start align-items-lg-center justify-content-xl-start align-items-xl-center">
                        <img className="img-fluid" src={maincarimage} alt='asd' />
                    </Col>
                </Row>
            </Container>
            <hr />
            <Container>
                <Row>
                    <Col md={12} xl={12} sm={12} lg={12} style={{ textAlign: 'center' }}>
                        <h5 > Көрсетілетін қызметтер</h5>
                    </Col>
                    <Col md={12} xl={12} sm={12} lg={12}>
                        <Row>
                            {
                                [
                                    {
                                        title: 'Жүруді жөндеу',
                                        content: 'Шасси мен рульді диагностикалау және жөндеу',
                                        img: ''
                                    },
                                    {
                                        title: 'Кузов жұмыстары',
                                        content: 'Көліктің қаңқасына жөндеу жұмыстарын жасау',
                                        img: ''
                                    },
                                    {
                                        title: 'Автоэлектрик',
                                        content: 'Көліктің компьютерлік, электрлі жұмысын жүргізу',
                                        img: ''
                                    },
                                    {
                                        title: 'Капиталды ремонт',
                                        content: 'Толықтай сервис жүргізу арқылы автокөлікті жөндеу',
                                        img: ''
                                    }

                                ].map((service, i) => (
                                    <Col key={service.title + service.content + i} style={{marginBottom: '20px'}}>
                                        <Card  style={{ width: '18rem' }}>
                                            <Card.Header  as="h5">{service.title}</Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    {service.content}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>

                    <Col md={12} xl={12} sm={12} lg={12}
                        style={{ marginTop: '20px' }}
                        className="d-flex justify-content-center 
                    d-sm-flex justify-content-sm-center 
                    d-md-flex justify-content-md-center 
                    d-lg-flex justify-content-lg-center 
                    d-xl-flex justify-content-xl-center 
                    ">
                        <Button type="buttton" variant="primary" href="/services">Толығырақ</Button>
                    </Col>
                </Row>
            </Container>
            <hr />
        </div>
    )
}