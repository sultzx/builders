import React from "react"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {  Alert } from "react-bootstrap"

export const AboutPage = () => {

    const auth = useContext(AuthContext)

    return (
        <div className="page_basic_style">
            <h3>
                Қосымша
            </h3> 
            <hr/>
            {
                !auth.isAuthenticated? 
                <Alert variant="danger">
                <Alert.Heading>Құрметті клиент!</Alert.Heading>
                <hr />
                Cіз желіде тіркелмегенсіз! Өтінеміз, сайт ішіндегі толық ақпараттарды көре алу үшін жүйеге тіркеліңіз!
            </Alert> : 
                <h6 style={{color: 'green'}}>Желіге қош келдіңіз!</h6>
            }
            <p>
               Бұл бөлімге мәлімет жақын арада толықтырылады 
            </p>
            
        </div>
    )
}
