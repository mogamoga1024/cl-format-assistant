
const TildaOptions = {
    template: `
        <label for="n">n:繰り返し回数</label>
        <input type="number" id="n" v-model="n">
    `,
    data() {
        return {
            n: 1,
            defaultN: 1
        }
    },
    watch: {
        n(value) {
            
        }
    },
    methods: {
        createdDirective() {
            
        }
    }
};

