
const App = {
    components: {
        "tilda-options": TildaOptions
    },
    data() {
        return {
            result: "~5.2f"
        }
    },
    computed: {
        
    },
    mounted() {
        
    },
    methods: {
        onTildaButtonClick() {
            //this.result = "~~"
        }
    }
};

const app = Vue.createApp(App).mount("#app");
