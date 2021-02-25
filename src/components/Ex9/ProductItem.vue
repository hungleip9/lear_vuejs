<template>
    <div class="wrap">
        <div>
            <table class="table">
                <tr>
                    <th>Ten san pham</th>
                    <th>Gia san pham</th>
                    <th>Binh luan</th>
                    <th>Xoa</th>
                    <th>Sửa</th>
                </tr>
                <tr>
                    <td>{{task.name}}</td>
                    <td>{{task.price}}</td>
                    <td>{{task.description}}</td>
                    <td>
                        <button class="deleteButton" @click="onDelete">
                            Xóa
                        </button>
                    </td>
                    <th>
                        <button class="editButton" @click="onEdit(task.id)">
                            Sủa
                        </button>
                    </th>
                </tr>
            </table>
        </div>
        <div>
            
        </div>
    </div>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: ['task'],
    data () {
      return {
        checked: this.task.is_complete,
      }
    },
    methods: {
      onDelete () {
        this.$emit('onDeleteItem')
      },
      onEdit(id){
        this.$emit('onEditItem', id)
      }
    },
    watch: {
      checked (value) {
        this.$emit('changeStatus', value)
      }
    }
  }
</script>

<style lang="scss" scoped>
    $colorStroke: #d8e0ea;
    $colorDefault: #253036;
    $colorRed: #f54b5e;
    $colorWhite: #fff;
    $colorSuccess: #28a745;

    .wrap {
        display: flex;
        align-items: center;
        

        .table {
            th {
                border: 1px solid black!important;
            }
            td {
                border: 1px solid black!important;
            }
        }

        .deleteButton {
            background: $colorRed;
            border: unset;
            font-size: 14px;
            font-weight: bold;
            color: $colorWhite;
            width: 50px;
            height: 20px;
            border-radius: 5px;
            cursor: pointer;
            margin-left: 8px;
        }

        .editButton {
            background: $colorSuccess;
            border: unset;
            font-size: 14px;
            font-weight: bold;
            color: $colorWhite;
            width: 50px;
            height: 20px;
            border-radius: 5px;
            cursor: pointer;
            margin-left: 8px;
        }
    }
</style>