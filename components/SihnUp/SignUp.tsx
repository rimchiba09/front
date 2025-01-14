"use client"
import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
type SignUpProps = {
    signUp: (email: string, password: string, clinic_name: string) => Promise<void>;
};

type Errors = {
    email: string;
    password: string;
    confirmPassword: string;
    clinic_name: string;
};

const SignUp = ({ signUp }: SignUpProps) => {
    const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '', clinic_name: '' });
    const [errors, setErrors] = useState<Errors>({ email: '', password: '', confirmPassword: '', clinic_name: '' });
    const [showPassword, setShowPassword] = useState(false); 
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const validateEmail = (email: string): boolean => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Errors = {
            email: '',
            password: '',
            confirmPassword: '',
            clinic_name: ''
        };

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Confirm Password is required';
        } else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (!formData.clinic_name) {
            newErrors.clinic_name = 'Clinic name is required';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).every(key => newErrors[key as keyof Errors] === '')) {
            await signUp(formData.email, formData.password, formData.clinic_name);
        }
    };

    return (
        <div className="h-max w-full bg-blue dark:bg-[#1e2948] dark:bg-grid-white/[0.07] bg-grid-black/[0.07] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_55%,black)]" />

            <div className="w-full min-w-64 max-w-md m-5 max-md:m-1">
                <div className="bg-white bg-opacity-50 border-white border-2 rounded-3xl shadow-lg shadow-slate-400 p-8 max-md:p-3 ">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="h-[11rem] flex flex-col items-center justify-center">
                            <img src="/assist/logo.png" alt="Logo" className="h-32 w-32" />
                            <h1 className="text-3xl font-bold mb-3 text-[#0c328f]">BORHAN</h1>
                            <h2 className="text-lg font-medium text-neutral-700">Create a new account</h2>
                        </div>

                        <div className="wave-group">
                            <input
                                type="text"
                                placeholder=" "
                                value={formData.clinic_name}
                                onChange={(e) => setFormData({ ...formData, clinic_name: e.target.value })}
                                className={`input ${errors.clinic_name ? 'border-red-500' : ''}`}
                            />
                            <label className="label">Clinic Name</label>
                            {errors.clinic_name && <p className="mt-1 text-sm text-red-500">{errors.clinic_name}</p>}
                        </div>

                        <div className="wave-group">
                            <input
                                type="email"
                                placeholder=" "
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className={`input ${errors.email ? 'border-red-500' : ''}`}
                            />
                            <label className="label">Email</label>
                            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                        </div>

                        <div className="wave-group relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder=" "
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                className={`input ${errors.password ? 'border-red-500' : ''}`}
                            />
                            <label className="label">Password</label>
                            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                            <div
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-6 cursor-pointer text-gray-500"
                            >
                                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </div>
                        </div>

                        <div className="wave-group relative">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                placeholder=" "
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                className={`input ${errors.confirmPassword ? 'border-red-500' : ''}`}
                            />
                            <label className="label">Confirm Password</label>
                            {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
                            <div
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-6 cursor-pointer text-gray-500"
                            >
                                {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </div>
                        </div>

                        <div className="pt-4">
                            <button type="submit" className="relative w-full group">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#233155] to-[#062675] rounded-3xl" />
                                <div className="relative px-8 py-2 bg-[#051847] rounded-3xl text-white text-lg font-normal group-hover:bg-transparent transition duration-200">
                                    Sign Up
                                </div>
                            </button>
                        </div>

                        <div className="flex justify-center text-center mx-auto text-sm mt-4">
                            <p className="text-neutral-700 text-sm text-center">if you have an account, <a href="/signin" className="text-[#0c328f] underline">Sign in</a></p>
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
                .wave-group .input:focus + .label,
                .wave-group .input:not(:placeholder-shown) + .label {
                    top: 0;
                    transform: translateY(-20px);
                    font-size: 12px;
                    color: #0c328f;
                }
            `}</style>
        </div>
    );
};

export default SignUp;
