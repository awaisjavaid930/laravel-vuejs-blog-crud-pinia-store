<template>
  <div>
    <DataTable :headers="headers" :items="data" :length="length" :title="dataTableTitle" @get-page="getResponse" />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
import { useSendReqeustStore } from '@/store/action';
import DataTable from '@/components/DataTable.vue';

export default {
  name: 'HomeView',
  data()
  {
    return {
      search: '',
      length : '',
      dataTableTitle : 'Message List',
      headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { 
          text: 'Messsage',
          value: 'message' 
        },        
        { 
          text: 'Created By',
          value: 'message' 
        }
      ],
      data: [],
    }
  },
  methods: {
   async getResponse(page = null)
    {
      let page_no = (page != null) ? page : 1 ;
      const send_request = useSendReqeustStore();
      let payload = { method : 'GET' , url : 'messages?page= '+ page_no }
      await send_request.apiService(payload)
      .then(res => {
        this.data = res.data ;
        this.length = this.data.length ;
      })  
      .catch(err => {
        console.log(err)
      })
    }
  },
  created() {
    this.getResponse();
  },  
  components: {
    HelloWorld,
    DataTable,
},
};
</script>
