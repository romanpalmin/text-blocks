<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div class="content">
      <div class="controls">
        <controls
          @addSimpleBlock="addBlockToList(0)"
          @addExtBlock="addBlockToList(1)"
        />
      </div>
      <div class="list-items">
        <div v-for="item in listOfBlocks">
          <block :block="item"
                 @deleteBlock="deleteCurrentBlock"
                 @toggleSelected="toggleSelected"
                 @toggleColor="toggleColor"
          />
        </div>
      </div>
      <div class="state-panel">
        <stats :stats="statistics"
        />
      </div>

    </div>
  </div>
</template>

<script>
  /**
   * Основной файл приложения
   */

  import controls from './components/Сontrols.vue';
  import stats from './components/Stats.vue';
  import block from './components/TextBlock.vue';

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Тестовое задание "Текстовые блоки"',
        listOfBlocks: [],
        currentId: 0
      }
    },
    computed: {
      statistics: function () {
        let all = this.listOfBlocks.length;
        let selected = this.listOfBlocks.filter(item => item.selected === true).length;
        let selectedSimple = this.listOfBlocks.filter(item => item.selected === true && item.type === 0).length;
        let selectedGreen = this.listOfBlocks.filter(item => item.selected && item.isGreen && item.type === 1).length;
        let allGreen = this.listOfBlocks.filter(item => item.isGreen && item.type === 1).length;
        let selectedRed = this.listOfBlocks.filter(item => item.selected && !item.isGreen && item.type === 1).length;
        let allRed = this.listOfBlocks.filter(item => !item.isGreen && item.type === 1).length;
        return {
          all,
          selected,
          allGreen,
          allRed,
          selectedSimple,
          selectedGreen,
          selectedRed
        }
      }
    },
    methods: {
      addBlockToList(type) {
        let currentType = type === 0 ? 'Simple' : 'Ext';
        this.listOfBlocks.push(
          {
            id: this.currentId++,
            name: currentType + ' block',
            type: type,
            selected: false,
            isGreen: true
          });
      },
      deleteCurrentBlock(id) {
        this.listOfBlocks = this.listOfBlocks.filter(item => item.id !== id);
      },
      toggleSelected(id) {
        this.listOfBlocks = this.listOfBlocks.map(item => {
          if (item.id === id) {
            item.selected = !item.selected;
          }
          return item;
        });
      },
      toggleColor(id) {
        this.listOfBlocks = this.listOfBlocks.map(item => {
          if (item.id === id) {
            item.isGreen = !item.isGreen;
          }
          return item;
        });
      }
    },
    components: {
      controls,
      stats,
      block
    }
  }
</script>

<style>
  body {
    background-color: #E5E5E9;
    font: 13px/18px FuturaFuturisLightC, sans-serif;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

  }

  .content {
    display: block;
    width: 80%;
    background-color: #bebebe;
    margin: 0 auto;
    border: 2px solid #db3e45;
    border-radius: 12px;
  }

  .list-items {
    min-height: 300px;
    background-color: #e2e2e2;
    max-height: 300px;
    overflow-y: auto;
  }

  h1, h2 {
    font-weight: normal;
  }
</style>
