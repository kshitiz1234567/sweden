import { objectType } from "nexus";

export const greeting = objectType({
    name: 'greeting',
    definition(table) {
        table.string('hello');
    }
});