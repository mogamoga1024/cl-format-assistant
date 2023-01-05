
const createBasicOptions = function(_directiveChar, referenceTitle, referenceUrl) {
    return {
        template: `
            <label for="n">n:繰り返し回数</label>
            <input type="number" id="n" v-model="n"><br>
            参考サイト: <a href="${referenceUrl}" target="_blank" rel="noopener noreferrer">${referenceTitle}</a>
        `,
        emits: ["createdDirective"],
        data() {
            return {
                directiveChar: _directiveChar,
                n: 1,
                defaultN: 1
            }
        },
        watch: {
            n() {
                this.creatDirective();
            }
        },
        mounted() {
            this.creatDirective();
        },
        methods: {
            creatDirective() {
                let directive = "~";
                if (this.n !== this.defaultN) {
                    directive = `~${this.n}`;
                }
                directive += this.directiveChar;
                this.$emit("createdDirective", directive);
            }
        }
    }
};
