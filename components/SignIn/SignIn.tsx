"use client";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface SignInProps {
  signIn: (email: string, password: string) => Promise<void>;
}

const SignIn: React.FC<SignInProps> = ({ signIn }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = { email: "", password: "", general: "" }; // Default values

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (
      !Object.keys(newErrors).some(
        (key) => newErrors[key as keyof typeof newErrors]
      )
    ) {
      try {
        await signIn(formData.email, formData.password);
      } catch (error: any) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          general:
            error.message || "An error occurred, please try again later.",
        }));
      }
    }
  };

  return (
    <div className="h-screen w-full bg-blue dark:bg-[#1e2948] dark:bg-grid-white/[0.07] bg-grid-black/[0.07] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_55%,black)]" />

      <div className="w-full max-w-md mx-4">
        <div className="bg-white bg-opacity-50 border-white border-2 rounded-3xl shadow-lg shadow-slate-400 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="h-[11rem] flex flex-col items-center justify-center">
              <img src="/assist/logo.png" alt="Logo" className="h-32 w-32" />
              <h1 className="text-3xl font-bold mb-3 text-[#0c328f]">BURHAN</h1>
              <h2 className="text-lg text-center font-medium text-neutral-700">
                Sign in to your account
              </h2>
            </div>

            <div className="wave-group">
              <input
                type="email"
                placeholder=" "
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`input ${errors.email ? "border-red-500" : ""}`}
                aria-label="Email Address"
              />
              <label className="label">
                {"Email".split("").map((char, idx) => (
                  <span
                    key={idx}
                    className="label-char"
                    style={
                      { "--index": idx } as Record<string, string | number>
                    }
                  >
                    {char}
                  </span>
                ))}
              </label>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="wave-group relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder=" "
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className={`input ${errors.password ? "border-red-500" : ""}`}
                aria-label="Password"
              />
              <label className="label">
                {"Password".split("").map((char, idx) => (
                  <span
                    key={idx}
                    className="label-char"
                    style={
                      { "--index": idx } as Record<string, string | number>
                    }
                  >
                    {char}
                  </span>
                ))}
              </label>

              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}

              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-6 text-gray-600"
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <AiFillEyeInvisible size={17} />
                ) : (
                  <AiFillEye size={17} />
                )}
              </button>
            </div>
            {errors.general && (
              <p className="mt-3 text-center text-sm text-red-500">
                {errors.general}
              </p>
            )}

            <div className="pt-4">
              <button type="submit" className="relative w-full group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#233155] to-[#062675] rounded-3xl" />
                <div className="relative px-8 py-2 bg-[#051847] rounded-3xl text-white text-lg font-normal group-hover:bg-transparent transition duration-200">
                  Sign In
                </div>
              </button>
            </div>
            <div className="flex justify-center text-center mx-auto text-sm mt-4">
              <p className="text-neutral-700 text-sm text-center">
                if you don't have an account,{" "}
                <a href="/signup" className="text-[#0c328f] underline">
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .wave-group {
          position: relative;
          margin-bottom: 24px;
        }
        .wave-group .input {
          width: 100%;
          padding: 20px 10px 10px 5px;
          border: none;
          border-bottom: 2px solid #ddd;
          background: transparent;
          transition: border-color 0.2s;
          font-size: 16px;
          outline: none;
        }
        .wave-group .input:focus {
          border-bottom-color: #0c328f;
        }
        .wave-group .label {
          position: absolute;
          top: 20px;
          left: 5px;
          font-size: 16px;
          color: white;
          pointer-events: none;
          transition: all 0.2s ease;
        }
        .wave-group .label-char {
          display: inline-block;
          transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          transition-delay: calc(var(--index) * 50ms);
        }
        .wave-group .input:focus + .label .label-char,
        .wave-group .input:not(:placeholder-shown) + .label .label-char {
          transform: translateY(-20px);
          font-size: 12px;
          color: #0c328f;
        }
        .wave-group .input:focus + .label,
        .wave-group .input:not(:placeholder-shown) + .label {
          top: 0;
        }
      `}</style>
    </div>
  );
};

export default SignIn;
