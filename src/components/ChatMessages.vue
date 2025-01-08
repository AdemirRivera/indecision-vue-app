<template>
  <div class="flex-1 overflow-y-auto p-4" ref="chat_ref">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import { ref, watch } from 'vue'
import ChatBubble from './ChatBubble.vue'

interface Props {
  messages: ChatMessage[]
}

const props = defineProps<Props>()

const chat_ref = ref<HTMLDivElement | null>(null)

watch(props.messages, () => {
  setTimeout(() => {
    chat_ref.value?.scrollTo({
      top: chat_ref.value.scrollHeight,
      behavior: 'smooth'
    })
  }, 100)
})
</script>
