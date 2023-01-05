
const DecimalOptions = {
    template: `
        <label for="mincol">mincol:最小文字数</label>
        <input type="number" id="mincol" v-model="mincol"><br>
        <label for="padchar">padchar:パディングに利用する文字</label>
        <input type="text" id="padchar" v-model="padchar"><br>
        <label for="commachar">commachar:カンマに利用する文字</label>
        <input type="text" id="commachar" v-model="commachar"><br>
        <label for="comma-interval">comma-interval:カンマの間隔</label>
        <input type="number" id="comma-interval" v-model="commaInterval">
    `,
    emits: ["createdDirective"],
    data() {
        return {
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
            const needMincol = this.mincol !== this.defaultMincol;
            const needPadchar = this.padchar !== this.defaultPadchar;
            const needCommachar = this.commachar !== this.defaultCommachar;
            const needCommaInterval = this.commaInterval !== this.defaultCommaInterval;

            const mincol = needMincol ? this.mincol : "";
            const padchar = needPadchar ? this.padchar : "";
            const commachar = needCommachar ? this.commachar : "";

            let directive = `~d`;
            if (needMincol && !needPadchar && !needCommachar && !needCommaInterval) {
                directive = `~${this.mincol}d`;
            }
            else if (needPadchar && !needCommachar && !needCommaInterval) {
                directive = `~${mincol},${this.padchar}d`;
            }
            else if (needCommachar && !needCommaInterval) {
                directive = `~${mincol},${padchar},${this.commachar}d`;
            }
            else if (needCommaInterval) {
                directive = `~${mincol},${padchar},${commachar},${this.commaInterval}d`;
            }

            this.$emit("createdDirective", directive);
        }
    }
};

