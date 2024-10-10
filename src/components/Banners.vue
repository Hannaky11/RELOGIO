<script>

</script>


<template>
     <!-- BANNERS -->
     <div class="container" id="banners-container">
        <div class="carousel slide" id="slider" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="@/assets/banner1.jpg" alt="" class="d-block w-100">
                <div class="carousel-caption bg-cor-1">
                        <h3>Relógios com design único</h3>
                        <p>Para qualquer ocasião.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="@/assets/banner2.jpg" alt="" class="d-block w-100">
                    <div class="carousel-caption bg-cor-1">
                        <h3>Relógios com design único</h3>
                        <p>Para qualquer ocasião.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="@/assets/banner3.jpg" alt="" class="d-block w-100">
                    <div class="carousel-caption bg-cor-1">
                        <h3>Relógios finos</h3>
                        <p>Para todos os gostos.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="@/assets/banner4.jpg" alt="" class="d-block w-100">
                    <div class="carousel-caption bg-cor-1">
                        <h3>Relógios finos</h3>
                        <p>Para todos os gostos.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Próximo</span>
            </button>
        </div>
    </div>
    

</template>



<style>
    
    #banners-container{
        padding:0;
    }

    .carousel-caption{
        bottom: 5em;
        padding: 1em;
        left:12%;
        right: 12%;
    }

    .carousel-caption h5{
        font-size: 1.8em;
    }

    @media(min-width: 768px){
        #slider .carousel-item,
        #slider img{
            height: 600px;
    }
}
</style>