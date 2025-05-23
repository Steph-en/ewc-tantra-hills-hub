
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Donate } from "lucide-react";

interface DonateModalProps {
  className?: string;
}

export function DonateModal({ className }: DonateModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid donation amount.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real application, you would integrate with a payment processor here
      console.log("Processing donation:", amount);
      
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast({
        title: "Thank You!",
        description: `Your donation of $${amount} has been processed successfully.`,
      });
      
      // Reset and close modal
      setAmount("");
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Donation Failed",
        description: "There was an error processing your donation. Please try again.",
        variant: "destructive",
      });
      console.error("Error processing donation:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const predefinedAmounts = [25, 50, 100, 250];

  return (
    <>
      <Button 
        className={`bg-black hover:bg-black/80 text-white ${className}`} 
        onClick={() => setIsOpen(true)}
      >
        <Donate className="mr-2 h-4 w-4" />
        Donate
      </Button>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Support Our Ministry</DialogTitle>
            <DialogDescription>
              Your generous contribution helps us continue our mission and community outreach.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="grid grid-cols-4 gap-2">
              {predefinedAmounts.map((presetAmount) => (
                <Button 
                  key={presetAmount}
                  type="button"
                  variant={amount === String(presetAmount) ? "default" : "outline"}
                  className="h-12"
                  onClick={() => setAmount(String(presetAmount))}
                >
                  ${presetAmount}
                </Button>
              ))}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="custom-amount">Custom Amount</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="custom-amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-8"
                  placeholder="Enter amount"
                />
              </div>
            </div>
            
            <DialogFooter className="pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                className="bg-black hover:bg-black/80 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Donate Now"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
