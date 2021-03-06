const markdown = require("markdown-it")
const md = new markdown()

const render = (el, binding, vnode) => {
    let data = binding.value;
    el.innerHTML = md.render(data);
}

function directive(Vue, options) {
    Vue.directive("markdown", {
        bind: render,
        update: render
    })
}

const install = (Vue, options) => {
    directive(Vue, options)
}

module.exports = exports = install;