
const App = {
    components: {
        TildaOptions,
        CharOptions,
        NewLineOptions,
        FreshLineOptions,
    },
    data() {
        return {
            directive: "",
            currentDirectiveComponent: "tilda-options"
        }
    },
    methods: {
        onDirectiveButtonClick(directiveName) {
            this.currentDirectiveComponent = `${directiveName}-options`;
        },
        changeDirective(newDirective) {
            this.directive = newDirective;
        }
    }
};

const app = Vue.createApp(App).mount("#app");
