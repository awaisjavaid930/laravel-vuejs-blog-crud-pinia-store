<template>
<div>
    <v-card class="mx-auto" max-width="434" tile>
        <v-img height="100%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
            <v-row align="end" class="fill-height">
                <v-col align-self="start" class="pa-0" cols="12">
                    <v-avatar class="profile" color="grey" size="164" tile>
                        <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                    </v-avatar>
                </v-col>
                <v-col class="py-0">
                    <v-list-item color="rgba(0, 0, 0, .4)" dark>
                        <v-list-item-content>
                            <v-list-item-title class="text-h6 text-white">
                                Awais Javaid (Full Stack Laravel Developer)
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>

                <!-- Login Form -->
                    
                <!-- End Login Form -->
            </v-row>
        </v-img>
    </v-card>


    <v-form @submit="login">
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="email"
                        :rules="nameRules"
                        label="Email"
                        required>
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="password"
                        :rules="nameRules"
                        label="Password"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-container>
        <v-btn type="submit" depressed color="error">Login</v-btn>
        <br /><br />
    </v-form>
</div>
</template>
<script>
import { useSendReqeustStore } from '@/store/action'

export default {
    name : 'MainView',
    data()
    {
        return {
            valid: false,
            email: '',
            password: '',
            nameRules: [
                v => !!v || 'Field is required',
                v => v.length <= 10 || 'Field must be less than 10 characters',
            ]
        }
    },
    methods : {
        login(e)
        {
            e.preventDefault();
            let payload =  {email : this.email ,  password : this.password} ;
            let store = useSendReqeustStore();
            store.login(payload)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })

        }
    }
}
</script>