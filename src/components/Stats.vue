<template xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
  <div class="inner-stats">
    <h3>Состояние приложения:</h3>
    <hr/>
    <div class="statistic-footer">
      <div class="floater common">
        <div>Всего блоков: {{allBlocksCount}}</div>
        <div>Выделенных блоков: {{allSelected}}</div>
      </div>
      <div class="floater green">
        <div>Выделено зеленых: {{selectedGreen}}</div>
        <div>Выделено красных: {{selectedRed}}</div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Statistics',
    data() {
      return {
        allBlocksCount: this.stats.all ? this.stats.all : 0,
        allSelected: this.stats.selected ? this.stats.selected : 0,
        selectedSimple: this.stats.selectedSimple ? this.stats.selectedSimple : 0,
        selectedGreen: this.stats.selectedGreen ? this.stats.selectedGreen : 0,
        selectedRed: this.stats.selectedRed ? this.stats.selectedRed : 0,
        allRed: this.stats.allRed ? this.stats.allRed : 0,
        allGreen: this.stats.allGreen ? this.stats.allGreen : 0
      }
    },
    watch: {
      stats: function () {
        setTimeout(() => {
          this.allBlocksCount = this.stats.all;
          this.allSelected = this.stats.selected;
          this.selectedSimple = this.stats.selectedSimple;
          this.selectedGreen = this.stats.selectedGreen;
          this.selectedRed = this.stats.selectedRed;
          this.allRed = this.stats.allRed;
          this.allGreen = this.stats.allGreen;
        }, 200);
      }
    },
    props: {stats: Object}
  }
</script>

<style scoped>
  .inner-stats {
    padding: 5px;
    height: 90px;
  }

  .statistic-footer {
    width: 100%;
    height: 50px;
  }

  .floater {
    float: left;
    width: 50%;
    text-align: left;
  }


</style>
