<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <ChatMessages :messages="messages" />

    <MessagesBox @send-message="onMessage($event)" />
  </div>
</template>
<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import ChatMessages from '@/components/ChatMessages.vue'
import MessagesBox from '@/components/MessagesBox.vue'
import { ref } from 'vue'

const messages = ref<ChatMessage[]>([
  {
    id: new Date().getTime(),
    message: 'Hola mundo REF',
    itsMine: true
  },
  {
    id: new Date().getTime(),
    message: 'Hello world REF',
    itsMine: true
  },
  {
    id: new Date().getTime() + 1,
    message: 'No',
    itsMine: false,
    image: 'https://yesno.wtf/assets/no/13-755222c98795431aa2e7d453ab1e75a1.gif'
  }
])

const onMessage = (text: string) => {
  messages.value.push({
    id: new Date().getTime(),
    message: text,
    itsMine: true
  })
}
</script>
