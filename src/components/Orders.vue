<template>
    <div>
        <!-- <template v-slot:title class="title"> -->
            {{name}}
        <!-- </template> -->
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
    name: "Orders",
    computed:{
        ...mapState('hoadon', [
        'name',
      ]),
      ...mapGetters('hoadon', [
        // Getter muốn gọi đến
      ])
    },
    methods: {
        ...mapMutations('hoadon', [
        
      ]),
    },
}
</script>