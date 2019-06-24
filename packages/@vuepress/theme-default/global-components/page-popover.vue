<template>
  <el-popover placement="top-start" title="Title" width="200" trigger="hover" content="this is content, this is content, this is content">
    <el-button slot="reference">Hover to activate</el-button>
    <div v-html="msg"/>
    {{msg}}
    <component :is="tt"/>
  </el-popover>
</template>

<script>
  import MarkdownIt from 'markdown-it'
  const md = new MarkdownIt();

  const test = '# markdown-it rulezz <el-button>test</el-button>>!';
  import test2 from '/Users/sbibik/Desktop/portecosys/projects/waves-documentation/packages/docs/docs/en/ride/about-ride.md'


  console.log('test2:', test2);
  const result = md.render(test);

export default {
  data () {
    return {
      msg: result,
      t: null,
      tt: test2,
    }
  },

  // computed: {
  //   test() {
  //     return this.createComment()
  //   },
  // }

  mounted () {
    const t = new this.constructor({
      template: test
    });
    // this.t=t
    console.log('this:', t)
  }
}
</script>
