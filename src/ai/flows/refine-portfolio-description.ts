'use server';

/**
 * @fileOverview An AI agent that refines portfolio item descriptions.
 *
 * - refinePortfolioDescription - A function that refines a portfolio item description.
 * - RefinePortfolioDescriptionInput - The input type for the refinePortfolioDescription function.
 * - RefinePortfolioDescriptionOutput - The return type for the refinePortfolioDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RefinePortfolioDescriptionInputSchema = z.object({
  description: z
    .string()
    .describe('The current description of the portfolio item.'),
});
export type RefinePortfolioDescriptionInput = z.infer<
  typeof RefinePortfolioDescriptionInputSchema
>;

const RefinePortfolioDescriptionOutputSchema = z.object({
  refinedDescription: z
    .string()
    .describe('The refined description of the portfolio item.'),
});
export type RefinePortfolioDescriptionOutput = z.infer<
  typeof RefinePortfolioDescriptionOutputSchema
>;

export async function refinePortfolioDescription(
  input: RefinePortfolioDescriptionInput
): Promise<RefinePortfolioDescriptionOutput> {
  return refinePortfolioDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'refinePortfolioDescriptionPrompt',
  input: {schema: RefinePortfolioDescriptionInputSchema},
  output: {schema: RefinePortfolioDescriptionOutputSchema},
  prompt: `You are a marketing expert specializing in writing compelling descriptions.

You will be provided with a description of a portfolio item. You will rewrite it to be more engaging and effective.

Original Description: {{{description}}}`,
});

const refinePortfolioDescriptionFlow = ai.defineFlow(
  {
    name: 'refinePortfolioDescriptionFlow',
    inputSchema: RefinePortfolioDescriptionInputSchema,
    outputSchema: RefinePortfolioDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
