import React from "react"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Container, Row, Col, Alert, Card } from "react-bootstrap"
export const ServicesPage = () => {

    const auth = useContext(AuthContext)

    return (
        <div className="page_basic_style">
            <h3>
                Көрсетілетін қызметтер
            </h3> 
            <hr />
            {
                !auth.isAuthenticated? 
                <Alert variant="danger">
                        <Alert.Heading>Құрметті клиент!</Alert.Heading>
                        <hr />
                        Cіз желіде тіркелмегенсіз! Өтінеміз, сайт ішіндегі толық ақпараттарды көре алу үшін жүйеге тіркеліңіз!
                    </Alert> : 
                <Container>
                <Row>
                    {/* <Col md={12} xl={12} sm={12} lg={12} style={{ textAlign: 'center' }}>
                        <h5 > Көрсетілетін қызметтер</h5>
                    </Col> */}
                    <Col md={12} xl={12} sm={12} lg={12}>
                        <Row>
                            {
                                [
                                    {
                                        title: 'Жүруді жөндеу',
                                        content: 'Шасси мен рульді диагностикалау және жөндеу',
                                        img: 'https://tehservice.kz/storage/app/uploads/public/f37/154/353/thumb__260_183_0_0_auto.jpg'
                                    },
                                    {
                                        title: 'Кузов жұмыстары',
                                        content: 'Көліктің қаңқасына жөндеу жұмыстарын жасау',
                                        img: 'https://tehservice.kz/storage/app/uploads/public/c6d/5da/d4e/thumb__260_183_0_0_auto.jpg'
                                    },
                                    {
                                        title: 'Автоэлектрик',
                                        content: 'Көліктің компьютерлік, электрлі жұмысын жүргізу',
                                        img: 'https://fainaidea.com/wp-content/uploads/2017/04/remont-avto-820x530.jpg'
                                    },
                                    {
                                        title: 'Капиталды ремонт',
                                        content: 'Толықтай сервис жүргізу арқылы автокөлікті жөндеу',
                                        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUIvWJcy7XPreSTeBvkO1gZjIGasNYLUBoaA&usqp=CAU'
                                    },
                                    {
                                        title: 'ДВС-ты жөндеу',
                                        content: 'Толықтай сервис жүргізу арқылы автокөлікті жөндеу',
                                        img: 'https://tehservice.kz/storage/app/uploads/public/2e9/967/f73/thumb__260_183_0_0_auto.jpg'
                                    },
                                    {
                                        title: 'Майды ауыстыру',
                                        content: 'Толықтай сервис жүргізу арқылы автокөлікті жөндеу',
                                        img: 'https://tehservice.kz/storage/app/uploads/public/037/e7d/10f/thumb__260_183_0_0_auto.jpg'
                                    },
                                    {
                                        title: 'Жанармай форсункасы',
                                        content: 'Толықтай сервис жүргізу арқылы автокөлікті жөндеу',
                                        img: 'https://tehservice.kz/storage/app/uploads/public/037/e7d/10f/thumb__260_183_0_0_auto.jpg'
                                    },
                                    {
                                        title: 'Диагностика',
                                        content: 'Толықтай сервис жүргізу арқылы автокөлікті жөндеу',
                                        img: 'https://tehservice.kz/storage/app/uploads/public/d3c/ce7/b4e/thumb__260_183_0_0_auto.jpg'
                                    },

                                ].map(service => (
                                    <Col style={{marginBottom: '20px'}}>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Header as="h5">{service.title}</Card.Header>
                                            <img src={service.img} alt="asd" />
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
                </Row>
            </Container>
            }
        </div>
    )
}