'use client';

import { useState, useTransition } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { handleRefineDescription } from '@/app/actions';
import { Loader2, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from './ui/card';

interface RefineDescriptionDialogProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  currentDescription: string;
  onSave: (newDescription: string) => void;
}

export function RefineDescriptionDialog({
  isOpen,
  setIsOpen,
  currentDescription,
  onSave,
}: RefineDescriptionDialogProps) {
  const [refinedDescription, setRefinedDescription] = useState('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const onRefine = () => {
    setRefinedDescription('');
    startTransition(async () => {
      try {
        const result = await handleRefineDescription(currentDescription);
        if (result?.refinedDescription) {
          setRefinedDescription(result.refinedDescription);
        } else {
          toast({
            variant: 'destructive',
            title: 'Error',
            description: 'Failed to refine description. Please try again.',
          });
        }
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'An unexpected error occurred.',
        });
      }
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(refinedDescription);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleClose = () => {
    setIsOpen(false);
    setRefinedDescription('');
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Refine Description with AI</DialogTitle>
          <DialogDescription>
            Use AI to improve your project description. Click refine to get a suggestion.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Textarea id="current-description" value={currentDescription} readOnly rows={4} />
          <Button onClick={onRefine} disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Refining...
              </>
            ) : (
              'Refine'
            )}
          </Button>

          {refinedDescription && (
            <div className="space-y-2">
                <h4 className="font-medium">Suggested Improvement:</h4>
                <Card>
                    <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground">{refinedDescription}</p>
                    </CardContent>
                </Card>
                <div className="flex gap-2">
                    <Button onClick={() => onSave(refinedDescription)} className="w-full">Use this version</Button>
                    <Button variant="outline" onClick={handleCopy} className="w-full">
                        {copied ? <Check className="mr-2 h-4 w-4"/> : <Copy className="mr-2 h-4 w-4" />}
                        {copied ? 'Copied!' : 'Copy to Clipboard'}
                    </Button>
                </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
