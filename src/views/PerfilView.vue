<script>
import axios from '@/axios'
export default{

    data(){
        return{
            nome: "",
            email: "",
            senha:""

        }
    },
    methods:{
        async buscarCliente(){
            try{
                const {nome,email,senha} = await axios.get('clientes/user/jada')
                console.log (nome,email,senha)                            


            } catch (erro) {
                console.log(erro)
            } 
        

        }
    },
    mounted(){
        this.buscarCliente()
    }
}
</script>

<template>
    
        <div class="container col-11 col-md-9" id="form-container">
        <!-- GRID LAYOUT para o form row (linha) e col (colunas) -->
        <div class="row align-items-center gx-5">
            <div class="col-md-6 order-md-2">
                <h2 class="h4 mt-3">Seu Perfil</h2>
                <form>
                    <div class="form-floating mb-3">
                        <input type="text" name="nome" id="nome" v-model="nome"
                        class="form-control" placeholder="Digite o seu nome">
                        <label for="email" class="form-label">Digite o seu nome</label>
                    </div>
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
                </form>
            
            </div></div></div>
    


</template>

<style scoped>

body {
    font-family: "Roboto", sans-serif;
    background-color: #f8f8f8;
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


</style>
