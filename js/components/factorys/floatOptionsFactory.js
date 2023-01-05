
const createFloatOptions = function(_directiveChar, referenceTitle, referenceUrl) {
    return {
        template: `
            <label class="label" for="w">w</label>
            <input type="number" id="w" v-model="w">文字数<br>
            <label class="label" for="d">d</label>
            <input type="number" id="d" v-model="d">仮数の小数点以下の桁数<br>
            <label class="label" for="e">e</label>
            <input type="number" id="e" v-model="e">指数部の桁数<br>
            <label class="label" for="k">k</label>
            <input type="number" id="k" v-model="k">仮数の整数部の桁数<br>
            <label class="label" for="overflowchar">overflowchar</label>
            <input type="text" id="overflowchar" v-model="overflowchar">wの文字数を超えたときに出力する文字<br>
            <label class="label" for="padchar">padchar</label>
            <input type="text" id="padchar" v-model="padchar">パディングに利用する文字<br>
            <label class="label" for="exponentchar">exponentchar</label>
            <input type="text" id="exponentchar" v-model="exponentchar">仮数部と指数部の間の文字<br>
            修飾子<br>
            <input type="radio" id="option0" value="" v-model="prefix" />
            <label for="option0">なし</label><br>
            <input type="radio" id="option1" value="@" v-model="prefix" />
            <label for="option1">@ 正数のときに+の符号を出力する</label><br>
            参考サイト: <a href="${referenceUrl}" target="_blank" rel="noopener noreferrer">${referenceTitle}</a>
        `,
        emits: ["createdDirective"],
        data() {
            return {
                directiveChar: _directiveChar,
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
                const needW = needParam(this.w, this.defaultW);
                const needD = needParam(this.d, this.defaultD);
                const needE = needParam(this.e, this.defaultE);
                const needK = needParam(this.k, this.defaultK);
                const needOverflowchar = needParam(this.overflowchar, this.defaultOverflowchar);
                const needPadchar = needParam(this.padchar, this.defaultPadchar);
                const needExponentchar = needParam(this.exponentchar, this.defaultExponentchar);
    
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
};
