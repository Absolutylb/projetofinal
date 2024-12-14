import React from "react";
import '../styles/Cadastro.css'
import Logo from '../img/logo.png';
import Main from '../img/main.png';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
    return(
        <div className="bodyLogin">
            <Header/>
            <div className="imageContainer">
                <img src={Main} alt="Foto ilustrativa Pousada ypua" className="imageBelowHeader" />
            </div>
            <main>
                <div className="container">
                    <div className="left-section">
                        <h4>Pousada Quinta do Ypuá</h4>
                        <h2>Faça seu Registro agora mesmo!</h2>
                        
                        
                        
                    </div>
                    <div className="right-section">
                        <h2>Registre-se</h2>
                        <p>Preencha seus dados</p>
                        <form>
                            <div className="form-group">
                                <label for="email"></label>
                                <input type="email" id="email" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <label for="email"></label>
                                <input type="email" id="email" placeholder="Confirme seu Email"/>
                            </div>
                            <div className="form-group">
                                <label for="senha"></label>
                                <input type="password" id="senha" placeholder="Senha"/>
                            </div>
                            <div className="form-group">
                                <label for="senha"></label>
                                <input type="password" id="senha" placeholder="Confirme sua Senha"/>
                            </div>
                            <div className="form-group">
                                <label for="senha"></label>
                                <input type="tel" id="telefone" placeholder="Digite seu Numero"/>
                            </div>
                           
                            <button className="buttonJoin">Registrar</button>
                        </form>
                        <div className="buttons">
                            
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Login;