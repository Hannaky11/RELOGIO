<script>
import axios from '@/axios'
export default{
    data(){
        return{
            email: "",
            senha:""

        },
    },
    methods:{
            fazerLogin(){
                try{
                const resposta = await axios.post('/api/login',{
                    email: this.email,
                    senha: this.senha
                })
                const {token} = resposta.data
                localStorage.setItem("token",token)
                this.$router.push("/catalogo")        
            } catch (erro) {
                console.log(erro)
            } finally{
                this.loading = false
            }
        }

    }   
}
</script>

<template>
    <div class="container col-11 col-md-9" id="form-container">
        <!-- GRID LAYOUT para o form row (linha) e col (colunas) -->
        <div class="row align-items-center gx-5">
            <div class="col-md-6 order-md-2">
                <h2 class="h4 mt-3">Faça o Login</h2>
                <form>
                    <div class="form-floating mb-3">
                        <input type="email" name="email" id="email" v-model="email"
                        class="form-control" placeholder="Digite o seu e-mail">
                        <label for="email" class="form-label">Digite o seu e-mail</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" name="password" id="password" v-model="senha" 
                        class="form-control" placeholder="Digite a senha">
                        <label for="password" class="form-label">Digite a senha</label>
                    </div>
                    <button type="button" class="btn btn-primary" @click="fazerLogin">Entrar</button>
                </form>
            </div>
            <div class="col-md-6 order-md-1">
                <div class="col-12" >
                    <img src="@/assets/undraw_login_re_4vu2.svg" alt="Entrar com sua conta" class="img-fluid">
                </div>
                <div class="col-12" id="link-container">
                    <a href="registro.html">Ainda não tenho cadastro</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
body {
    font-family: "Roboto", sans-serif;
    background-color: #f8f8f8;
}

/* Estilos para o container do formulário */
#form-container {
    background-color: #fff;
    border-radius: 20px;

    /* Sombreamento: horizontal, vertical, espalhamento (borrão), cor rgba e opacidade */
    box-shadow: .5px 10px 15px rgba(0, 0, 0, .2);

    margin: 25px auto;
    padding: 25px;
}

/* Estilo para o Título */
#form-container h2 {
    font-weight: 900;
    margin-bottom: 30px;
}

/* Padding no form */
#form-container form {
    padding-bottom: 50px;
}



/* RESTILIZANDO OS INPUTS PARA REMOVER BORDAS */

#form-container .form-control {
    border: none;
    border-bottom: 1px solid #CCC;
    border-radius: 0;
}

#form-container .form-control:focus {
    box-shadow: none;
}


/* ESTILO PARA OS LABELS */

#form-container .form-floating label {
    color: #CCC;
}

#form-container .form-floating>.form-control:focus~label {
    color: #222;
}

/* IMAGEM */
.row .align-items-center{
    align-content: center;
    height: 100%;
    padding: 75px 0;
}

/* Estilos para o link */

#link-container{
    text-align: center;
    padding-top: 50px; 
}


#link-container a {
    color: #222;
    font-size: 0.9rem;
    transition: .5s;
}


#link-container a:hover {
    color: blue;
}

</style>