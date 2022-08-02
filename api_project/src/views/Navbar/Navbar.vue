<template>
    <v-card class="pa-12"  flat>
        <v-card elevation="12" width="256">
            <v-navigation-drawer floating permanent>
                <v-list dense rounded>
                    <v-list-item v-for="item in items" :key="item.title" link>
                        <v-btn class="ma-2" :to="item.link" outlined color="indigo"> {{ item.title }}   
                            <v-icon right dark> {{ item.icon }} </v-icon>
                        </v-btn>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-card>
        <MainView />
      <router-view/>
    </v-card>
</template>
<script>
import MainView from '../Website/MainView.vue'
  export default {
    name: "Navbar",
    data() {
        return {
            items: [
                { title: "DYNAMIC GC", icon: "mdi-view-dashboard", link: "/" },
                { title: "Users", icon: "mdi-view-dashboard", link: "/users" },
                { title: "Messsages", icon: "mdi-forum", link: "/messages" },
            ],
        };
    },
    components: { MainView }
}
</script>