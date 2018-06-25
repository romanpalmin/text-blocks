<template>
  <div class="text-block">
    <fieldset
      @click.stop="toggleSelect"
      @dblclick.stop="toggleColor"
      :style="getCurrentStyle()"
    >
      <template v-if="type === 1">
        <template v-if="!showWarning">
          <div class="close-button" @click.stop="showWarning=true">X</div>
        </template>
        <template v-else>
          <div class="close-button warning">Вы уверены?
            <button class="warning-ok-btn warning-color" @click.stop="$emit('deleteBlock', id);showWarning=false">Да
            </button>
            <button class="warning-cancel-btn warning-color" @click.stop="showWarning=false">Нет</button>
          </div>
        </template>
      </template>
      <template v-else>
        <div class="close-button" @click.stop="$emit('deleteBlock', id)">X</div>
      </template>
      <legend>{{typeTitle}}</legend>
      <div class="inner-div" :id="id">
        <div>
          <random-text/>
        </div>
      </div>

    </fieldset>
  </div>
</template>

<script>
  /**
   * Компонент - View - отображающий текстовый блок по заданным параметрам
   *
   * 25.06.2018 rpalmin
   */

  import random from './RandomContent.vue';

  export default {
    name: 'textBlock',
    data() {
      return {
        id: this.block.id,
        content: this.block.content,
        type: this.block.type,
        typeTitle: this.block.type === 0 ? 'Простой' : 'Сложный',
        selected: false,
        isGreen: true,
        showWarning: false
      }
    },
    props: {
      block: Object
    },
    watch: {
      block: function () {
        this.id = this.block.id;
        this.content = this.block.content;
        this.type = this.block.type;
        this.selected = this.block.selected;
      }
    },
    methods: {
      toggleSelect: function () {
        this.selected = !this.selected;
        this.$emit('toggleSelected', this.id);
      },
      toggleColor() {
        this.isGreen = !this.isGreen;
        this.$emit('toggleColor', this.id);
      },
      getCurrentStyle() {
        let style = this.selected ? 'border: 4px solid gray; opacity: 0.9;font-style: italic;' : '';
        if (this.type === 1) {
          style += this.isGreen ? ';background-color: green' : ';background-color: red';
        }
        return style;
      }
    },
    components: {
      randomText: random
    }
  }
</script>

<style scoped>
  fieldset {
    border-radius: 10px;
    user-select: none;
    cursor: pointer;
  }

  legend {
    text-align: left;
    background-color: #ffffff;
    color: #000000;
    padding: 3px;
    border-radius: 8px;
    font-style: normal !important;
    font-weight: 800;
    border: solid 1px black;
  }

  .text-block {
    position: relative;
    padding: 20px;
  }

  .close-button {
    position: absolute;
    width: 1.5em;
    height: 1.5em;
    line-height: 1.5em;
    border: 2px solid gray;
    border-radius: 50%;
    right: 1em;
    top: 2em;
    background-color: white;
    cursor: pointer;
    font-style: normal !important;
    opacity: 1 !important;
  }

  .warning {
    width: 15em;
    background-color: white;
    font-weight: 800;
    border-radius: 20px;
    padding: 5px;
    cursor: pointer;
  }

  .warning-ok-btn {
    background-color: green;
  }

  .warning-cancel-btn {
    background-color: red;
  }

  .warning-color {
    color: white;
  }
</style>
