---
layout: page
title: team
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

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />
</VPTeamPage>

<script setup>
import { VPTeamPage,  VPTeamPageTitle,  VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
]
</script>