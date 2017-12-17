<template>
  <div>
    <BaseInputText
      v-model="catNum"
      placeholder="# каталога"
    />
    <ul v-if="filteredCats.length">
      <CatListItem
        v-for="cat in filteredCats"
        :key="cat.id"
        :cat="cat"
        @toggle="toggle"
      />
    </ul>
  </div>
</template>

<script>
import BaseInputText from './BaseInputText.vue'
import CatListItem from './CatListItem.vue'

let catId = 1

export default {
  components: {
    BaseInputText,
    CatListItem
  },
  data () {
    return {
      catNum: '',
      cats: [
        {
          id: catId++,
          text: '2-23557/2-23558',
          details: '1911',
        },
        {
          id: catId++,
          text: 'X-63867/X-63870',
          details: '1910'
        },
        {
          id: catId++,
          text: 'X-67933/X-67854',
          details: '1910'
        },
      ]
    }
  },
  computed: {
    filteredCats: function () {
      return this.catNum.trim().length > 0
        ? this.cats.filter((c) => c.text.includes(this.catNum))
        : this.cats
    }
  },
  methods: {
    toggle (id) {
	  this.cats = this.cats.map(cat =>
        (cat.id !== id) ? cat : Object.assign({}, cat, { show: !cat.show })
      )
    }
  }
}
</script>
