

import { defineStore } from 'pinia'
import axios from 'axios';
export const useSendReqeustStore = defineStore('useSendReqeustStore', {
  state: () => {
    return { user: null  , token : null   }
  },
  actions: {
    async apiService(params) {
       return await axios.request({
          method : params.method ,
          url : process.env.VUE_APP_API_URL+''+params.url
        })
        .then(res => {
          return  Promise.resolve(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },
  },
})