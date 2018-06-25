<script>
  /**
   * Компонент, генерирующий случайный контент.
   * Возвращает случайный набор слов из исходного текста, получаемого из json/content.json
   *
   * 25.06.2018 rpalmin
   */

  import srcContent from './json/content';
  export default {
    name: 'randomContent',
    data() {
      return {
        msg: 'randomContent',
        currentContent: ''
      }
    },
    mounted: function () {
      this.currentContent = this.generateContent(srcContent.vocabulary);
    },
    methods: {
      generateContent(src) {
        let crazyContent = '';
        let currentArray = src.split(' ');
        for (let word = 0; word < currentArray.length; word++) {
          crazyContent += ' ' + currentArray[this.getRandomInt(1, currentArray.length - 1)];
        }
        return crazyContent;

      },
      getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div>
    {{currentContent}}
  </div>
</template>
