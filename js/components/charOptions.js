
const CharOptions = {
    template: `
        <input type="radio" id="option0" value="" v-model="prefix" />
        <label for="option0">なし</label><br>
        <input type="radio" id="option1" value=":" v-model="prefix" />
        <label for="option1">: 印字不可な文字は名称で出力する</label><br>
        <input type="radio" id="option2" value="@" v-model="prefix" />
        <label for="option2">@ プレフィックスに#\\をつける</label><br>
        <input type="radio" id="option3" value=":@" v-model="prefix" />
        <label for="option3">:@ 印字不可な文字を名称で出力し、Shiftキーについて言及する</label>
    `,
    emits: ["createdDirective"],
    data() {
        return {
            directiveChar: "c",
            prefix: ""
        }
    },
    watch: {
        prefix() {
            this.creatDirective();
        }
    },
    mounted() {
        this.creatDirective();
    },
    methods: {
        creatDirective() {
            this.$emit("createdDirective", `~${this.prefix}${this.directiveChar}`);
        }
    }
};

