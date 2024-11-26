<script>
    import '@/assets/bootstrap.js'
</script>


<template>
    
    <!-- NAVBAR INFERIOR -->
    <nav class="navbar navbar-expand-lg bg-cor-2 p-2" id="container-navbar-inferior">
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-inferior" aria-controls="navbar-inferior" aria-expanded="false" aria-label="Botão Menu Hamburguer">
                <i class="bi bi-list"></i>
            </button>
            <ul class="navbar-nav mb-2 mb-lg-0 collapse navbar-collapse" id="navbar-inferior" >
                <li class="navbar-item">
                    <a href="/" class="nav-link">
                        Home
                    </a>
                </li>
                <li class="navbar-item">
                    <a href="/produtos" class="nav-link">
                        Catálogo
                    </a>
                </li>
                <li class="navbar-item">
                    <a href="/about" class="nav-link">
                        Quem somos
                    </a>
                </li>
                <li class="navbar-item">
                    <a href="#" class="nav-link">
                        Contato
                    </a>
                </li>
            </ul>
        </div>
    </nav>

</template>


<style>
    
    /* CSS DA NAVBAR INFERIOR */
    #container-navbar-inferior{
        margin-bottom: 4rem;
    }
    
    #container-navbar-inferior .container{
        justify-content: flex-end;
        
    }
    /* estilizando o texto dos links da navbar inferior */
    #container-navbar-inferior a{
        font-weight: 600;
        color:#fff;
    }

    .navbar-toggler{
        font-size:1.5em;
    }



</style>