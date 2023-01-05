
const TildaOptions = {
    template: `
        <label for="n">n:繰り返し回数</label>
        <input type="number" id="n" v-model="n">
    `,
    data() {
        return {
            n: 1
        }
    },
    watch: {
        n(newValue, oldValue) {
            console.log(newValue, oldValue);
        }
    }
};

