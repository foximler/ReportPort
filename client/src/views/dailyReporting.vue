<template>
    <div class=" justify-content-center align-items-center w-100 px-1">
        <header class="jumbotron">
            <div class="inline-flex d-inline py-3">
                <h3 class="d-inline">
                    <strong>Daily Reporting</strong> for {{dateClean}}
                </h3>
                <button type="button" @click="modalEditor.isDateModalVisible=true" class="btn btn-dark d-inline float-right">Change Date</button>
            </div>
        </header>
        <div class="justify-content-center py-3">
            <div class="background-form-group p-2">
                <h3 class="mb-3">Payroll</h3>
                <div v-if="frontStaff.length > 0">
                    <h5 class="mb-3">Front House</h5>
                    <table class="table bg-white">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Wage</th>
                                <th scope="col">Regular Hours</th>
                                <th scope="col">Overtime</th>
                                <th scope="col">Stat</th>
                                <th scope="col">Total Hours</th>
                                <th scope="col">Total Wage</th>
                                <th scope="col">Advance</th>
                                <th scope="col">Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(staff,index) in staff_list.filter((element)=>{return [1,4,5].includes(element.position_id)})" :key="index">
                                <td>{{staff.f_name}} {{staff.l_name}}</td>
                                <td>${{staff.wage}}</td>
                                <td><input type="number" class="form-control" id="inputhours" :placeholder=0 min=0 v-model="staff.dailyHours"></td>
                                <td><input type="number" class="form-control" id="inputWage" :placeholder=0 min=0 v-model="staff.dailyOT"></td>
                                <td><input type="number" class="form-control" id="inputWage" :placeholder=0 min=0 v-model="staff.dailyStat"></td>
                                <td>{{getUserHours(staff)}}</td>
                                <td>${{getTotalPay(staff)}}</td>
                                <td><input type="number" class="form-control" id="inputWage" :placeholder=0 min=0 v-model="staff.dailyAdvance"></td>
                                <td>
                                    <font-awesome-icon @click="openNoteEditor('staff_list',index)" icon="edit" />
                                </td>
                            </tr>
                            <tr>
                                <td><b>Total</b></td>
                                <td><b></b></td>
                                <td><b>{{getTotalRegHours("front")}}</b></td>
                                <td><b>{{getTotalOTHours("front")}}</b></td>
                                <td><b>{{getTotalStatHours("front")}}</b></td>
                                <td><B>{{getTotalHours("front")}}</B></td>
                                <td><B>${{getTotalWage("front")}}</B></td>
                                <td><b>${{getTotalAdvance("front")}}</b></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-if="backStaff.length > 0">
                    <h5 class="mb-3">Back House</h5>
                    <table class="table bg-white">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Wage</th>
                                <th scope="col">Regular Hours</th>
                                <th scope="col">Overtime</th>
                                <th scope="col">Stat</th>
                                <th scope="col">Total Hours</th>
                                <th scope="col">Total Wage</th>
                                <th scope="col">Advance</th>
                                <th scope="col">Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(staff,index) in staff_list.filter((element)=>{return [2,3].includes(element.position_id)})">
                                <td>{{staff.f_name}} {{staff.l_name}}</td>
                                <td>${{staff.wage}}</td>
                                <td><input type="number" class="form-control" id="inputhours" :placeholder=0 min=0 v-model="staff.dailyHours"></td>
                                <td><input type="number" class="form-control" id="inputWage" :placeholder=0 min=0 v-model="staff.dailyOT"></td>
                                <td><input type="number" class="form-control" id="inputWage" :placeholder=0 min=0 v-model="staff.dailyStat"></td>
                                <td>{{getUserHours(staff)}}</td>
                                <td>${{getTotalPay(staff)}}</td>
                                <td><input type="number" class="form-control" id="inputWage" :placeholder=0 min=0 v-model="staff.dailyAdvance"></td>
                                <td>
                                    <font-awesome-icon @click="openNoteEditor('staff_list',index)" icon="edit" />
                                </td>
                            </tr>
                            <tr>
                                <td><b>Total</b></td>
                                <td><b></b></td>
                                <td><b>{{getTotalRegHours("back")}}</b></td>
                                <td><b>{{getTotalOTHours("back")}}</b></td>
                                <td><b>{{getTotalStatHours("back")}}</b></td>
                                <td><B>{{getTotalHours("back")}}</B></td>
                                <td><B>${{getTotalWage("back")}}</B></td>
                                <td><b>${{getTotalAdvance("back")}}</b></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-if="staff_list.length !==  0">
                    <h5 class="mb-3">Daily Totals</h5>
                    <table class="table bg-white">
                        <thead>
                            <tr>
                                <th scope="col">Regular Hours</th>
                                <th scope="col">Overtime</th>
                                <th scope="col">Stat</th>
                                <th scope="col">Total Hours</th>
                                <th scope="col">Total Wage</th>
                                <th scope="col">Advance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><b>{{getTotalRegHours("all")}}</b></td>
                                <td><b>{{getTotalOTHours("all")}}</b></td>
                                <td><b>{{getTotalStatHours("all")}}</b></td>
                                <td><B>{{getTotalHours("all")}}</B></td>
                                <td><B>${{getTotalWage("all")}}</B></td>
                                <td><b>${{getTotalAdvance("all")}}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-if="staff_list.length ==  0">
                    <p>No Staff Found, please add a staff member to continue.</p>
                </div>
            </div>
        </div>
        <div class="justify-content-center py-3">
            <div class="background-form-group p-2">
                <h3 class="pb-1">Sales</h3>
                <div class="p-2 inputWhiteDiv">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Food Sales</label>
                            <input type="number" class="form-control" id="inputFoodSales" placeholder="0" v-model="sales.food">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Liqour Sales</label>
                            <input type="number" class="form-control" id="inputLiqourSales" placeholder="0" v-model="sales.liqour">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="justify-content-center py-3">
            <div class="background-form-group p-2">
                <div class="inline-flex d-inline py-3">
                    <h3 class="d-inline">Purchases</h3><button type="button" class="btn btn-dark d-inline mr-4 float-right" @click="addPurchase()">
                        <font-awesome-icon icon="plus" /></button>
                </div>
                <div class="py-3">
                    <table class="table bg-white">
                        <thead>
                            <tr>
                                <th scope="col">Type</th>
                                <th scope="col">Cost</th>
                                <th scope="col">Date</th>
                                <th scope="col">Store</th>
                                <th scope="col">Notes</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(purchase,index) in purchases" :key="index">
                                <td>
                                    <select id="inputState" class="form-control" v-model="purchase.type">
                                        <option value="0">Food</option>
                                        <option value="1">Liqour</option>
                                        <option value="2">Other</option>
                                    </select></td>
                                <td><input type="number" class="form-control" id="inputhours" :placeholder=0 min=0 v-model="purchase.cost"></td>
                                <td><input type="date" class="form-control" id="inputhours" min=0 v-model="purchase.date"></td>
                                <td><input type="text" class="form-control" id="inputWage" v-model="purchase.store"></td>
                                <td>
                                    <font-awesome-icon icon="user-edit" @click="openNoteEditor('purchases',index)" /></td>
                                <td>
                                    <font-awesome-icon icon="trash" @click="deletePurchase(index)" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div id="noteModal" class="modal" v-if="modalEditor.isNoteModalVisible == true">
            <div class="modal-content">
                <span class="close float-right" @click="cancelModal()">&times;</span>
                <div class="form-group green-border-focus">
                    <label for="exampleFormControlTextarea5">Note:</label>
                    <textarea class="form-control" id="exampleFormControlTextarea5" v-model="$data[modalEditor.dataRef][modalEditor.noteRef].notes" rows="3"></textarea>
                </div>
                <div class="modal-footer justify-content-center align-items-center">
                    <button type="button" class="btn-lg btn-primary" @click="cancelModal()">Cancel</button>
                    <button type="button" class="btn-lg btn-danger" @click="closeModal()">Save</button>
                </div>
            </div>
        </div>
        <div id="dateModal" class="modal" v-if="modalEditor.isDateModalVisible == true">
            <div class="modal-content">
                <span class="close float-right" @click="cancelModal()">&times;</span>
                <div class="form-group green-border-focus">
                    <label for="exampleFormControlTextarea5">Date:</label>
                    <input type="date" class="form-control" id="inputhours" v-model="date">
                </div>
                <div class="modal-footer justify-content-center align-items-center">
                    <button type="button" class="btn-lg btn-dark" @click="cancelModal()">Close</button>
                </div>
            </div>
        </div>
        <div id="noteModal" class="modal" v-if="isErrorVisible == true">
            <div class="modal-content">
                <span class="close float-right" @click="isErrorVisible = false">&times;</span>
                <div class="form-group green-border-focus">
                    <label for="exampleFormControlTextarea5">Error:</label>
                    <h4>Report already exists for date. Please go back and edit the existing report.</h4>
                     <button type="button" class="btn-lg btn-dark" @click="viewExistingReports()">View Existing Reports</button>
                </div>
            </div>
        </div>
         <button type="button" class="btn-lg btn-dark w-100" @click="saveReport()">Save</button>
    </div>
</template>
<script>
import UserService from '../services/user.service';
import noteEditor from '../component/noteEditor.vue'
export default {
    name: 'dailyReporting',
    components: {
        noteEditor
    },
    data() {
        return {
            staff_list: [],
            roles: [],
            positions: [],
            purchases: [],
            modalEditor: {
                isNoteModalVisible: false,
                isDateModalVisible: false,
                noteRef: null,
                dataRef: null
            },
            sales: {
                food: null,
                liqour: null
            },
            isErrorVisible:false,
            areas: [],
            restaurants: [],
            modalPage: 0,
            date: new Date().toISOString().substr(0, 10)
        };
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
        frontStaff() {
            return this.staff_list.filter(function(el) {
                return el.position_id == 4 || el.position_id == 5 || el.position_id == 1
            })
        },
        backStaff() {
            return this.staff_list.filter(function(el) {
                return el.position_id == 2 || el.position_id == 3
            })
        },
        dateClean(){
            return this.date
        }
    },
    methods: {
        getTotalAdvance(area) {
            var list;
            switch (area) {
                case "front":
                    list = this.staff_list.filter(function(el) {
                        return el.position_id == 4 || el.position_id == 5 || el.position_id == 1
                    })
                    return list.reduce((accum, item) => accum + Number(item.dailyAdvance), 0)
                    break;
                case "back":
                    list = this.staff_list.filter(function(el) {
                        return el.position_id == 2 || el.position_id == 3
                    })
                    return list.reduce((accum, item) => accum + Number(item.dailyAdvance), 0)
                    break;
                case "all":
                    list = this.staff_list
                    return list.reduce((accum, item) => accum + Number(item.dailyAdvance), 0)
                    break;
            }
        },
        saveReport(){
            UserService.addDailyReport({
                dailyData:{
                    staff_list:this.staff_list,
                    purchases:this.purchases,
                    sales:this.sales
                },
                reportDate:this.date
            }).then(
            response=>{
                this.$router.push(`/reporting`)
            })
            .catch(err=>{
                this.isErrorVisible = true

        })
        },
        viewExistingReports(){
            this.$router.push(`/reporting`)
        },
        openNoteEditor(data, note) {
            this.modalEditor.noteRef = note
            this.modalEditor.dataRef = data
            this.modalEditor.isNoteModalVisible = true
        },
        cancelModal() {
            this.modalEditor.noteRef = ""
            this.modalEditor.dataRef = ""
            this.modalEditor.isNoteModalVisible = false
            this.modalEditor.isDateModalVisible = false
        },
        closeModal() {
            //store returned value from prop to corrosponding data location
            this.modalEditor.noteRef = ""
            this.modalEditor.dataRef = ""
            this.modalEditor.isNoteModalVisible = false
            this.modalEditor.isDateModalVisible = false
        },
        addPurchase() {
            this.purchases.push({
                type: 0,
                cost: 0,
                date: new Date().toISOString().substr(0, 10),
                store: "",
                notes: "",
            })
        },
        deletePurchase(index) {
            this.purchases.splice(index, 1)
        },
        getTotalWage(area) {
            var list;
            switch (area) {
                case "front":
                    list = this.staff_list.filter(function(el) {
                        return el.position_id == 4 || el.position_id == 5 || el.position_id == 1
                    })
                    return list.reduce((accum, item) => accum + (Number(item.dailyHours) * Number(item.wage) + Number(item.dailyOT) * Number(item.wage) * 1.5 + Number(item.dailyStat) * Number(item.wage) * 1.5), 0)
                    break;
                case "back":
                    list = this.staff_list.filter(function(el) {
                        return el.position_id == 2 || el.position_id == 3
                    })
                    return list.reduce((accum, item) => accum + (Number(item.dailyHours) * Number(item.wage) + Number(item.dailyOT) * Number(item.wage) * 1.5 + Number(item.dailyStat) * Number(item.wage) * 1.5), 0)
                    break;
                case "all":
                    list = this.staff_list
                    return list.reduce((accum, item) => accum + (Number(item.dailyHours) * Number(item.wage) + Number(item.dailyOT) * Number(item.wage) * 1.5 + Number(item.dailyStat) * Number(item.wage) * 1.5), 0)
                    break;
            }
        },
        getTotalHours(area) {
            var list;
            switch (area) {
                case "front":
                    list = this.staff_list.filter(function(el) {
                        return el.position_id == 4 || el.position_id == 5 || el.position_id == 1
                    })
                    return list.reduce((accum, item) => accum + (Number(item.dailyHours) + Number(item.dailyOT) + Number(item.dailyStat)), 0)
                    break;
                case "back":
                    list = this.staff_list.filter(function(el) {
                        return el.position_id == 2 || el.position_id == 3
                    })
                    return list.reduce((accum, item) => accum + (Number(item.dailyHours) + Number(item.dailyOT) + Number(item.dailyStat)), 0)
                    break;
                case "all":
                    list = this.staff_list
                    return list.reduce((accum, item) => accum + (Number(item.dailyHours) + Number(item.dailyOT) + Number(item.dailyStat)), 0)
                    break;
            }
        },
        getTotalRegHours(area) {
            var list;
            switch (area) {
                case "front":
                    list = this.staff_list.filter(function(el) {
                        return el.position_id == 4 || el.position_id == 5 || el.position_id == 1
                    })
                    return list.reduce((accum, item) => accum + Number(item.dailyHours), 0)
                    break;
                case "back":
                    list = this.staff_list.filter(function(el) {
                        return el.position_id == 2 || el.position_id == 3
                    })
                    return list.reduce((accum, item) => accum + Number(item.dailyHours), 0)
                    break;
                case "all":
                    list = this.staff_list
                    return list.reduce((accum, item) => accum + Number(item.dailyHours), 0)
                    break;
            }
        },
        getTotalOTHours(area) {
            var list;
            switch (area) {
                case "front":
                    list = this.staff_list.filter(function(el) {
                        return el.position_id == 4 || el.position_id == 5 || el.position_id == 1
                    })
                    return list.reduce((accum, item) => accum + Number(item.dailyOT), 0)
                    break;
                case "back":
                    list = this.staff_list.filter(function(el) {
                        return el.position_id == 2 || el.position_id == 3
                    })
                    return list.reduce((accum, item) => accum + Number(item.dailyOT), 0)
                    break;
                case "all":
                    list = this.staff_list
                    return list.reduce((accum, item) => accum + Number(item.dailyOT), 0)
                    break;
            }
        },
        getTotalStatHours(area) {
            var list;
            switch (area) {
                case "front":
                    list = this.staff_list.filter(function(el) {
                        return el.position_id == 4 || el.position_id == 5 || el.position_id == 1
                    })
                    return list.reduce((accum, item) => accum + Number(item.dailyStat), 0)
                    break;
                case "back":
                    list = this.staff_list.filter(function(el) {
                        return el.position_id == 2 || el.position_id == 3
                    })
                    return list.reduce((accum, item) => accum + Number(item.dailyStat), 0)
                    break;
                case "all":
                    list = this.staff_list
                    return list.reduce((accum, item) => accum + Number(item.dailyStat), 0)
                    break;

            }

        },
        getUserHours(staff) {
            return Number(staff.dailyHours) + Number(staff.dailyOT) + Number(staff.dailyStat)
        },
        getTotalPay(staff) {
            return Number(staff.dailyHours) * Number(staff.wage) + Number(staff.dailyOT) * Number(staff.wage) * 1.5 + Number(staff.dailyStat) * Number(staff.wage) * 1.5
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
    },
    beforeMount() {
        UserService.getStaffList().then(
            response => {
                this.staff_list = response.data.map(item => {
                    const staff = { dailyHours: null, dailyOT: null, dailyStat: null, dailyAdvance: null, ...item };
                    return staff;
                });

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
    },
    mounted() {

    }
};
</script>
<style scoped>
.background-form-group {
    background: #E8E8E8;
    border-radius: 8px;
}

.table {
    border-radius: 10px;
    table-layout: fixed;
}

.inputWhiteDiv {
    border-radius: 10px;
    background-color: white;
}

.modal {
    display: block;
    /* Hidden by default */
    position: fixed;
    /* Stay in place */
    z-index: 1;
    /* Sit on top */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    background-color: rgb(0, 0, 0);
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
    /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 600px;
    /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</style>