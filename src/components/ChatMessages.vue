<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble its-mine message="Hola mundo A" />
      <ChatBubble :its-mine="false" message="Hola mundo B" />
      <ChatBubble
        :its-mine="false"
        message="no"
        image="https://yesno.wtf/assets/no/13-755222c98795431aa2e7d453ab1e75a1.gif"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatBubble from './ChatBubble.vue'
</script>
