<template>
  <h1>{{ currentBook.title }}</h1>
  <div v-if="currentBook.about">{{ currentBook.about }}</div>
  <h3>Reviews</h3>
  <div>
    <textarea v-model="newReview"></textarea>
    <div>
      <button @click="handleReview">Add review</button>
    </div>
  </div>
  <div id="reviews">
    <div v-for="review in currentBook.reviews" :key="review.id" class="review">
      <div>{{ review.text }}</div>
      <div
        class="close"
        @click="
          handleDeleteReview(review.id)
        "
      >
        x
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useBookStore } from '@/stores/Books'

const route = useRoute()
const store = useBookStore()
const currentBook = computed(() => {
  const id = route.params.id
  return store.books.find((book) => book.id == id)
})

const newReview = ref('')
const handleReview = () => {
  store.addReview({ bookId: currentBook.value.id, review: newReview.value })
  newReview.value = ''
}
const handleDeleteReview = (reviewId) =>{
  store.deleteReview({ bookId: currentBook.value.id, reviewId })
}
</script>

<style lang="scss" scoped>
#reviews {
  .review {
    display: flex;
    gap: 24px;
    margin: 2px 0;
    align-items: center;
    &:hover {
      .close {
        visibility: visible;
      }
    }
    .close {
      visibility: hidden;
      border-radius: 4px;
      border: 2px solid rgb(243, 106, 15);
      padding: 2px 8px;
      color: rgb(42, 53, 3);
      cursor: pointer;
      &:hover {
        background-color: rgba(243, 106, 15, 0.2);
      }
    }
  }
}
</style>
