
const FixedFloatOptions = {
    template: `
        <label for="w">w:文字数</label>
        <input type="number" id="w" v-model="w"><br>
        <label for="d">d:小数点以下の桁数</label>
        <input type="number" id="d" v-model="d"><br>
        <label for="k">k:引数を10^k倍にする</label>
        <input type="number" id="k" v-model="k"><br>
        <label for="overflowchar">overflowchar:wの文字数を超えたときに出力する文字</label>
        <input type="text" id="overflowchar" v-model="overflowchar"><br>
        <label for="padchar">padchar:パディングに利用する文字</label>
        <input type="text" id="padchar" v-model="padchar"><br>
        修飾子<br>
        <input type="radio" id="option0" value="" v-model="prefix" />
        <label for="option0">なし</label><br>
        <input type="radio" id="option1" value="@" v-model="prefix" />
        <label for="option1">@ 正数のときに+の符号を出力する</label><br>
        参考サイト: <a href="http://www.lispworks.com/documentation/HyperSpec/Body/22_cca.htm" target="_blank" rel="noopener noreferrer">22.3.3.1 Tilde F: Fixed-Format Floating-Point</a>
    `,
    emits: ["createdDirective"],
    data() {
        return {
            directiveChar: "f",
            prefix: "",
            w: "",
            d: "",
            k: 0,
            overflowchar: "",
            padchar: " ",
            defaultW: "",
            defaultD: "",
            defaultK: 0,
            defaultOverflowchar: "",
            defaultPadchar: " "
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
        k() {
            this.creatDirective();
        },
        overflowchar() {
            this.creatDirective();
        },
        padchar() {
            this.creatDirective();
        }
    },
    mounted() {
        this.creatDirective();
    },
    methods: {
        creatDirective() {
            const needW = needParam(this.w, this.defaultW);
            const needD = needParam(this.d, this.defaultD);
            const needK = needParam(this.k, this.defaultK);
            const needOverflowchar = needParam(this.overflowchar, this.defaultOverflowchar);
            const needPadchar = needParam(this.padchar, this.defaultPadchar);

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

