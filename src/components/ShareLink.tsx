
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Share2, ClipboardCopy, Check } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ShareLink = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const currentUrl = window.location.href;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "The portfolio link has been copied to your clipboard.",
        duration: 3000,
      });
      
      // Reset copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try copying the link manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-30">
      <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 w-80">
        <div className="flex items-center gap-2 mb-3">
          <Share2 className="h-5 w-5 text-primary" />
          <h3 className="font-medium">Share Portfolio</h3>
        </div>
        
        <div className="flex gap-2">
          <Input 
            value={currentUrl} 
            readOnly 
            className="text-sm bg-gray-50"
          />
          <Button
            size="icon"
            variant="outline"
            onClick={handleCopy}
            className="shrink-0 border-primary text-primary hover:bg-primary hover:text-white"
            aria-label="Copy link"
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <ClipboardCopy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShareLink;
