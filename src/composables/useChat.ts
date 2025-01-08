import { sleep } from "@/helpers/sleep"
import type { ChatMessage } from "@/interfaces/chat-message.interface"
import type { YesNoResponse } from "@/interfaces/response.interface"
import { ref } from "vue"

export const useChat = () => {
    const messages = ref<ChatMessage[]>([])

    const GetResponseFn = async () => {
        const response = await fetch('https://yesno.wtf/api')

        const data = (await response.json()) as YesNoResponse

        return data
    }

    const OnMessageFn = async (text: string) => {
        if (text.length === 0) return

        messages.value.push({
            id: new Date().getTime(),
            message: text.trim(),
            itsMine: true
        })

        if (!text.endsWith('?')) return

        await sleep(1.5)

        const { answer, image } = await GetResponseFn()

        messages.value.push({
            id: new Date().getTime(),
            message: answer,
            itsMine: false,
            image
        })
    }

    return {
        // variables
        messages,

        //functions
        OnMessageFn
    }
}