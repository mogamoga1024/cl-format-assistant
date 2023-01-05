
const createRadixOptions = function(_directiveChar, referenceTitle, referenceUrl) {
    return  {
        template: `
            <label class="label-large" for="mincol">mincol</label>
            <input type="number" id="mincol" v-model="mincol" min="1"><div class="description">最小文字数</div><br>
            <label class="label-large" for="padchar">padchar</label>
            <input type="text" id="padchar" v-model="padchar" maxlength="1"><div class="description">パディングに利用する文字</div><br>
            <label class="label-large" for="commachar">commachar</label>
            <input type="text" id="commachar" v-model="commachar" maxlength="1"><div class="description">カンマに利用する文字</div><br>
            <label class="label-large" for="comma-interval">comma-interval</label>
            <input type="number" id="comma-interval" v-model="commaInterval" min="1"><div class="description">カンマの間隔</div><br>
            <div class="radio-container">
              <div class="radio-label">修飾子</div>
              <div class="radio">
                <input type="radio" id="option0" value="" v-model="prefix" />
                <label for="option0">なし</label><br>
                <input type="radio" id="option1" value=":" v-model="prefix" />
                <label for="option1"><div class="prefix">:</div>カンマ区切りする</label><br>
                <input type="radio" id="option2" value="@" v-model="prefix" />
                <label for="option2"><div class="prefix">@</div>正数のときに+の符号を出力する</label><br>
                <input type="radio" id="option3" value=":@" v-model="prefix" />
                <label for="option3"><div class="prefix">:@</div>カンマ区切りし、正数のときに+の符号を出力する</label>
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
                mincol: 1,
                padchar: " ",
                commachar: ",",
                commaInterval: 3,
                defaultMincol: 1,
                defaultPadchar: " ",
                defaultCommachar: ",",
                defaultCommaInterval: 3
            }
        },
        watch: {
            prefix() {
                this.creatDirective();
            },
            mincol() {
                this.creatDirective();
            },
            padchar() {
                this.creatDirective();
            },
            commachar() {
                this.creatDirective();
            },
            commaInterval() {
                this.creatDirective();
            }
        },
        mounted() {
            this.creatDirective();
        },
        methods: {
            creatDirective() {
                const needMincol = needParam(this.mincol, this.defaultMincol);
                const needPadchar = needParam(this.padchar, this.defaultPadchar);
                const needCommachar = needParam(this.commachar, this.defaultCommachar);
                const needCommaInterval = needParam(this.commaInterval, this.defaultCommaInterval);
    
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
};
