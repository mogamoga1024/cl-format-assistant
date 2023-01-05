
const App = {
    components: {
        TildaOptions, CharOptions, NewLineOptions, FreshLineOptions,
        DecimalOptions, BinaryOptions, OctalOptions, HexadecimalOptions,
        FixedFloatOptions, ExponentFloatOptions, GeneralFloatOptions,
        AestheticOptions, StandardOptions
    },
    data() {
        return {
            directiveSummary: "",
            directive: "",
            currentDirectiveComponent: "tilda-options",
            directiveSummaryList: {
                "tilda": "~：チルダ",
                "char": "c：文字",
                "new-line": "%：改行",
                "fresh-line": "&：先頭以外改行",
                "decimal": "d：整数（10進数）",
                "binary": "b：整数（2進数）",
                "octal": "o：整数（8進数）",
                "hexadecimal": "x：整数（16進数）",
                "fixed-float": "f：小数（固定小数点）",
                "exponent-float": "e：小数（指数）",
                "general-float": "g：小数（自動選択）",
                "aesthetic": "a：汎用（美的）",
                "standard": "s：汎用（標準）",
            }
        }
    },
    created() {
        this.directiveSummary = this.directiveSummaryList["tilda"];
    },
    methods: {
        onDirectiveButtonClick(directiveName) {
            this.directiveSummary = this.directiveSummaryList[directiveName];
            this.currentDirectiveComponent = `${directiveName}-options`;
        },
        changeDirective(newDirective) {
            this.directive = newDirective;
        }
    }
};

const app = Vue.createApp(App).mount("#app");
