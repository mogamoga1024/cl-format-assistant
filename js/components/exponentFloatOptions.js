
const ExponentFloatOptions = {
    template: `
        <label for="w">w:文字数</label>
        <input type="number" id="w" v-model="w"><br>
        <label for="d">d:仮数の小数点以下の桁数</label>
        <input type="number" id="d" v-model="d"><br>
        <label for="e">e:指数部の桁数</label>
        <input type="number" id="e" v-model="e"><br>
        <label for="k">k:仮数の整数部の桁数</label>
        <input type="number" id="k" v-model="k"><br>
        <label for="overflowchar">overflowchar:wの文字数を超えたときに出力する文字</label>
        <input type="text" id="overflowchar" v-model="overflowchar"><br>
        <label for="padchar">padchar:パディングに利用する文字</label>
        <input type="text" id="padchar" v-model="padchar"><br>
        <label for="exponentchar">exponentchar:仮数部と指数部の間の文字</label>
        <input type="text" id="exponentchar" v-model="exponentchar"><br>
        修飾子<br>
        <input type="radio" id="option0" value="" v-model="prefix" />
        <label for="option0">なし</label><br>
        <input type="radio" id="option1" value="@" v-model="prefix" />
        <label for="option1">@ 正数のときに+の符号を出力する</label><br>
    `,
    emits: ["createdDirective"],
    data() {
        return {
            directiveChar: "e",
            prefix: "",
            w: "",
            d: "",
            e: "",
            k: 1,
            overflowchar: "",
            padchar: " ",
            exponentchar: "e",
            defalutW: "",
            defalutD: "",
            defalutE: "",
            defalutK: 1,
            defalutOverflowchar: "",
            defalutPadchar: " ",
            defalutExponentchar: "e"
        }
    },
    watch: {
        prefix() {
            this.creatDirective();
        },
        w() {
            this.creatDirective();
        },
        d() {
            this.creatDirective();
        },
        e() {
            this.creatDirective();
        },
        k() {
            this.creatDirective();
        },
        overflowchar() {
            this.creatDirective();
        },
        padchar() {
            this.creatDirective();
        },
        exponentchar() {
            this.creatDirective();
        }
    },
    mounted() {
        this.creatDirective();
    },
    methods: {
        creatDirective() {
            const needW = this.w !== this.defaultW;
            const needD = this.d !== this.defaultD;
            const needK = this.k !== this.defaultK;
            const needOverflowchar = this.overflowchar !== this.defaultOverflowchar;
            const needPadchar = this.padchar !== this.defaultPadchar;

            const w = needW ? this.w : "";
            const d = needD ? this.d : "";
            const k = needK ? this.k : "";
            const overflowchar = needOverflowchar ? charEscape(this.overflowchar) : "";
            const padchar = charEscape(this.padchar);

            let directive = `~${this.prefix}`;
            if (needW && !needD && !needK && !needOverflowchar && !needPadchar) {
                directive += `${w}`;
            }
            else if (needD && !needK && !needOverflowchar && !needPadchar) {
                directive += `${w},${d}`;
            }
            else if (needK && !needOverflowchar && !needPadchar) {
                directive += `${w},${d},${k}`;
            }
            else if (needOverflowchar && !needPadchar) {
                directive += `${w},${d},${k},${overflowchar}`;
            }
            else if (needPadchar) {
                directive += `${w},${d},${k},${overflowchar},${padchar}`;
            }
            directive += this.directiveChar;

            this.$emit("createdDirective", directive);
        }
    }
};

