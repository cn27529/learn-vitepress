---
layout: doc
title: 白玉服務據點
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
aside: left
---

# {{ $frontmatter.title }} 💙

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

## Markdown Content

The count is: {{ count }}

<button @click="count++">Increment</button>

<script client src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
<style>
    .map {
        height: 400px;
        width: 100%;
    }
</style>

<script>
        function initMap() {
            const mapCenter = { lat: 23.956247, lng: 120.575201 }; // 這裡使用員林市至平街 50 巷 39 號的經緯度
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15,
                center: mapCenter,
            });
            const marker = new google.maps.Marker({
                position: mapCenter,
                map: map,
                title: "彰化縣員林市至平街 50 巷 39 號",
            });
        }
    </script>
<h1>Google Maps API Demo</h1>
<div id="map"></div>



## 日間照顧中心

950008 台東市寧波街195號
TEL：（089）960-200、（089）960-201
FAX：（089）347-917

服務事工：
送餐服務、居家服務、老人日托服務（6）、兒童事工（弱勢家庭兒童課業輔導班（7）、行動書車）、青少年事工（希望種子）、社區照顧關懷據點服務（8）、愛加倍小舖、復康巴士（身心障礙者復康巴士、長照交通接送服務）、日間照顧服務及多元照顧服務（關山鎮、鹿野鄉、金峰鄉）、日間照顧服務（台東市）、文化健康站（10）、行動沐浴服務車、到宅乾燥車、長照2.0服務單位（A、B、C級）、預防及延緩失能服務、共餐服務、有福館（關山、卑南、池上、太麻里）、家庭照顧者支持性服務、失智社區服務據點（3）等。
註：括弧裡的數字表示數量，例如：老人日托服務（6），意謂設有六個老人日托站，以上統計截至一一三年二月二十九日止。

## 緣起

![An image](/origin_of_life.png)


**彰化縣白玉功德會**的誕生源於一群對佛學有著深刻熱愛的年輕人，在民國99年齊心合力下成立。他們相信佛陀普世濟人的精神，深深地認識到社區的需求和長者的孤獨，因此決心展開這份神聖的使命，成立**彰化縣白玉功德會**。這個組織的核心價值是以愛和關懷為基石，為社區的長者們提供身心靈全方位的照護和支持。


## 簡介

![An image](/long_term_care_1080.png)


隨著時光的流轉，**彰化縣白玉功德會**的發展逐漸走向成熟。在創會理事長於101年的北歐五國參訪中，他深受北歐長照模式的啟發，特別是那種尊重長者、注重社區關懷的文化，決定將這樣的價值觀融入到**彰化縣白玉功德會**的營運中。於是，在員林設立了「**秀家人**」日間照顧中心，這裡不僅是照顧的場所，更是一個溫馨的大家庭，長者們在這裡不僅得到照顧，更得到愛和關懷。


## 展望

![An image](/long_term_care3_1080.png)


未來，**彰化縣白玉功德會**將持續積極擴展服務範圍和提升服務品質。除了現有的照護服務外，還將引入更多創新的服務模式，例如失能者交通車服務、身障者就業支持等，以滿足不同群體的需求。同時，**彰化縣白玉功德會**也將致力於與社區各界合作，建立更加緊密的社區照護網絡，實現在地老化安養、尊嚴向晚的目標。這一切的努力都是為了讓每一位長者都能享受到優質的老化生活，讓他們感受到被愛、被尊重和被珍惜的美好。
