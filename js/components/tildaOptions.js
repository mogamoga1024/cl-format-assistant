
const TildaOptions = {
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
        n(value) {
            creatDirective();
        }
    },
    methods: {
        creatDirective() {
            const directive = `~${n}~`;
            $emit("createdDirective", directive);
        }
    }
};

