<style media="screen">
.CodeMirror, .CodeMirror-scroll {
  min-height: 200px;
}
</style>
<script>
import SimpleMDE from 'simplemde'
export default {
  props: {
    content: String,
    placeholder: String
  },
  data: {
    simplemde: ''
  },
  ready() {
      const simplemde = new SimpleMDE({
      element: document.getElementById("answerEditor"),
      placeholder: this.placeholder,
      spellChecker: false,
      status: false,
      promptURLs: true,
      shortcuts: {
        drawTable: "Cmd-Alt-T"
      },
      renderingConfig: {
        codeSyntaxHighlighting: true
      },
      parsingConfig: {
        strikethrough: false,
        allowAtxHeaderWithoutSpace: false
      },
      tabSize: 4
    });
    this.simplemde = simplemde;

    simplemde.codemirror.on("change", () => {
      this.content = simplemde.value();
    });

  },
  watch: {
    'content': function () {
      if (this.content == "") {
        this.simplemde.value("");
      }
    }
  }
}
</script>

<template>
    <textarea id="answerEditor" ></textarea>

</template>
