import { extendType } from 'nexus';

export const getGreeting = extendType({
  type: 'Query',
  definition(table) {
    table.field('greetings', {
      type: 'greeting',
      async resolve(root, args, ctx) {
        return {
          hello: 'sweden',
        };
      },
    });
  },
});
