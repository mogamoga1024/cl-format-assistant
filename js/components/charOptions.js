
const CharOptions = {
    template: ``,
    emits: ["createdDirective"],
    mounted() {
        this.$emit("createdDirective", "~c");
    }
};

