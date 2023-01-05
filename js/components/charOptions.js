
const CharOptions = {
    template: `
        <div class="radio-container">
          <div class="radio-label">修飾子</div>
          <div class="radio">
            <input type="radio" id="option0" value="" v-model="prefix" />
            <label for="option0">なし</label><br>
            <input type="radio" id="option1" value=":" v-model="prefix" />
            <label for="option1"><div class="prefix">:</div>印字不可な文字は名称で出力する</label><br>
            <input type="radio" id="option2" value="@" v-model="prefix" />
            <label for="option2"><div class="prefix">@</div>プレフィックスに#\\をつける</label><br>
            <input type="radio" id="option3" value=":@" v-model="prefix" />
            <label for="option3"><div class="prefix">:@</div>印字不可な文字を名称で出力し、Shiftキーについて言及する</label>
          </div>
        </div>
        <div class="link">
          参考サイト：<a href="http://www.lispworks.com/documentation/HyperSpec/Body/22_caa.htm" target="_blank" rel="noopener noreferrer">22.3.1.1 Tilde C: Character</a>
        </div>
    `,
    emits: ["createdDirective"],
    data() {
        return {
            directiveChar: "c",
            prefix: ""
        }
    },
    watch: {
        prefix() {
            this.creatDirective();
        }
    },
    mounted() {
        this.creatDirective();
    },
    methods: {
        creatDirective() {
            this.$emit("createdDirective", `~${this.prefix}${this.directiveChar}`);
        }
    }
};

