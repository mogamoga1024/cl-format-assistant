
const NewLineOptions = {
    template: `
        <label for="n">n:繰り返し回数</label>
        <input type="number" id="n" v-model="n">
    `,
    emits: ["createdDirective"],
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
    mounted() {
        this.creatDirective();
    },
    methods: {
        creatDirective() {
            let directive = `~%`;
            if (this.n !== this.defaultN) {
                directive = `~${this.n}%`;
            }
            this.$emit("createdDirective", directive);
        }
    }
};
