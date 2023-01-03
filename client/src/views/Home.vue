<template>
    <div class="align-items-center w-100 h-100 p-3" style="background: #e7e7e7;">
        <div class="background-form-group p-2 mb-2">
            <h3 style="font-weight:bold; color:white; margin-left: -10px;
    margin-right: -10px;
    margin-top: -10px;
    border-radius: 10px;
    padding: 15px; background:black;">Weekly: This Week</h3>
            <div class="inputWhiteDiv align-items-center">
                <div class="row w-100">
                    <div class="col-auto">
                        <div class="boxContent bg-primary align-items-center justify-content-center">
                            <div class="row">
                                <div class="col-auto">  
                                    <font-awesome-icon icon="cash-register" class="float-left" size="4x" />
                                </div>
                                <div class="col-auto float-right" style="display: grid; text-align: right;">
                                    <h2 class="px-2 float-right">${{report_data.week_curr.sales ? report_data.week_curr.sales.toLocaleString() : 0}}</h2>
                                    <br>
                                </div>
                            </div>
                            <h1>Sales</h1>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="boxContent bg-success align-items-center justify-content-center">
                            <div class="row">
                                <div class="col-auto">
                                    <font-awesome-icon icon="user" class="float-left" size="4x" />
                                </div>
                                <div class="col-auto float-right" style="display: grid; text-align: right;">
                                    <h2 class="px-2 float-right">${{report_data.week_curr.labour ? report_data.week_curr.labour.toLocaleString() : 0}}</h2>
                                    <h2 class="px-2 float-right">{{divider(report_data.week_curr.labour,report_data.week_curr.sales)}}%</h2>
                                </div>
                            </div>
                            <h1>Labour</h1>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="boxContent  bg-warning justify-content-center align-items-center">
                          <div class="row">
                                <div class="col-auto">
                                    <font-awesome-icon icon="shopping-cart" class="float-left" size="4x" />
                                </div>
                                <div class="col-auto float-right" style="display: grid; text-align: right;">
                                    <h2 class="px-2 float-right">${{report_data.week_curr.purchases ? report_data.week_curr.purchases.toLocaleString() : 0}}</h2>
                                <h2 class="px-2 float-right">{{divider(report_data.week_curr.purchases,report_data.week_curr.sales)}}%</h2>
                                </div>
                            </div>
                            <h1>Purchases</h1>
                            
                        </div>
                    </div>
                    <div style="height: auto;background:#dbdbdb;width: 6px;border-radius: 10px;" />
                    <div class="col-auto">
                        <div class="boxContent  bg-danger justify-content-center align-items-center">
                          <div class="row">
                                <div class="col-auto float-right">
                                    <font-awesome-icon icon="exclamation-triangle" class="float-left" size="4x" />
                                </div>
                                <div class="col-auto" style="display: grid; text-align: right;">
                                    <h2 class="px-2 float-right">${{report_data.week_curr.budget ? report_data.week_curr.budget : 0}}</h2>
                                <h2 class="px-2 float-right">3%</h2>
                                </div>
                            </div>
                            <h1>Over Budget</h1>
                        </div>
                    </div>
                </div>
              </div>

        </div>
        <div class="background-form-group p-2 my-3">
            <h3  style="font-weight:bold; color:white; margin-left: -10px;
    margin-right: -10px;
    margin-top: -10px;
    border-radius: 10px;
    padding: 15px;
    background:black;" >Weekly: Last Week</h3>
            <div class="inputWhiteDiv align-items-center">
                <div class="row w-100">
                    <div class="col-auto">
                        <div class="boxContent bg-primary align-items-center justify-content-center">
                            <div class="row">
                                <div class="col-auto">  
                                    <font-awesome-icon icon="cash-register" class="float-left" size="4x" />
                                </div>
                                <div class="col-auto float-right" style="display: grid; text-align: right;">
                                    <h2 class="px-2 float-right">${{report_data.week_last.sales ? report_data.week_last.sales.toLocaleString() : 0}}</h2>
                                    <br>
                                </div>
                            </div>
                            <h1>Sales</h1>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="boxContent bg-success align-items-center justify-content-center">
                            <div class="row">
                                <div class="col-auto">
                                    <font-awesome-icon icon="user" class="float-left" size="4x" />
                                </div>
                                <div class="col-auto float-right" style="display: grid; text-align: right;">
                                    <h2 class="px-2 float-right">${{report_data.week_last.labour ? report_data.week_last.labour.toLocaleString() : 0}}</h2>
                                    <h2 class="px-2 float-right">{{divider(report_data.week_last.labour,report_data.week_last.sales)}}%</h2>
                                </div>
                            </div>
                            <h1>Labour</h1>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="boxContent  bg-warning justify-content-center align-items-center">
                          <div class="row">
                                <div class="col-auto">
                                    <font-awesome-icon icon="shopping-cart" class="float-left" size="4x" />
                                </div>
                                <div class="col-auto float-right" style="display: grid; text-align: right;">
                                  <h2 class="px-2 float-right">${{report_data.week_last.purchases ? report_data.week_last.purchases.toLocaleString() : 0}}</h2>
                                    <h2 class="px-2 float-right">{{divider(report_data.week_last.purchases,report_data.week_last.purchases)}}%</h2>
                                </div>
                            </div>
                            <h1>Purchases</h1>
                            
                        </div>
                    </div>
                    <div style="height: auto;background:#dbdbdb;width: 6px;border-radius: 10px;" />
                       <div class="col-auto">
                        <div class="boxContent  bg-success justify-content-center align-items-center">
                          <div class="row">
                                <div class="col-auto">
                                    <font-awesome-icon icon="check" class="float-left" size="4x" />
                                </div>
                                <div class="col-auto float-right" style="display: grid; text-align: right;">
                                    <h2 class="px-2 float-right">${{report_data.week_curr.budget ? report_data.week_curr.budget : 0}}</h2>
                                <h2 class="px-2 float-right">-3%</h2>
                                </div>
                            </div>
                            <h1>Under Budget</h1>
                        </div>
                    </div>
                </div>
          </div>
        </div>
                <div class="background-form-group p-2 my-3">
            <h3  style="font-weight:bold; color:white; margin-left: -10px;
    margin-right: -10px;
    margin-top: -10px;
    border-radius: 10px;
    padding: 15px; background:black;">Monthly</h3>
            <div class="inputWhiteDiv align-items-center">
                <div class="row w-100">
                    <div class="col-auto">
                        <div class="boxContent bg-primary align-items-center justify-content-center">
                            <div class="row">
                                <div class="col-auto">  
                                    <font-awesome-icon icon="cash-register" class="float-left" size="4x" />
                                </div>
                                <div class="col-auto float-right" style="display: grid; text-align: right;">
                                    <h2 class="px-2 float-right">${{report_data.monthly.sales ? report_data.monthly.sales.toLocaleString() : 0}}</h2>
                                    <br>
                                </div>
                            </div>
                            <h1>Sales</h1>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="boxContent bg-success align-items-center justify-content-center">
                            <div class="row">
                                <div class="col-auto">
                                    <font-awesome-icon icon="user" class="float-left" size="4x" />
                                </div>
                                <div class="col-auto float-right" style="display: grid; text-align: right;">
                                    <h2 class="px-2 float-right">${{report_data.monthly.labour ? report_data.monthly.labour.toLocaleString() : 0}}</h2>
                                    <h2 class="px-2 float-right">{{divider(report_data.monthly.labour,report_data.monthly.sales)}}%</h2>
                                </div>
                            </div>
                            <h1>Labour</h1>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="boxContent  bg-warning justify-content-center align-items-center">
                          <div class="row">
                                <div class="col-auto">
                                    <font-awesome-icon icon="shopping-cart" class="float-left" size="4x" />
                                </div>
                                <div class="col-auto float-right" style="display: grid; text-align: right;">
                                 <h2 class="px-2 float-right">${{report_data.monthly.purchases ? report_data.monthly.purchases.toLocaleString() : 0}}</h2>
                                <h2 class="px-2 float-right">{{divider(report_data.monthly.purchases,report_data.monthly.purchases)}}%</h2>
                                </div>
                            </div>
                            <h1>Purchases</h1>
                            
                        </div>
                    </div>
                    <div style="height: auto;background:#dbdbdb;width: 6px;border-radius: 10px;" />
                        <div class="col-auto">
                        <div class="boxContent  bg-success justify-content-center align-items-center">
                          <div class="row">
                                <div class="col-auto">
                                    <font-awesome-icon icon="check" class="float-left" size="4x" />
                                </div>
                                <div class="col-auto float-right" style="display: grid; text-align: right;">
                                    <h2 class="px-2 float-right">-$100</h2>
                                <h2 class="px-2 float-right">-3%</h2>
                                </div>
                            </div>
                            <h1>Under Budget</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import UserService from '../services/user.service';

export default {
    name: 'Home',
    data() {
        return {
            report_data: {
              week_curr:{
                sales:null,
                labour:null,
                purchases:null,
                budget:null,
              },
              week_last:{
                sales:null,
                labour:null,
                purchases:null,
                budget:null,
              },
              month:{
                sales:null,
                labour:null,
                purchases:null,
                budget:null,
              }
            }
        };
    },
      computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    methods:{
      divider(div,dividor){
        return Math.round(div*100 / dividor*100)/100
      }
    },
        mounted() {
        if (!this.currentUser) {
            this.$router.push('/login');
        }
        UserService.getDashboardData().then(
            response => {
                let startWeek = new Date()
                startWeek.setDate(startWeek.getDate() - (startWeek.getDay() + 6) % 7);
                startWeek.setHours(0,0,0,0);


                let startLastWeek = new Date()
                startLastWeek.setDate(startLastWeek.getDate() - ((startLastWeek.getDay() + 6) % 7) - 14);
                startLastWeek.setHours(0,0,0,0);

                let endLastWeek = new Date()
                endLastWeek.setDate(endLastWeek.getDate() - ((endLastWeek.getDay() ) % 7) - 7);
                endLastWeek.setHours(0,0,0,0);

                let startMonth = new Date()
                startMonth.setDate(startMonth.getDate() - ((startMonth.getDay() ) % 1));
                startMonth.setHours(0,0,0,0);
                let week_curr = response.data[0].filter(report => new Date(report.report_date) >= endLastWeek)
                let week_curr_tot = {
                    labour: week_curr.map(day =>{
                  return day.meta_daily.staff_list.reduce((accum, item) => accum + (Number(item.dailyHours) * Number(item.wage) + Number(item.dailyOT) * Number(item.wage) * 1.5 + Number(item.dailyStat) * Number(item.wage) * 1.5), 0)
                }).reduce((accum, item) => accum + Number(item), 0),
                    sales: week_curr.reduce((accum, item) => accum + (Number(item.meta_daily.sales.food) + Number(item.meta_daily.sales.liqour)), 0),
                    purchases: week_curr.map(day =>{
                  return day.meta_daily.purchases.reduce((accum, item) => accum + Number(item.cost), 0)
                }).reduce((accum, item) => accum + Number(item), 0),
                  }
                let week_last = response.data[0].filter(report => new Date(report.report_date) >= endLastWeek && new Date(report.report_date) <= startLastWeek )
                let month = response.data[0].filter(report => new Date(report.report_date) >= month)
                this.report_data = {
                  week_curr:week_curr_tot,
                  week_last:week_last,
                  month:week_last
              };
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
<style scoped>
.boxContent {
    padding: 10px;
    height: 200px;
    width: 275px;
    display: grid;
    border-radius: 10px;
    color: white;
    text-align:center;
}

.background-form-group {
    background: #fff;
    border-radius: 8px;
}
</style>