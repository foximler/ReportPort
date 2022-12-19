import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getStaffList() {
    return axios.get(API_URL + 'staff', { headers: authHeader() });
  }
  getPositionList() {
    return axios.get(API_URL + 'position', { headers: authHeader() });
  }
  getRestaurantsList() {
    return axios.get(API_URL + 'restaurants', { headers: authHeader() });
  }
  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
  getStaffInfo(id) {
    return axios.post(API_URL + 'staffInfo',{id: id}, { headers: authHeader() });
  }
  addStaff(staff) {
    return axios.post(API_URL + 'addStaff', {
    f_name: staff.f_name,
    l_name: staff.l_name,
    sin: staff.sin,
    dob: staff.dob,
    address: staff.address,
    email: staff.email,
    wage: staff.wage,
    phone: staff.phone,
    restaurant_id: staff.restaurant_id,
    bank: staff.bank,
    position_id:  staff.position_id,
  },{
  headers: authHeader()});
  }
  deleteStaff(id) {
    return axios.post(API_URL + 'deleteStaff', {id: id},{
  headers: authHeader()});
  }
  updateStaffInfo(staff) {
    return axios.post(API_URL + 'updateStaff', {
    id: staff.id,
    f_name: staff.f_name,
    l_name: staff.l_name,
    sin: staff.sin,
    dob: staff.dob,
    address: staff.address,
    email: staff.email,
    wage: staff.wage,
    phone: staff.phone,
    restaurant_id: staff.restaurant_id,
    bank: staff.bank,
    position_id:  staff.position_id,
  },{
  headers: authHeader()});
  }
}

export default new UserService();
