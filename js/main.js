
const App = {
    components: {
        "tilda-options": TildaOptions
    },
    data() {
        return {
            directive: "~5.2f"
        }
    },
    computed: {
        
    },
    mounted() {
        
    },
    methods: {
        onTildaButtonClick() {
            //this.directive = "~~"
        }
    }
};

const app = Vue.createApp(App).mount("#app");
