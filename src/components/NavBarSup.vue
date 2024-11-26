<script>

</script>


<template>
 <nav class="navbar navbar-expand-lg bg-cor-1" id="navbar">
        <div class="container">
            <a href="#" class="navbar-brand cor-clara">Só Relógios</a>
            <div id="navbar-itens">
                    <form class="d-flex" id="form-pesquisa">
                        <i class="bi bi-search cor-1"></i>
                        <input type="search" class="form-control ms-3"
                        name="search" id="search" placeholder="Busque um relógio...">
                        <button class="btn bg-cor-2" type="submit">Pesquisar</button>
                    </form>
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                             <a href="/login" class="nav-link cor-clara">
                                <i class="bi bi-person"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/perfil" class="nav-link cor-clara">
                                <i class="bi bi-heart"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link cor-clara">
                                <i class="bi bi-bag"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>       
    </nav>
</template>



<style>
    .navbar-brand{
    font-weight: 700;
    width: 100%;
    text-align: center;
    }

    .navbar-brand:hover{
        color: #aea7a7;
    }

    @media(min-width:768px){
        .navbar-brand{
            text-align: left;
        }
    }

    /* Ajuste dos ícones da navbar */
    #navbar-itens{
        justify-content: space-between;
    }

    @media(min-width:768px){
        #navbar-itens{
            min-width:80%;
            display: flex;
        }
    }
    #navbar .navbar-nav{
        flex-direction: row;
        justify-content: end;
    }
    #navbar .navbar-nav li{
        margin-left: 1em;
    }
    #navbar i{
        font-size: 1.2rem;
    }
/* Ajuste da largura do form de pesquisa */
    #form-pesquisa{
        width: 100%;
        margin: 2em 0;
    }
    @media(min-width:768px){
        #form-pesquisa{
            width: 50%;
            margin:0;
        }
    }

    /* Estilizando o form de pesquisa */
    #form-pesquisa{
        border: 2px solid #626262;
        border-radius: 3px;
        padding: 5px 15px;
        
    }

    #form-pesquisa input{
        background-color: transparent;
        border: none;
        color: #fff;
    }


    #form-pesquisa input:focus{
    box-shadow: none;
    }

    #form-pesquisa input::placeholder{
        color:#fcf5eb;
    }


</style>