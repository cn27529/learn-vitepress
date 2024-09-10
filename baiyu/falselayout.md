---
layout: false
#navbar: false
#sidebar: false
#aside: false


---
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


