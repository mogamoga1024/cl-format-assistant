
const viewModel = {
    components: {
        
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

Vue.createApp(viewModel).mount("#app");
