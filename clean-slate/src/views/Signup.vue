<template>

    <!-- Page Header Start -->
    <div class="container-fluid page-header mb-5 p-0" style="background-image: url(/Assets/img/carousel-1.jpg);">
            <div class="container-fluid page-header-inner py-5">
                <div class="container text-center pb-5">
                    <h1 class="display-3 text-white mb-3 animated slideInDown">Booking</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center text-uppercase">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">Signup</li>
                        </ol>
                    </nav>
                </div>
            </div>
    </div>
    <!-- Page Header End -->

    <!-- Signup Start -->
    <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="section-title text-center text-primary text-uppercase">Signup</h6>
                    <h1 class="mb-5">Book A <span class="text-primary text-uppercase">Cleaning Service</span></h1>
                </div>
                <div class="row g-5">
                    <div class="col-lg-6">
                        <div class="row g-3">
                            <div class="col-6 text-end">
                                <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="/Assets/img/about-1.jpg" style="margin-top: 25%;">
                            </div>
                            <div class="col-6 text-start">
                                <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="/Assets/img/about-2.jpg">
                            </div>
                            <div class="col-6 text-end">
                                <img class="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="/Assets/img/about-3.jpg">
                            </div>
                            <div class="col-6 text-start">
                                <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="/Assets/img/about-4.jpg">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="wow fadeInUp" data-wow-delay="0.2s">
                            <form>
                                <div class="row g-3">
                                    <div class="col-md-8">
                                        <div class="form-floating">
                                            <input type="number" class="form-control" id="idnum" placeholder="Your Name" v-model="id_number" required/>
                                            <label for="name">ID Number</label>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="fname" placeholder="Your Name" v-model="name" required/>
                                            <label for="name">First Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="lname" placeholder="Your Name" v-model="surname" required/>
                                            <label for="name">Last Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email" placeholder="Your Email" v-model="email" required/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="form-floating date" data-target-input="nearest">
                                            <input type="password" autocomplete="new-password" class="form-control datetimepicker-input" id="password" placeholder="Check In" v-model="password" required/>
                                            <label for="checkin">Password</label>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="form-floating date" data-target-input="nearest">
                                            <input type="telephone" class="form-control datetimepicker-input" id="phone" placeholder="Check Out" v-model="phone" required/>
                                            <label for="checkout">Phone Number</label>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="form-floating date" data-target-input="nearest">
                                            <select class="form-control" id="gender" placeholder="Check Out" v-model="gender" required>
                                                <option value=""></option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            <label for="checkout">Gender</label>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <button class="btn btn-primary w-100 py-3" v-on:click="signUp">Signup</button>
                                    </div>
                                    <div class="col-8">
                                        <router-link :to="{ name: 'Login' }" class="nav-item nav-link active">I have an account</router-link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <!-- Signup End -->

    <br><br><br><br><br><br><br><br>

</template>

<script>
import axios from 'axios';
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
    name: 'Signup',

    setup() {
        return { v$: useVuelidate() }
    },

    data() {
        return {
            id_number: '',
            name: '',
            surname: '',
            email: '',
            password: '',
            phone: '',
            gender: ''
        };
    },

    validations() {
        return {
            id_number: { 
                required, name_validation: {
                    $validator: validName,
                    $message: 'Invalid Name. Valid name only contain numbers, dashes (-) and spaces'
                } 
            },
            name: { 
                required, name_validation: {
                    $validator: validName,
                    $message: 'Invalid Name. Valid name only contain letters, dashes (-) and spaces'
                } 
            },
            surname: { 
                required, name_validation: {
                    $validator: validName,
                    $message: 'Invalid Name. Valid name only contain letters, dashes (-) and spaces'
                } 
            },
            email: {
                required, email
            },
            password: {
                required, 
                min: minLength(8)
            },
            phone: {
                required, 
                min: minLength(10)
            },
            gender: {

            },
        }
    },

    methods: {
    signUp() {
      const userData = {
        id_number: this.id_number,
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        phone: this.phone,
        gender: this.gender
      };

      axios.post('http://ride-api.co.za:8001/api/v1/user/', userData)
        .then(response => {
          console.log(response.data);
          // Perform any success actions, e.g., redirect to a success page
          alert('Signup successful. Please log in.');

          this.$router.push('/login');
        })
        .catch(error => {
          console.error(error);
          // Handle error, e.g., display an error message to the user
          alert('Signup failed. Please try again.');
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
