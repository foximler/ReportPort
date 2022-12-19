<template>
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close" @click="$emit('cancel' )">&times;</span>
    <div class="form-group green-border-focus">
  <label for="exampleFormControlTextarea5">Colorful border on :focus state</label>
  <textarea class="form-control" id="exampleFormControlTextarea5" v-model="text" rows="3"></textarea>
</div>
                 <div class="modal-footer justify-content-center align-items-center">
                        <button  type="button" class="btn-lg btn-primary" @click="$emit('cancel' )">Cancel</button>
                        <button  type="button" class="btn-lg btn-danger" @click="$emit('save',text )">Save</button>
                    </div>
  </div>

</div>
</template>

<script>

export default {
  name: 'noteEditor',
  data() {
    return {
      text: note? note: ""
    };
  },
  props:['note'],
  emits: ['save','cancel']
};
</script>
<style scoped>
  .modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 600px; /* Could be more or less, depending on screen size */
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