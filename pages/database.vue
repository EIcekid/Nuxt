<template>
  <div>
    {{ title }}
      <!-- <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-1"></v-data-table> -->
  </div>
</template>

<script>
export default {
  data() {
    // return {
    //   headers: [
    //     {
    //       text: 'id',
    //       align: 'start',
    //       sortable: false,
    //       value: 'id',
    //     },
    //     { text: 'roleno', value: 'roleno' },
    //     { text: 'name', value: 'name' },
    //     { text: 'create_time', value: 'create_time' },
    //     { text: 'update_time', value: 'update_time' },
    //     ],
    //     desserts: res.message
    // }
  },
  asyncData() {
    return fetch('http://localhost:3000/api/a', { method: 'GET' })
      .then(res => res.json())
      .then(res => {
        //asyncData 方法获取的数据会与组件数据合并，所以这里返回对象
        return {
          title: res.message
        }
        console.log(res)
      })
  }
}

</script>