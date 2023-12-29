<template>
  <div class="book-form">
    <div><input v-model="newBook" type="text" /></div>
    <div><textarea v-model="newAbout" /></div>
    <div>
      <button @click="handleAddBook">Add</button>
    </div>
  </div>
</template>

<script setup>
import { useBookStore } from '@/stores/Books'
import { ref, inject } from 'vue'

const swal = inject('$swal')
const newBook = ref('')
const newAbout = ref('')
const store = useBookStore()

const handleAddBook = () => {
  if (!newBook.value) {
    showAlert(`Enter book name please!`)
    return
  }
  store.addBook({ title: newBook.value, about: newAbout.value })
  showAlert(`${newBook.value} Added!`)
  newBook.value = ''
  newAbout.value = ''
}
const showAlert = (text) => {
  swal.fire({
    text,
    toast: true,
    showConfirmButton: false,
    position: 'bottom',
    timer: 1500,
  })
}
</script>

<style lang="scss" scoped>
.book-form {
  display: grid;
  gap: 8px;
}
</style>
