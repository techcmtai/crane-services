"use client";

import CheckoutPage from "@/components/CheckoutPage";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = stripeKey ? loadStripe(stripeKey) : null;

export default function Home() {
  const [amount, setAmount] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [showStripeForm, setShowStripeForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const isValidAmount = !isNaN(Number(amount)) && Number(amount) > 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    const val = Number(e.target.value);
    setAmount(val > 0 ? val : null);
    setShowStripeForm(false);
  };

  const handleProceed = () => {
    setLoading(true);
    setTimeout(() => {
      setShowStripeForm(true);
      setLoading(false);
    }, 800); // Simulate loading
  };

  if (!stripeKey) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] py-10">
        <Card className="w-full max-w-md mx-auto shadow-xl border bg-background">
          <CardHeader>
            <CardTitle className="text-3xl font-extrabold text-center text-red-800">Project Crane Services</CardTitle>
            <CardDescription className="text-center text-lg mt-2 text-muted-foreground">
              Stripe credentials are not yet available. Please wait a moment and refresh the page.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-[60vh] py-10">
      <Card className="w-full max-w-2xl mx-auto shadow-xl border bg-background p-2 md:p-6">
        <CardHeader>
          <CardTitle className="text-2xl font-extrabold text-center text-red-800 mb-2">Project Crane Services</CardTitle>
          <CardDescription className="text-center text-lg mt-2 text-muted-foreground">
            Enter the amount you want to pay
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={e => e.preventDefault()}
            className="w-full"
          >
            <div className="w-full mb-3 flex justify-center">
              <Input
                type="number"
                min="0.01"
                step="0.01"
                value={inputValue}
                onChange={handleInputChange}
                className="text-center text-lg font-bold max-w-sm mx-auto"
                placeholder="Enter amount (USD)"
                required
                autoComplete="off"
              />
            </div>
            {!showStripeForm && isValidAmount && (
              <div className="flex justify-center">
                <Button className="h-11 min-w-[200px] px-8 mt-5" onClick={handleProceed} disabled={loading} type="button">
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Proceed"
                  )}
                </Button>
              </div>
            )}
            {!isValidAmount && (
              <div className="text-center text-muted-foreground text-sm mt-2">Please enter a valid amount to continue.</div>
            )}
          </form>
          <div className="w-full flex flex-col items-center justify-center min-h-[300px] mt-6">
            {showStripeForm && isValidAmount ? (
              <Elements
                stripe={stripePromise}
                options={{
                  mode: "payment",
                  amount: convertToSubcurrency(Number(amount)),
                  currency: "usd",
                }}
              >
                <CheckoutPage amount={Number(amount)} />
              </Elements>
            ) : (
              <div className="text-center text-muted-foreground text-lg font-medium opacity-80">
                Enter amount to get payment options
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-2 mt-2">
          <span className="text-xs text-muted-foreground">Secured by Stripe</span>
        </CardFooter>
      </Card>
    </div>
  );
}