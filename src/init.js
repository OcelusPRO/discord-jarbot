import {registerDataCommands} from "./register.js";

export const commands = []

export async function init() {
    commands.push(await registerDataCommands())

}

