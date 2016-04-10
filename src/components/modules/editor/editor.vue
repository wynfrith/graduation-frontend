<style media="screen">
.CodeMirror, .CodeMirror-scroll {
  min-height: 200px;
}
</style>
<script>
import SimpleMDE from 'simplemde'
export default {
  ready() {
    const simplemde = new SimpleMDE({
      element: document.getElementById("answerEditor"),
      placeholder: "写下你的答案",
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
  }
}
</script>


<template>
  <form>
    <textarea id="answerEditor"></textarea>
  </form>

</template>
