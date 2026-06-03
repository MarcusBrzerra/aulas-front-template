import "tailwindcss";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";

function Email(){
    return (
        <main>
            <form class="box-login">
                <h2>Login</h2>
                
                {/* <label for="usuario">Usuário</label> */}
                {/* <input type="text" id="usuario" name="usuario" placeholder="Digite seu usuário" required> */}
                <InputEmail />
                <InputSenha />
                {/* <label for="senha">Senha</label> */}
                {/* <input type="password" id="senha" name="senha" placeholder="Sua senha" required> */}
                
                <button type="submit">Entrar</button>
            </form>
    </main>
    )
}

export default Email;