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
                              <router-link to="/" class="nav-item nav-link active">Home</router-link>
                              <router-link :to="{ name: 'About' }" class="nav-item nav-link">About</router-link>
                              <router-link to="/services" class="nav-item nav-link">Services</router-link>
                              <router-link to="/contact" class="nav-item nav-link">Contact</router-link>
                          </div>
                          <router-link to="/booking" class="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">Book Now<i class="fa fa-arrow-right ms-3"></i></router-link>
                      </div>
                  </nav>
              </div>
          </div>
  </div>
  <!-- Header End -->

  <router-view></router-view>

  <!-- Footer Start -->
  <div class="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
              <div class="container pb-5">
                  <div class="row g-5">
                      <div class="col-md-6 col-lg-4">
                          <div class="bg-primary rounded p-4">
                              <a href="index.html"><h1 class="text-white text-uppercase mb-3">Hotelier</h1></a>
                              <p class="text-white mb-0">
                  Download <a class="text-dark fw-medium" href="https://htmlcodex.com/hotel-html-template-pro">Hotelier – Premium Version</a>, build a professional website for your hotel business and grab the attention of new visitors upon your site’s launch.
                </p>
                          </div>
                      </div>
                      <div class="col-md-6 col-lg-3">
                          <h6 class="section-title text-start text-primary text-uppercase mb-4">Contact</h6>
                          <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                          <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                          <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                          <div class="d-flex pt-2">
                              <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                              <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                              <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                              <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                          </div>
                      </div>
                      <div class="col-lg-5 col-md-12">
                          <div class="row gy-5 g-4">
                              <div class="col-md-6">
                                  <h6 class="section-title text-start text-primary text-uppercase mb-4">Company</h6>
                                  <a class="btn btn-link" href="">About Us</a>
                                  <a class="btn btn-link" href="">Contact Us</a>
                                  <a class="btn btn-link" href="">Privacy Policy</a>
                                  <a class="btn btn-link" href="">Terms & Condition</a>
                                  <a class="btn btn-link" href="">Support</a>
                              </div>
                              <div class="col-md-6">
                                  <h6 class="section-title text-start text-primary text-uppercase mb-4">Services</h6>
                                  <a class="btn btn-link" href="">Food & Restaurant</a>
                                  <a class="btn btn-link" href="">Spa & Fitness</a>
                                  <a class="btn btn-link" href="">Sports & Gaming</a>
                                  <a class="btn btn-link" href="">Event & Party</a>
                                  <a class="btn btn-link" href="">GYM & Yoga</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="container">
                  <div class="copyright">
                      <div class="row">
                          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                              &copy; <a class="border-bottom" href="#">Your Site Name</a>, All Right Reserved. 
                
                <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                              <br>Distributed By: <a class="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>
                          </div>
                          <div class="col-md-6 text-center text-md-end">
                              <div class="footer-menu">
                                  <a href="">Home</a>
                                  <a href="">Cookies</a>
                                  <a href="">Help</a>
                                  <a href="">FQAs</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
  </div>
  <!-- Footer End -->
</template>

<script>
</script>

<style>

</style>
