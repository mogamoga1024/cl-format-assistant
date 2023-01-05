
const App = {
    components: {
        TildaOptions,
        CharOptions,
        NewLineOptions,
        FreshLineOptions,
        DecimalOptions,
        BinaryOptions,
        OctalOptions,
        HexadecimalOptions,
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
