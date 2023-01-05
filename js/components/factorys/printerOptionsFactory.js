
const createPrinterOptions = function(_directiveChar, referenceTitle, referenceUrl) {
    return  {
        template: `
            <label class="label" for="mincol">mincol</label>
            <input type="number" id="mincol" v-model="mincol" min="0"><div class="description">最小文字数</div><br>
            <label class="label" for="colinc">colinc</label>
            <input type="number" id="colinc" v-model="colinc" min="1"><div class="description">1回のパディングでpadcharを利用する回数</div><br>
            <label class="label" for="minpad">minpad</label>
            <input type="number" id="minpad" v-model="minpad" min="0"><div class="description">パディングの最小回数</div><br>
            <label class="label" for="padchar">padchar</label>
            <input type="text" id="padchar" v-model="padchar" maxlength="1"><div class="description">パディングに利用する文字</div><br>
            <div class="radio-container">
              <div class="radio-label">修飾子</div>
              <div class="radio">
                <input type="radio" id="option0" value="" v-model="prefix" />
                <label for="option0">なし</label><br>
                <input type="radio" id="option1" value=":" v-model="prefix" />
                <label for="option1"><div class="prefix">:</div>nilを()と出力する</label><br>
                <input type="radio" id="option2" value="@" v-model="prefix" />
                <label for="option2"><div class="prefix">@</div>右寄せで出力する</label><br>
                <input type="radio" id="option3" value=":@" v-model="prefix" />
                <label for="option3"><div class="prefix">:@</div>右寄せで出力し、かつnilは()と出力する</label>
              </div>
            </div>
            <div class="link">
              参考サイト：<a href="${referenceUrl}" target="_blank" rel="noopener noreferrer">${referenceTitle}</a>
            </div>
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
                const colinc = needColinc ? this.colinc : "";
                const minpad = needMinpad ? this.minpad : "";
                const padchar = charEscape(this.padchar);
    
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
