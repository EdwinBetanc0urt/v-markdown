import markdown from "./markdown"

if (typeof window != undefined && window.Vue) {
    window.Vue.use(markdown)
}

export default markdown;