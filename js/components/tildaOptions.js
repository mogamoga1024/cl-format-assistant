
const TildaOptions = {
    template: `
        <label for="n">n:繰り返し回数</label>
        <input type="number" id="n" v-model="n">
    `,
    emits: ["hoge"],
    data() {
        return {
            n: 1,
            defaultN: 1
        }
    },
    watch: {
        n() {
            this.creatDirective();
        }
    },
    methods: {
        creatDirective() {
            let directive = `~~`;
            if (this.n !== this.defaultN) {
                directive = `~${this.n}~`;
            }
            this.$emit("hoge", directive);
        }
    }
};

