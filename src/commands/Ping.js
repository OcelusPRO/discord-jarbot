import { InteractionResponseType } from "discord-interactions"
import { JsonResponse } from "../utils/JsonResponse.js"

export const data =
    {
        name : 'ping',
        description : 'Renvoi le ping du bot',
    };

export async function execute(interaction) {
    return new JsonResponse({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: '0ms tkt',
        }
    })
}
