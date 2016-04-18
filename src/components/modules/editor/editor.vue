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

    simplemde.codemirror.on("change", () => {
      this.content = simplemde.value();
    });

  }
}
</script>


<template>
    <textarea id="answerEditor" ></textarea>

</template>
