
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
            defaultW: "",
            defaultD: "",
            defaultE: "",
            defaultK: 1,
            defaultOverflowchar: "",
            defaultPadchar: " ",
            defaultExponentchar: "e"
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
            const needE = this.e !== this.defaultE;
            const needK = this.k !== this.defaultK;
            const needOverflowchar = this.overflowchar !== this.defaultOverflowchar;
            const needPadchar = this.padchar !== this.defaultPadchar;
            const needExponentchar = this.exponentchar !== this.defaultExponentchar;

            const w = needW ? this.w : "";
            const d = needD ? this.d : "";
            const e = needE ? this.e : "";
            const k = needK ? this.k : "";
            const overflowchar = needOverflowchar ? charEscape(this.overflowchar) : "";
            const padchar = needPadchar ? charEscape(this.padchar) : "";
            const exponentchar = charEscape(this.exponentchar);

            let directive = `~${this.prefix}`;
            if (needW && !needD && !needE && !needK && !needOverflowchar && !needPadchar && !needExponentchar) {
                directive += `${w}`;
            }
            else if (needD && !needE && !needK && !needOverflowchar && !needPadchar && !needExponentchar) {
                directive += `${w},${d}`;
            }
            else if (needE && !needK && !needOverflowchar && !needPadchar && !needExponentchar) {
                directive += `${w},${d},${e}`;
            }
            else if (needK && !needOverflowchar && !needPadchar && !needExponentchar) {
                directive += `${w},${d},${e},${k}`;
            }
            else if (needOverflowchar && !needPadchar && !needExponentchar) {
                directive += `${w},${d},${e},${k},${overflowchar}`;
            }
            else if (needPadchar && !needExponentchar) {
                directive += `${w},${d},${e},${k},${overflowchar},${padchar}`;
            }
            else if (needExponentchar) {
                directive += `${w},${d},${e},${k},${overflowchar},${padchar},${exponentchar}`;
            }
            directive += this.directiveChar;

            this.$emit("createdDirective", directive);
        }
    }
};

