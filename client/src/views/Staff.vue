<template>
    <div class="justify-content-center align-items-center w-100 px-1">
        <header class="jumbotron">
            <div class="inline-flex">
                <h3>
                    <strong>Staff </strong>List
                </h3>
                <div class="float-right"><button type="button" class="btn btn-dark" data-toggle="modal" data-target="#addStaff">Add Staff Member</button></div>
            </div>
        </header>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Wage</th>
                    <th scope="col">Role</th>
                    <th scope="col">Store</th>
                    <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(staff,index) in staff_list" :key="index">
                    <td>{{staff.f_name}} {{staff.l_name}}</td>
                    <td>${{staff.wage}}</td>
                    <td>{{idToPosition(staff.position_id)}}</td>
                    <td>{{idToRestaurant(staff.restaurant_id)}}</td>
                    <td class="justify-content-center align-items-center"><font-awesome-icon icon="user-edit" @click="resolveEditor(staff.id)"/></td>
                </tr>
            </tbody>
        </table>
        <div class="modal" id="addStaff" tabindex="-1" role="dialog" aria-labelledby="addStaffLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add a Staff Member</h5>
                        <button type="button" class="close" id="close" data-dismiss="modal" aria-label="Close" @click="resetModal()">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" v-if="modalPage==0">
                        <form>
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
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" v-model="userModal.address">
                            </div>
                            <div class="form-group">
                                <label for="inputAddress2">Address 2</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" v-model="userModal.address_2">
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputCity">City</label>
                                    <input type="text" class="form-control" id="inputCity" v-model="userModal.city">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputState">Province</label>
                                    <select id="inputState" class="form-control" v-model="userModal.province">
                                        <option selected>Choose...</option>
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
                                    <input type="text" class="form-control" id="inputZip" v-model="userModal.zip">
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-body" v-if="modalPage==1">
                        <form>
                            <div class="form-group">
                                <label for="inputEmail">Email</label>
                                <input type="email" class="form-control" id="inputEmail" placeholder="test@123.ca" v-model="userModal.email">
                            </div>
                             <div class="form-group">
                                <label for="inputPhone">Phone</label>
                                <input type="phone" class="form-control" id="inputPhone" placeholder="780 555 0000" v-model="userModal.phone">
                            </div>
                            <div class="form-group">
                                <label for="inputWage">Wage ($/hr)</label>
                                <input type="number" class="form-control" id="inputWage" placeholder="15.50" v-model="userModal.wage">
                            </div>
                            <div class="form-group">
                                <label for="inputState">Position</label>
                                <select id="inputState" class="form-control" v-model="userModal.position_id">
                                    <option :value=item.id v-for="item in positions" v-bind:key="item.name">{{item.name}}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="inputRestaurant">Restaurant</label>
                                <select id="inputRestaurant" class="form-control" v-model="userModal.restaurant_id">
                                    <option :value=items.id v-for="items in restaurants" v-bind:key="items.name">{{items.name}}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="inputAddress2">SIN</label>
                                <input type="Text" class="form-control" id="inputAddress2" placeholder="XXX-XXX-XXX" v-model="userModal.sin">
                            </div>
                            <div class="form-group">
                                <label for="inputAddress2">Date Of Birth</label>
                                <input type="date" class="form-control" id="inputAddress2" placeholder="" v-model="userModal.birthday">
                            </div>
                        </form>
                    </div>
                    <div class="modal-body" v-if="modalPage==2">
                        <form>
                            <h3 class="align-items-center">Bank Info</h3>
                            <div class="form-group">
                                <label for="inputAddress2">Bank Name</label>
                                <input type="Text" class="form-control" id="inputAddress2" placeholder="" v-model="userModal.bank_name">
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Transit Number</label>
                                <input type="text" class="form-control" id="inputAddress" v-model="userModal.transit_number" placeholder="">
                            </div>
                            <div class="form-group">
                                <label for="inputAddress2">Institution Number</label>
                                <input type="number" class="form-control" v-model="userModal.institution_number" placeholder="">
                            </div>
                            <div class="form-group">
                                <label for="inputAddress2">Account Number</label>
                                <input type="Text" class="form-control" v-model="userModal.account_number" placeholder="">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button v-if="modalPage!=0" type="button" class="btn btn-primary" @click="modalPage -= 1">Back</button>
                        <button v-if="modalPage<=1" type="button" class="btn btn-primary" @click="modalPage += 1">Next</button>
                        <button v-if="modalPage>=2" type="button" class="btn btn-primary" @click="addUser()">Add Employee</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import UserService from '../services/user.service';

export default {
    name: 'Staff',
    data() {
        return {
            staff_list: [],
            roles: [],
            positions: [],
            areas: [],
            restaurants: [],
            modalPage: 0,
            userModal: {
                f_name: null,
                l_name: null,
                address: null,
                address_2: null,
                city: null,
                province: null,
                zip: null,
                email: null,
                phone: null,
                wage: null,
                position_id: null,
                restaurant_id:null,
                sin: null,
                birthday: null,
                bank_name: null,
                store_id: null,
                transit_number: null,
                institution_number: null,
                account_number: null
            }

        };
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    methods: {
        resolveEditor(id){
            this.$router.push(`/staff/edit/${id}`);
        },
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
        addUser() {
            let staff = {
                f_name: this.userModal.f_name,
                l_name: this.userModal.l_name,
                sin: this.userModal.sin,
                address: {
                    address: this.userModal.address,
                    address_2: this.userModal.address_2,
                    city: this.userModal.city,
                    province: this.userModal.province,
                    zip: this.userModal.zip
                },
                dob: this.userModal.birthday,
                email: this.userModal.email,
                wage: this.userModal.wage,
                phone: this.userModal.phone,
                restaurant_id: this.userModal.restaurant_id,
                bank: {
                    bank_name: this.userModal.bank_name,
                    transit_number: this.userModal.transit_number,
                    institution_number: this.userModal.institution_number,
                    account_number: this.userModal.account_number,
                },
                position_id: this.userModal.position_id,
            }
            UserService.addStaff(staff).then(
              response=>{
                document.getElementById('close').click();
                this.resetModal()
                UserService.getStaffList().then(
            response => {
                this.staff_list = response.data;
            },
            error => {
                this.content =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
            }
        );  
              },
              error => {
                this.content =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
              })
        },

    resetModal(){
        this.modalPage= 0;
        this.userModal={
                f_name: null,
                l_name: null,
                address: null,
                address_2: null,
                city: null,
                province: null,
                zip: null,
                email: null,
                phone: null,
                wage: null,
                position_id: null,
                restaurant_id:null,
                sin: null,
                birthday: null,
                bank_name: null,
                store_id: null,
                transit_number: null,
                institution_number: null,
                account_number: null
            }
        }
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/login');
        }
        UserService.getStaffList().then(
            response => {
                this.staff_list = response.data;
            },
            error => {
                this.content =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
            }
        );
        UserService.getPositionList().then(
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
};
</script>