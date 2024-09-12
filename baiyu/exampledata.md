---
layout: doc
title: Load data from example.data.js

lastUpdated: true

#是否在当前页的页脚显示编辑链接。
editLink: false
sidebar: false
prev: false
next: false

#定义侧边栏组件在 doc 布局中的位置。
#将此值设置为 false 可禁用侧边栏容器。
#将此值设置为 true 会将侧边栏渲染到右侧。
#将此值设置为 left 会将侧边栏渲染到左侧。
aside: false

---
# {{ $frontmatter.title }}

<script setup>

import { data } from './example.data.js'

</script>

<pre>{{ data }}</pre>

<span v-for="i in data.datas">{{ i }}</span>

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::


