
const App = {
    components: {
        TildaOptions,
        CharOptions,
    },
    data() {
        return {
            directive: "tilda-options",
            currentDirectiveComponent: ""
        }
    },
    methods: {
        onTildaButtonClick() {
            this.currentDirectiveComponent = "tilda-options";
        },
        onCharButtonClick() {
            this.currentDirectiveComponent = "char-options";
        },
        changeDirective(newDirective) {
            this.directive = newDirective;
        }
    }
};

const app = Vue.createApp(App).mount("#app");
