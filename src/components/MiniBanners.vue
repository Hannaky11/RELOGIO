<script>

</script>


<template>
    <div class="container" id="mini-banners-container">
        <div class="row justify-content-around">
            <div class="col-12 bg-cor-escura" id="mini-banner-1">
                <h2>Nova Coleção</h2>
                <img src="@/assets/relogio1.png" alt="Relógio 1">
                <a href="#">Compre já</a>
            </div>
            <div class="col-12 bg-cor-2" id="mini-banner-2">
                <h2>Nova Coleção</h2>
                <img src="@/assets/relogio2.png" alt="Relógio 2">
                <a href="#">Compre já</a>
            </div>
            <div class="col-12 bg-cor-1" id="mini-banner-3">
                <h2>Nova Coleção</h2>
                <img src="@/assets/relogio3.png" alt="Relógio 3">
                <a href="#">Compre já</a>
            </div>

        </div>
    </div>
</template>

<style>

#mini-banners-container{
    margin-top: 3em;
    z-index:10; 
}

#mini-banners-container .col-12{
    z-index:1;
    height: 300px;
    padding:1.5em;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
}

@media(min-width:768px){
    #mini-banners-container .col-12{
        max-width: 30%;
    }
}

#mini-banners-container .col-12 h2{
    text-transform: uppercase;
    max-width: 50%;
    font-size: 2em;
    font-weight: 700;
    line-height: 1em;
}

#mini-banners-container .col-12 img{
    height: 220px;
    position: absolute;
    right: 1em;
    bottom: 1em;
}

#mini-banners-container .col-12 a{
    font-weight: bold;
    color: #fff;
    font-size: 0.8em;
    transition: 0.5s;
}

#mini-banners-container .col-12 a:hover{
    color: #626262;
    font-family: "Roboto",sans-serif;
}

.cor-fundo-1{
    background-color: #363636;
}

.cor-fundo-2{
    background-color: #deb887;
}

.cor-1{
    color: #FFFFF0;
}

.cor-2{
    color:#ffffff;
}

body{
    background-color: #000;
}


#banners-container img{
    display: block;
    height: 550px;
    object-fit:scale-down;
    

}

</style>