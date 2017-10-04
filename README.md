# v-markdown

## Use:
```javascript
import Vue from "vue"
import VMarkdown from "v-markdown"

Vue.use(VMarkdown)
```

## Component:
```html
<template>
    <div id="markdown" v-markdown="markdownData"></div>
</template>

<script>
    export default {
        data() {
            return {
                markdownData: `#hello world`
            }
        },
    }
</script>
```

## Rendering:
```html
<div id="markdown">
    <h1>hello world</h1>
</div>
```