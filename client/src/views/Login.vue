<template>
    <section class="h-100 gradient-form">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-9">
                    <div class="card rounded-3 text-black">
                        <div class="row g-0">
                            <div class="col-lg-6">
                                <div class="card-body p-md-5 mx-md-4">
                                    <div class="text-center">
                                        <img src="http://reportport.ca/logoblack.png" style="width: 185px;" alt="logo">
                                    </div>
                                    <form name="form" @submit.prevent="handleLogin">
                                        <div class="text-center">
                                            <p>Please login to your account</p>
                                        </div>
                                        <div class="form-outline mb-4">
                                            <label for="password">Email</label>
                                            <input v-model="user.email" v-validate="'required'" type="text" class="form-control" name="email" />
                                            <div v-if="errors.hasOwnProperty('username')" class="alert alert-danger" role="alert">Email is required!</div>
                                        </div>
                                        <div class="form-outline mb-4">
                                            <label for="password">Password</label>
                                            <input v-model="user.password" v-validate="'required'" type="password" class="form-control" name="password" />
                                            <div v-if="errors.hasOwnProperty('password')" class="alert alert-danger" role="alert">Password is required!</div>
                                        </div>
                                        <div class="text-center pt-1 mb-5 pb-1">
                                            <div class="form-group">
                                                <button class="btn btn-primary btn-block" :disabled="loading">
                                                    <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                                                    <span>Login</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-6 d-flex align-items-center gradient-custom-2" style="background-image: url('img/sidebar-4.jpg');">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { useForm } from 'vee-validate';
import User from '../models/user'
import * as yup from 'yup';
export default {
    name: 'Login',
    data() {
        return {
            user: {},
            loading: false,
            message: '',
            errors:{}
        };
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        }
    },
    created() {
        if (this.loggedIn) {
            this.$router.push('/profile');
        }
    },
    methods: {
        handleLogin() {
            this.loading = true;
            if (useForm({
  email: yup.string().required().email(),
  password: yup.string().required(),
})) {
                    this.$store.dispatch('auth/login', this.user).then(
                        () => {
                            this.$router.push('/');
                        },
                        error => {
                            this.loading = false;
                            this.message =
                                (error.response && error.response.data && error.response.data.message) ||
                                error.message ||
                                error.toString();
                        }
                    );
            }
            else {
                                if (!isValid) {
                    this.loading = false;
                    return;
                }
            }

            },
        }
};
</script>
<style scoped>
label {
    display: block;
    margin-top: 10px;
}

.card-container.card {
    max-width: 350px !important;
    padding: 40px 40px;
}

.card {
    background-color: #f7f7f7;
    padding: 20px 25px 30px;
    margin: 0 auto 25px;
    margin-top: 50px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}
</style>