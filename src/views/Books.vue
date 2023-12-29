<template>
  <h1>Books</h1>
  <div id="books">
    <RouterLink
      v-for="book in store.books"
      :key="book.id"
      class="book"
      :to="`/books/${book.id}`"
    >
      <div class="book-link">
        <div>{{ book.title }}</div>
        <div class="delete-btn" @click.prevent="store.deleteBook(book.id)">x</div>
      </div>
    </RouterLink>
  </div>
</template>

<script setup>
import { useBookStore } from '@/stores/Books'
const store = useBookStore()
</script>

<style lang="scss" scoped>
#books {
  display: flex;
  flex-direction: column;
  gap: 8px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  .book {
    text-decoration: none;
    border-radius: 4px;
    border: 2px solid rgb(243, 106, 15);
    padding: 4px 8px;
    color: rgb(42, 53, 3);
    cursor: pointer;
    &:hover {
      background-color: rgba(243, 106, 15, 0.2);
    }
    .book-link {
      display: flex;
      justify-content: space-between;

      .delete-btn {
        border: 1px solid gray;
        width: 20px;
        height: 20px;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover {
          background-color: red;
          color: white;
        }
      }
    }
  }
}
</style>
