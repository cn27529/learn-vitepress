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
https://github.com/googlemaps/js-samples/blob/6a8598f2cbf6c57eca8c1c9b83b6629a21d34e21/dist/samples/add-map/docs/index.html
https://developers.google.com/maps/documentation/embed/embedding-map?hl=zh-tw
https://chatgpt.com/c/7b7ac3dd-eb40-4736-a1e9-acd0147ef280
AIzaSyCSOoxI3HwKgmOesf3_m48uxR6UgLD5WC4
-->
<script client src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCSOoxI3HwKgmOesf3_m48uxR6UgLD5WC4&callback=initMap" async defer></script>

<style>
    #map {
        height: 400px;
        width: 100%;
    }
</style>
<div id="map"></div>

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

<style lang="sass">
.title
  font-size: 20px
  
</style>
