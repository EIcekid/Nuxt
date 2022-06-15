<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>
<script>
  export default {
    data () {
          return {
            a:'',
      headers: [
        {
          text: 'id',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'user_id', value: 'user_id'},
        { text: 'name', value: 'name' },
        { text: 'role_id', value:'role_id'},
        { text: 'mail', value:'mail'},
        { text:'encrypted_password', value:'encrypted_password'},
        { text: 'create_time', value: 'create_time' },
        { text: 'update_time', value: 'update_time' },
        ],
    }
  },
    asyncData() {
    return fetch('http://localhost:3000/api/AllStaff', { method: 'GET' })
      .then(res => res.json())
      .then(res => {
        //asyncData 方法获取的数据会与组件数据合并，所以这里返回对象
        return {
          desserts: res.message
        }
      })
  }
}
</script>