<template>
    <!-- Header Start -->
    <div class="container-fluid bg-dark px-0">
            <div class="row gx-0">
                <div class="col-lg-3 bg-dark d-none d-lg-block">
                    <router-link to="/" class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                        <h1 class="m-0 text-primary text-uppercase">CleanUp</h1>
                    </router-link>
                </div>
                <div class="col-lg-9">
                    <div class="row gx-0 bg-white d-none d-lg-flex">
                        <div class="col-lg-7 px-5 text-start">
                            <div class="h-100 d-inline-flex align-items-center py-2 me-4">
                                <i class="fa fa-envelope text-primary me-2"></i>
                                <p class="mb-0">info@example.com</p>
                            </div>
                            <div class="h-100 d-inline-flex align-items-center py-2">
                                <i class="fa fa-phone-alt text-primary me-2"></i>
                                <p class="mb-0">+012 345 6789</p>
                            </div>
                        </div>
                        <div class="col-lg-5 px-5 text-end">
                            <div class="d-inline-flex align-items-center py-2">
                                <a class="me-3" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="me-3" href=""><i class="fab fa-twitter"></i></a>
                                <a class="me-3" href=""><i class="fab fa-linkedin-in"></i></a>
                                <a class="me-3" href=""><i class="fab fa-instagram"></i></a>
                                <a class="" href=""><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                            <router-link to="/" class="navbar-brand d-block d-lg-none">
                            <h1 class="m-0 text-primary text-uppercase">CleanUp</h1>
                            </router-link>
                        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div class="navbar-nav mr-auto py-0">
                                <router-link :to="{ name: 'Home' }" class="nav-item nav-link active">Home</router-link>
                                <router-link :to="{ name: 'About' }" class="nav-item nav-link">About</router-link>
                                <router-link :to="{ name: 'Services' }" class="nav-item nav-link">Services</router-link>
                                <router-link :to="{ name: 'Contact' }" class="nav-item nav-link">Contact</router-link>
                            </div>
                            <router-link :to="{ name: 'Login' }" class="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">Book Now<i class="fa fa-arrow-right ms-3"></i></router-link>
                        </div>
                    </nav>
                </div>
            </div>
    </div>
    <!-- Header End -->
</template>



<script>
    export default {
    name: 'HeaderSection',
    }
</script>



<style>
</style>