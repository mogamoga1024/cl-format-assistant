
const App = {
    components: {
        TildaOptions
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
        },
        changeDirective(newDirective) {
            console.log(newDirective);
            this.directive = newDirective;
        }
    }
};

const app = Vue.createApp(App).mount("#app");
