'use server';

import { refinePortfolioDescription } from '@/ai/flows/refine-portfolio-description';
import type { RefinePortfolioDescriptionOutput } from '@/ai/flows/refine-portfolio-description';

export async function handleRefineDescription(
  description: string
): Promise<RefinePortfolioDescriptionOutput | null> {
  try {
    const result = await refinePortfolioDescription({ description });
    return result;
  } catch (error) {
    console.error('Error refining description:', error);
    return null;
  }
}
