import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function PaymentSuccess({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {
  return (
    <div className="flex justify-center items-center min-h-[70vh] bg-background">
      <Card className="w-full max-w-md mx-auto shadow-2xl border bg-white">
        <CardHeader className="flex flex-col items-center">
          <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
          <CardTitle className="text-3xl font-extrabold text-center text-red-800 mb-2">Payment Successful</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="text-lg text-muted-foreground mb-2 text-center">Thank you for your payment!</div>
          <div className="text-2xl font-bold text-green-600 mb-4">You paid ${amount}</div>
        </CardContent>
      </Card>
    </div>
  );
}