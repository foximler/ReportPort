<template>
<div class=" justify-content-center align-items-center w-100 px-1">
    <header class="jumbotron">
        <div class="inline-flex d-inline">
            <h3 class="d-inline">
                <strong>Edit Staff:</strong>
            </h3>
            <p class="d-inline pl-3">{{userModal.f_name}} {{userModal.l_name}}</p>
             <button  type="button" class="btn btn-danger d-inline mr-4 float-right" @click="deleteStaff()">Delete User</button>
        </div>
    </header>
    <div class="d-flex justify-content-center w-100">
        <div style="max-width: 600px;">
            <div class="background-form-group">
            <h3 class="align-items-center pb-2">Basic Information</h3>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputEmail4">First Name</label>
                    <input type="text" class="form-control" id="inputFName" placeholder="John" v-model="userModal.f_name">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputPassword4">Last Name</label>
                    <input type="text" class="form-control" id="inputLName" placeholder="Doe" v-model="userModal.l_name">
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" v-model="userModal.address.address">
            </div>
            <div class="form-group">
                <label for="inputAddress2">Address 2</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" v-model="userModal.address.address_2">
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control" id="inputCity" v-model="userModal.address.city">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputState">Province</label>
                    <select id="inputState" class="form-control" v-model="userModal.address.province">
                        <option value="AB">Alberta</option>
                        <option value="BC">British Columbia</option>
                        <option value="MB">Manitoba</option>
                        <option value="NB">New Brunswick</option>
                        <option value="NL">Newfoundland and Labrador</option>
                        <option value="NS">Nova Scotia</option>
                        <option value="NT">Northwest Territories</option>
                        <option value="NU">Nunavut</option>
                        <option value="ON">Ontario</option>
                        <option value="PE">Prince Edward Island</option>
                        <option value="QC">Quebec</option>
                        <option value="SK">Saskatchewan</option>
                        <option value="YT">Yukon</option>
                    </select>
                </div>
                <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip" v-model="userModal.address.zip">
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="inputEmail">Email</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="test@123.ca" v-model="userModal.email">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputPhone">Phone</label>
                    <input type="phone" class="form-control" id="inputPhone" placeholder="780 555 0000" v-model="userModal.phone">
                </div>
            </div>
                <div class="background-form-group">
                        <label for="inputAddress2">Date Of Birth</label>
                        <input type="date" class="form-control" id="inputAddress2" placeholder="" v-model="userModal.dob">
                    </div>
        </div>
            <div class="background-form-group mt-5">
                <h3 class="align-items-center pb-2">Store Information</h3>
                <div class="row">
                    <div class="form-group col-md-4">
                        <label for="inputWage">Wage ($/hr)</label>
                        <input type="number" class="form-control" id="inputWage" placeholder="15.50" v-model="userModal.wage">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputState">Position</label>
                        <select id="inputState" class="form-control" v-model="userModal.position_id">
                            <option :value=item.id v-for="item in positions" v-bind:key="item.name">{{item.name}}</option>
                        </select>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputRestaurant">Restaurant</label>
                        <select id="inputRestaurant" class="form-control" v-model="userModal.restaurant_id">
                            <option :value=items.id v-for="items in restaurants" v-bind:key="items.name">{{items.name}}</option>
                        </select>
                    </div>
                </div>
            </div>
                    
                     <div class="background-form-group mt-5">
               
                <h3 class="align-items-center pb-2">Bank Information</h3>
                <div class="form-group">
                    <label for="inputAddress2">Bank Name</label>
                    <input type="Text" class="form-control" id="inputAddress2" placeholder="" v-model="userModal.bank.bank_name">
                </div>
                <div class="form-group">
                    <label for="inputAddress">Transit Number</label>
                    <input type="text" class="form-control" id="inputAddress" v-model="userModal.bank.transit_number" placeholder="">
                </div>
                <div class="form-group">
                    <label for="inputAddress2">Institution Number</label>
                    <input type="number" class="form-control" v-model="userModal.bank.institution_number" placeholder="">
                </div>
                <div class="form-group">
                    <label for="inputAddress2">Account Number</label>
                    <input type="Text" class="form-control" v-model="userModal.bank.account_number" placeholder="">
                </div>
                 </div>
                 <div class="modal-footer justify-content-center align-items-center">
                        <button  type="button" class="btn-lg btn-primary" @click="backOut()">Cancel</button>
                        <button  type="button" class="btn-lg btn-danger" @click="updateStaffInfo()">Save</button>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
import UserService from '../services/user.service';

export default {
    name: 'editStaff',
    data() {
        return {
        	staffJson:[],
            areas: [],
            restaurants: [],
            positions:[],
            userModal: {
                id:this.$route.params.id,
                f_name: null,
                l_name: null,
                sin: null,
                address: {
                    address: null,
                    address_2: null,
                    city: null,
                    province: null,
                    zip: null
                },
                email: null,
                wage: null,
                dob:null,
                phone: null,
                restaurant_id: null,
                bank:  {
                    bank_name: null,
                    transit_number: null,
                    institution_number: null,
                    account_number: null,
                },
                position_id: null,
            }

        };
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    methods: {
        idToPosition(id) {
            if (this.positions.length > 0) {

                return this.positions.filter(function(el) {
                    return el.id == id
                })[0].name
            } else {
                return ''
            }
        },
        idToRestaurant(id) {
            if (this.restaurants.length > 0) {
                return this.restaurants.filter(function(el) {
                    return el.id == id
                })[0].name
            } else {
                return ''
            }
        },
        getPositionList(id){
            UserService.getPositionList(id).then(
            response => {
                this.positions = response.data;
            },
            error => {
                this.content =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
            }
        );
        },
        backOut(){
            this.$router.back()
        },
        deleteStaff(){
            UserService.deleteStaff(this.$route.params.id).then(
            response => {
             this.$router.back()
            },
            error => {
                this.content =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
            }
        );
        },
        updateStaffInfo(){
            let staffInfo = {...this.userModal}
            UserService.updateStaffInfo(staffInfo).then(
            response => {
             this.$router.back()
            },
            error => {
                this.content =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
            }
        );
        },
        getStaffInfo(id){
            UserService.getStaffInfo(id).then(
            response => {
             this.userModal=response.data
            },
            error => {
                this.content =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
            }
        );
        },
        getRestaurantList(){
            UserService.getRestaurantsList().then(
            response => {
                this.restaurants = response.data;
            },
            error => {
                this.content =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
            }
        );
        }
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/login');
        }
        this.getStaffInfo(this.$route.params.id);
        this.getPositionList();
        this.getRestaurantList();
        
    }
};
</script>
<style scoped>
.background-form-group{
    padding: 20px;
    background: #E8E8E8;
    border-radius: 8px;

}
</style>