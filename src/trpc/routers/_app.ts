import { inngest } from '@/app/inngest/client';
import { createTRPCRouter, protectedProcedure } from '../init';
import prisma from '@/lib/db';
export const appRouter = createTRPCRouter({
  getWorkflows: protectedProcedure.query(({ ctx }) => {
    return prisma.workflow.findMany();
  }),
  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: 'test/hello.wordl',
      data: {
        email: 'janedoe@example.com',
      },
    });
    return { success: true, message: 'Job queued' };
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
