import {InteractionResponseFlags, InteractionResponseType} from "discord-interactions"
import { JsonResponse } from "../utils/JsonResponse.js"

export const Ping = {
    data : {
        name : 'ping',
        description : 'Renvoi le ping du bot',
    },

    execute(interaction) {
        return new JsonResponse({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: '0ms tkt',
                flags: InteractionResponseFlags.EPHEMERAL,
            }
        })
    }
}
