---
layout: home
#navbar: false
#sidebar: false
#aside: false

hero:
  name: "捐款捐物"
  text: "佛陀濟人精神"
  tagline: 彰化縣白玉功德會致力於服務長者及社區關懷，秉持佛陀濟人精神。為持續提供全方位照護，歡迎捐款捐物，共同關愛長者，實現在地安養的目標。
  image:
    src: /give-love.png
    alt: 捐款捐物
  actions:
    # - theme: brand
    #   text: Get Started
    #   link: /guide/what-is-vitepress
    # - theme: alt
    #   text: View on GitHub
    #   link: https://github.com/vuejs/vitepress


features:
  - icon: 💙
    title: 公司行號捐款
    link: https://github.com/vuejs/vitepress
    linkText: 立即捐款
    details: ■名稱：彰化縣白玉功德會
              <br>扣款憑單開立資訊
              <br>■統編：15744887
              <br>■地址：台東市寧波街195號
      

  - icon: 💜
    title: 線上捐款
    details: https://www.tch-donate.org.tw/contents/project_ct?page=2&p_id=2

  - icon: ❤️
    title: 郵局劃撥
    details: 戶名：彰化縣白玉功德會
              <br>帳號：06685996
              <br>◎  劃撥單下載（ PDF 檔） ( 可自行列印空白劃撥單，填妥後至郵局臨櫃繳款。)
            
  - icon: 💚
    title: 銀行匯款
    details: 戶名：彰化縣白玉功德會
              <br>帳號： 81150226289 第一商業銀行台東分行（銀行代碼：007）
              <br>※匯款後，請於匯款存根聯上註明收據姓名、寄件地址、連絡電話等資料或來電（089）310000告知，謝謝。
  
---
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

## Markdown Content

The count is: {{ count }}

<button @click="count++">Increment</button>


# {{ $frontmatter.title }}