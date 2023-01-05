
const Other = {
    template: `
        <div id="other">
          <div id="other-description">本ツールで対応外のdirective達の紹介</div>
          <div class="other-directive-container">
            <div class="other-directive-summary">~|：改ページ</div>
            <a href="http://www.lispworks.com/documentation/HyperSpec/Body/22_cad.htm" target="_blank" rel="noopener noreferrer">
              22.3.1.4 Tilde Vertical-Bar: Page</a>
          </div>
          <div class="other-directive-container">
            <div class="other-directive-summary">~r：任意の基数</div>
            <a href="http://www.lispworks.com/documentation/HyperSpec/Body/22_cba.htm" target="_blank" rel="noopener noreferrer">
              22.3.2.1 Tilde R: Radix</a>
          </div>
          <div class="other-directive-container">
            <div class="other-directive-summary">~$：通貨</div>
            <a href="http://www.lispworks.com/documentation/HyperSpec/Body/22_ccd.htm" target="_blank" rel="noopener noreferrer">
              22.3.3.4 Tilde Dollarsign: Monetary Floating-Point</a>
          </div>
          <div class="other-directive-container">
            <div class="other-directive-summary">~w：プリンター制御変数に従う</div>
            <a href="http://www.lispworks.com/documentation/HyperSpec/Body/22_cdc.htm" target="_blank" rel="noopener noreferrer">
              22.3.4.3 Tilde W: Write</a>
          </div>
          <div class="other-directive-container">
            <div class="other-directive-summary">~_：条件付き改行</div>
            <a href="http://www.lispworks.com/documentation/HyperSpec/Body/22_cea.htm" target="_blank" rel="noopener noreferrer">
              22.3.5.1 Tilde Underscore: Conditional Newline</a>
          </div>
          <div class="other-directive-container">
            <div class="other-directive-summary">~&lt;~&gt;：論理ブロック & 正当化</div>
            <a href="http://www.lispworks.com/documentation/HyperSpec/Body/22_ceb.htm" target="_blank" rel="noopener noreferrer">
              22.3.5.2 Tilde Less-Than-Sign: Logical Block</a>
          </div>
          <div class="other-directive-container">
            <div class="other-directive-summary"></div>
            <a href="http://www.lispworks.com/documentation/HyperSpec/Body/22_cfb.htm" target="_blank" rel="noopener noreferrer">
              22.3.6.2 Tilde Less-Than-Sign: Justification</a>
          </div>
          <div class="other-directive-container">
            <div class="other-directive-summary">~i：インデント</div>
            <a href="http://www.lispworks.com/documentation/HyperSpec/Body/22_cec.htm" target="_blank" rel="noopener noreferrer">
              22.3.5.3 Tilde I: Indent</a>
          </div>
          <div class="other-directive-container">
            <div class="other-directive-summary">~/name/：関数呼び出し</div>
            <a href="http://www.lispworks.com/documentation/HyperSpec/Body/22_ced.htm" target="_blank" rel="noopener noreferrer">
              22.3.5.4 Tilde Slash: Call Function</a>
          </div>
          <div class="other-directive-container">
            <div class="other-directive-summary">~t：カーソル移動</div>
            <a href="http://www.lispworks.com/documentation/HyperSpec/Body/22_cfa.htm" target="_blank" rel="noopener noreferrer">
              22.3.6.1 Tilde T: Tabulate</a>
          </div>
          <div class="other-directive-container">
            <div class="other-directive-summary">~*：GoTo</div>
            <a href="http://www.lispworks.com/documentation/HyperSpec/Body/22_cga.htm" target="_blank" rel="noopener noreferrer">
              22.3.7.1 Tilde Asterisk: Go-To</a>
          </div>
          <div class="other-directive-container">
            <div class="other-directive-summary">~[~]：条件式</div>
            <a href="http://www.lispworks.com/documentation/HyperSpec/Body/22_cgb.htm" target="_blank" rel="noopener noreferrer">
              22.3.7.2 Tilde Left-Bracket: Conditional Expression</a>
          </div>
          <div class="other-directive-container">
            <div class="other-directive-summary">~{~}：反復</div>
            <a href="http://www.lispworks.com/documentation/HyperSpec/Body/22_cgd.htm" target="_blank" rel="noopener noreferrer">
              22.3.7.4 Tilde Left-Brace: Iteration</a>
          </div>
          <div class="other-directive-container">
            <div class="other-directive-summary">~?：再起処理</div>
            <a href="http://www.lispworks.com/documentation/HyperSpec/Body/22_cgf.htm" target="_blank" rel="noopener noreferrer">
              22.3.7.6 Tilde Question-Mark: Recursive Processing</a>
          </div>
          <div class="other-directive-container">
            <div class="other-directive-summary">~(~)：大文字小文字変換</div>
            <a href="http://www.lispworks.com/documentation/HyperSpec/Body/22_cha.htm" target="_blank" rel="noopener noreferrer">
              22.3.8.1 Tilde Left-Paren: Case Conversion</a>
          </div>
          <div class="other-directive-container">
            <div class="other-directive-summary">~p：複数形</div>
            <a href="http://www.lispworks.com/documentation/HyperSpec/Body/22_chc.htm" target="_blank" rel="noopener noreferrer">
              22.3.8.3 Tilde P: Plural</a>
          </div>
          <div class="other-directive-container">
            <div class="other-directive-summary">~;：句セパレータ</div>
            <a href="http://www.lispworks.com/documentation/HyperSpec/Body/22_cia.htm" target="_blank" rel="noopener noreferrer">
              22.3.9.1 Tilde Semicolon: Clause Separator</a>
          </div>
          <div class="other-directive-container">
            <div class="other-directive-summary">~^：処理を抜ける</div>
            <a href="http://www.lispworks.com/documentation/HyperSpec/Body/22_cib.htm" target="_blank" rel="noopener noreferrer">
              22.3.9.2 Tilde Circumflex: Escape Upward</a>
          </div>
          <div class="other-directive-container">
            <div class="other-directive-summary">~：改行無視</div>
            <a href="http://www.lispworks.com/documentation/HyperSpec/Body/22_cic.htm" target="_blank" rel="noopener noreferrer">
              22.3.9.3 Tilde Newline: Ignored Newline</a>
          </div>
        </div>
    `
};
