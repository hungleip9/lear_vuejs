<template>
  <div>
    {{formatDate('02/24/2021 18:12:23')}}
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'HelloWorld',
    methods: {
      formatDate (dateString) {
        // Format từ dạng "02/24/2021 18:12:23" thành định dạng kiểu: "24/02/2021"
        return moment(dateString).format('DD/MM/YYYY')
      }
    }
  }
</script>