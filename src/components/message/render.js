// 函数式组件
export default {
  functional: true,
  props: {
    content: [Object, String]
  },
  render: (h, ctx) => {
    return typeof ctx.props.content === 'object'
      ? ctx.props.content
      : h('span', ctx.props.content)
  }
}
