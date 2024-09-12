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

<script setup>

import { VPTeamPage,  VPTeamPageTitle,  VPTeamMembers, VPTeamPageSection } from 'vitepress/theme'

import { data } from './team.data.js'



</script>

<VPTeamPage>
  <VPTeamPageTitle>    
    <template #title>我們的團隊</template>
    <template #lead>
      這是白玉功德會團隊成員，介紹白玉功德會的組織架構以及成員職掌介紹。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="data.members" />
  <VPTeamPageSection>
    <template #title>Partners</template>
    <template #lead>This is a subject for Partners</template>
    <template #members>
      <VPTeamMembers size="small" :members="data.partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>

<style>
  .VPTeamPage[data-v-5f7da39d] {
    margin-top: 0;
    margin-bottom: 5;
  }
</style>