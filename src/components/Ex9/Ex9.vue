<template>
  <div>
    HelloWorld
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'HelloWorld',
    mounted() {
      axios({
        method: 'get',
        url: 'http://vuecourse.zent.edu.vn/api',
      }).then((response) => {
        // handle success
        console.log(response);
      }).catch((error) => {
        // handle error
        console.log(error);
      });
    }
  }
</script>