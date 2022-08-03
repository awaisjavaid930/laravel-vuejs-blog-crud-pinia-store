<template>
    <v-card>
        <v-card-title>
            <span style="text-align:center;"> {{ title }} </span>
            <v-spacer></v-spacer>
        </v-card-title>
         <v-simple-table fixed-header height="300px">
            <template v-slot:default>
            <thead>
                <tr>
                    <th v-for="header in headers" :key="header" style="width:33%;text-align:center;"> {{ header.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td style="width:33%;text-align:center;">{{  item.id }}</td>
                    <!-- <td style="width:33%;text-align:center;">{{  item.body }}</td>
                    <td style="width:33%;text-align:center;">{{  item.user.name }}</td> -->
                </tr>
            </tbody>
            </template>
        </v-simple-table>
        <v-pagination
            v-model="page"
            :length="length"
            @click="$emit('getPage' , page ) ">
        </v-pagination>
    </v-card>    
</template>
<script>
export default {
    name : 'DataTable',
    data() {
        return {
            search : null,
            page : null
        }
    },
    props : {
        headers: {
            type: Array,
            required: true
        },
        items: {
            type: Array,
            required: true
        },
        length: {
            type: String,
            required: true
        },
        title : {
            type : String,
            required: true
        }
    }
}
</script>