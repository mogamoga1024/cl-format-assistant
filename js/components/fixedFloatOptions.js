
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
            const needMincol = this.mincol !== this.defaultMincol;
            const needPadchar = this.padchar !== this.defaultPadchar;
            const needCommachar = this.commachar !== this.defaultCommachar;
            const needCommaInterval = this.commaInterval !== this.defaultCommaInterval;

            const mincol = needMincol ? this.mincol : "";
            const padchar = needPadchar ? charEscape(this.padchar) : "";
            const commachar = needCommachar ? charEscape(this.commachar) : "";
            const commaInterval = this.commaInterval;

            let directive = `~${this.prefix}`;
            if (needMincol && !needPadchar && !needCommachar && !needCommaInterval) {
                directive += `${mincol}`;
            }
            else if (needPadchar && !needCommachar && !needCommaInterval) {
                directive += `${mincol},${padchar}`;
            }
            else if (needCommachar && !needCommaInterval) {
                directive += `${mincol},${padchar},${commachar}`;
            }
            else if (needCommaInterval) {
                directive += `${mincol},${padchar},${commachar},${commaInterval}`;
            }
            directive += this.directiveChar;

            this.$emit("createdDirective", directive);
        }
    }
};

