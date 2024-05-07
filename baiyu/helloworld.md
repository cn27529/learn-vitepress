---
hello: world
sidebar: false
prev: false
next: false

#定义侧边栏组件在 doc 布局中的位置。
#将此值设置为 false 可禁用侧边栏容器。
#将此值设置为 true 会将侧边栏渲染到右侧。
#将此值设置为 left 会将侧边栏渲染到左侧。
aside: left
---

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

## Markdown Content

The count is: {{ count }}

<button :class="$style.button" @click="count++">Increment</button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>


<h2 id="markdown-content">My Google Maps Demo</h2>
<!--
https://developers.google.com/maps/documentation/embed/embedding-map?hl=zh-tw
AIzaSyCSOoxI3HwKgmOesf3_m48uxR6UgLD5WC4
-->
<div id="map"></div>
