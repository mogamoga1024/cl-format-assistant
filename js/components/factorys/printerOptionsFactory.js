
const createPrinterOptions = function(_directiveChar) {
    return  {
        template: `
            <label for="mincol">mincol:最小文字数</label>
            <input type="number" id="mincol" v-model="mincol"><br>
            <label for="colinc">colinc:1回のパディングでpadcharを利用する回数</label>
            <input type="number" id="colinc" v-model="colinc"><br>
            <label for="minpad">minpad:パディングの最小回数</label>
            <input type="number" id="minpad" v-model="minpad"><br>
            <label for="padchar">padchar:パディングに利用する文字</label>
            <input type="text" id="padchar" v-model="padchar"><br>
            修飾子<br>
            <input type="radio" id="option0" value="" v-model="prefix" />
            <label for="option0">なし</label><br>
            <input type="radio" id="option1" value=":" v-model="prefix" />
            <label for="option1">: nilを()と出力する</label><br>
            <input type="radio" id="option2" value="@" v-model="prefix" />
            <label for="option2">@ 右寄せで出力する</label><br>
            <input type="radio" id="option3" value=":@" v-model="prefix" />
            <label for="option3">:@ 右寄せで出力し、かつnilは()と出力する</label>
        `,
        emits: ["createdDirective"],
        data() {
            return {
                directiveChar: _directiveChar,
                prefix: "",
                mincol: 0,
                colinc: 1,
                minpad: 0,
                padchar: " ",
                defaultMincol: 0,
                defaultColinc: 1,
                defaultMinpad: 0,
                defaultPadchar: " "
            }
        },
        watch: {
            prefix() {
                this.creatDirective();
            },
            mincol() {
                this.creatDirective();
            },
            colinc() {
                this.creatDirective();
            },
            minpad() {
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
                const needMincol = needParam(this.mincol, this.defaultMincol);
                const needColinc = needParam(this.colinc, this.defaultColinc);
                const needMinpad = needParam(this.minpad, this.defaultMinpad);
                const needPadchar = needParam(this.padchar, this.defaultPadchar);
    
                const mincol = needMincol ? this.mincol : "";
                const colinc = needColinc ? charEscape(this.colinc) : "";
                const minpad = needMinpad ? charEscape(this.minpad) : "";
                const padchar = this.padchar;
    
                let directive = `~${this.prefix}`;
                if (needMincol && !needColinc && !needMinpad && !needPadchar) {
                    directive += `${mincol}`;
                }
                else if (needColinc && !needMinpad && !needPadchar) {
                    directive += `${mincol},${colinc}`;
                }
                else if (needMinpad && !needPadchar) {
                    directive += `${mincol},${colinc},${minpad}`;
                }
                else if (needPadchar) {
                    directive += `${mincol},${colinc},${minpad},${padchar}`;
                }
                directive += this.directiveChar;
    
                this.$emit("createdDirective", directive);
            }
        }
    };    
};
