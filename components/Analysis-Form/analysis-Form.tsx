"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "antd";
import Navbar from "@/components/Home/Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { postPredict } from "@/lib/serverActions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TextHoverDemo } from "../Result/TextHoverDemo"

const { Option } = Select;
export type FormData = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
};
const AnalysisFormPage: React.FC = () => {

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      dateBirth: "",
      gender: "",
      nationalId: "",
      cp: "",
      trestbps: "",
      chol: "",
      fbs: null,
      restecg: "",
      thalach: "",
      exang: null,
      oldpeak: "",
      slope: "",
      ca: "",
      thal: "",
    },
  });

  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const onSubmit = (values: any) => {
    setIsLoading(true);


    postPredict(
      values.firstName,
      values.lastName,
      values.nationalId,
      selectedDate ? selectedDate.toLocaleDateString("en-GB") : "",
      values.gender,
      values.cp,
      Number(values.trestbps),
      Number(values.chol),
      values.fbs,
      values.restecg,
      Number(values.thalach),
      values.exang,
      Number(values.oldpeak),
      values.slope,
      Number(values.ca),
      values.thal
    )
      .then((response) => {
        console.log("Response from API:", response);

        localStorage.setItem("predictionResult", JSON.stringify(response));
        setTimeout(() => {
          router.push("/result");
        }, 2000); 
      })
      .catch((error) => {
        console.error("Error in API call:", error);
      });
  };


  return (
    <div className="h-full w-full bg-blue dark:bg-[#1e2948] relative p-0 flex flex-col items-center justify-center">
      {isLoading ? (

        <TextHoverDemo />
      ) : (
        <> 
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_55%,black)]" />
          <div className="w-full">
            <Navbar />
          </div>
          
          <div className="border bg-transparent bg-blur-sm border-black/[0.2] dark:border-white/[0.2] rounded-xl shadow-xl shadow-slate-500 flex flex-col items-start max-md:p-3 p-4 max-sm:p-2 relative mx-5 max-md:m-1 my-12 h-max w-11/12 lg:w-3/4">
            <div className="flex flex-col items-center justify-center mx-auto">

              <div className="my-5">
                <img
                  src="/assist/Medicine-pana.svg"
                  alt="evervault-logo"
                  width={350}
                  height={350}
                  className="mx-auto"
                />
                <h1 className="text-4xl max-sm:text-3xl max-sm:text-center font-bold text-blue-800 py-5">
                  Enter Patient Information
                </h1>
              </div>

              <div className="w-full">
                <h2 className="text-2xl max-sm:text-xl font-bold dark:text-neutral-400 py-5">
                  Basic Info:
                </h2>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:mx-auto gap-4 ml-5 max-sm:m-0">
                    <div className="flex flex-col gap-3">
                      <Label className="text-white w-full dark:text-white text-md font-bold">
                        First Name:
                      </Label>
                      <Input
                        {...form.register("firstName", {
                          required: "First name is required",
                        })}
                        placeholder="Enter your first name"
                        className="bg-slate-100 w-auto rounded-lg p-2.5 pr-3 text-neutral-700 focus:outline-blue-600"
                      />
                    </div>

                    <div className="flex flex-col gap-3">
                      <Label className="text-white w-full dark:text-white text-md font-bold">
                        Last Name:
                      </Label>
                      <Input
                        {...form.register("lastName", {
                          required: "Last name is required",
                        })}
                        placeholder="Enter your last name"
                        className="bg-slate-100 w-full rounded-lg p-2.5 pr-3 text-neutral-700 focus:outline-blue-600"
                      />
                    </div>

                    <div className="flex flex-col gap-3">
                      <Label className="text-white w-full dark:text-white text-md font-bold">
                        Date of Birth:
                      </Label>
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="dd/MM/yyyy"
                        className="bg-slate-100 w-full rounded-lg p-2.5 pr-3 text-neutral-700 focus:outline-blue-600"
                        placeholderText="Enter your date of birth"
                      />
                    </div>

                    <div className="flex flex-col gap-3">
                      <Label className="text-white w-full dark:text-white text-md font-bold">
                        Gender:
                      </Label>
                      <Select
                        value={form.watch("gender")}
                        onChange={(value) => form.setValue("gender", value)}
                        className="bg-slate-100 w-full rounded-lg h-9 text-neutral-700 focus:border-blue-600"
                        placeholder="Enter your Gender"
                      >
                        <Option value={1} placeholder="Enter your Gender">
                          Male
                        </Option>
                        <Option value={0}>Female</Option>
                      </Select>
                    </div>

                    <div className="flex flex-col gap-3">
                      <Label className="text-white w-full dark:text-white text-md font-bold">
                        National ID:
                      </Label>
                      <Input
                        {...form.register("nationalId", {
                          required: "National ID is required",
                        })}
                        placeholder="Enter your national ID"
                        className="bg-slate-100 w-full rounded-lg p-2.5 pr-3 text-neutral-700 focus:outline-blue-600"
                      />
                    </div>
                  </div>

                  {/* Medical Info Section */}
                  <div className="my-5">
                    <h2 className="text-2xl max-sm:text-xl font-bold dark:text-neutral-400 py-5">
                      Medical Info:
                    </h2>
                    <div className="flex flex-col gap-4 ml-5 my-5 max-md:m-0">
                      {/* Chest Pain Type */}
                      <div className="flex max-md:flex-col gap-3 w-full">
                        <Label className="text-white w-1/2 max-md:w-full dark:text-white text-md font-bold">
                          Chest Pain Type (cp):
                        </Label>
                        <Select
                          value={form.watch("cp")}
                          onChange={(value) => form.setValue("cp", value)}
                          className="bg-slate-100 w-full rounded-lg h-9 text-neutral-700 focus:border-blue-600"
                          placeholder="Enter Chest Pain Type"
                        >
                          <Option value="typical angina">Typical Angina</Option>
                          <Option value="asymptomatic">Asymptomatic</Option>
                          <Option value="non-anginal">Non-Anginal</Option>
                          <Option value="atypical angina">Atypical Angina</Option>
                        </Select>
                      </div>

                      {/* Resting ECG */}
                      <div className="flex max-md:flex-col gap-3 w-full">
                        <Label className="text-white w-1/2 max-md:w-full dark:text-white text-md font-bold">
                          Resting ECG (restecg):
                        </Label>
                        <Select
                          value={form.watch("restecg")}
                          onChange={(value) => form.setValue("restecg", value)}
                          className="bg-slate-100 w-full rounded-lg h-9 text-neutral-700 focus:border-blue-600"
                          placeholder="Enter Resting ECG"
                        >
                          <Option value="hypertrophy">Hypertrophy</Option>
                          <Option value="normal">Normal</Option>
                          <Option value="st-t abnormality">ST-T Abnormality</Option>
                        </Select>
                      </div>

                      {/* Fasting Blood Sugar */}
                      <div className="flex max-md:flex-col gap-3 w-full">
                        <Label className="text-white w-1/2 max-md:w-full dark:text-white text-md font-bold">
                          Fasting Blood Sugar (fbs):
                        </Label>
                        <Select
                          value={form.watch("fbs")}
                          onChange={(value) => form.setValue("fbs", value)}
                          className="bg-slate-100 w-full rounded-lg h-9 text-neutral-700 focus:border-blue-600"
                          placeholder="Enter Fasting Blood Sugar"
                        >
                          <Option value={true}>True</Option>
                          <Option value={false}>False</Option>
                        </Select>
                      </div>

                      {/* Exercise Induced Angina */}
                      <div className="flex max-md:flex-col gap-3 w-full">
                        <Label className="text-white w-1/2 max-md:w-full dark:text-white text-md font-bold">
                          Exercise Induced Angina (exang):
                        </Label>
                        <Select
                          value={form.watch("exang")}
                          onChange={(value) => form.setValue("exang", value)}
                          className="bg-slate-100 w-full rounded-lg h-9 text-neutral-700 focus:border-blue-600"
                          placeholder="Enter Exercise Induced Angina"
                        >
                          <Option value={true}>True</Option>
                          <Option value={false}>False</Option>
                        </Select>
                      </div>

                      {/* Resting Blood Pressure */}
                      <div className="flex max-md:flex-col gap-3 w-full">
                        <Label className="text-white w-1/2 max-md:w-full dark:text-white text-md font-bold">
                          Resting Blood Pressure (trestbps):
                        </Label>
                        <Input
                          type="number"
                          {...form.register("trestbps")}
                          placeholder="Enter Resting Blood Pressure"
                          className="bg-slate-100 w-full rounded-lg p-2.5 pr-3 text-neutral-700 focus:outline-blue-600"
                          value={form.watch("trestbps") || ""} 
                        />
                      </div>

                      {/* Cholesterol */}
                      <div className="flex max-md:flex-col gap-3 w-full">
                        <Label className="text-white w-1/2 max-md:w-full dark:text-white text-md font-bold">
                          Cholesterol (chol):
                        </Label>
                        <Input
                          type="number"
                          {...form.register("chol")}
                          placeholder="Enter Cholesterol"
                          className="bg-slate-100 w-full rounded-lg p-2.5 pr-3 text-neutral-700 focus:outline-blue-600"
                          value={form.watch("chol") || ""} 
                        />
                      </div>

                      {/* Maximum Heart Rate */}
                      <div className="flex max-md:flex-col gap-3 w-full">
                        <Label className="text-white w-1/2 max-md:w-full dark:text-white text-md font-bold">
                          Max Heart Rate (thalach):
                        </Label>
                        <Input
                          type="number"
                          {...form.register("thalach")}
                          placeholder="Enter Max Heart Rate"
                          className="bg-slate-100 w-full rounded-lg p-2.5 pr-3 text-neutral-700 focus:outline-blue-600"
                          value={form.watch("thalach") || ""} 
                        />
                      </div>

                      {/* Old Peak */}
                      <div className="flex max-md:flex-col gap-3 w-full">
                        <Label className="text-white w-1/2 max-md:w-full dark:text-white text-md font-bold">
                          Old Peak (oldpeak):
                        </Label>
                        <Input
                          type="number"
                          {...form.register("oldpeak")}
                          placeholder="Enter Old Peak"
                          className="bg-slate-100 w-full rounded-lg p-2.5 pr-3 text-neutral-700 focus:outline-blue-600"
                          value={form.watch("oldpeak") || ""} 
                        />
                      </div>

                      {/* Slope */}
                      <div className="flex max-md:flex-col gap-3 w-full">
                        <Label className="text-white w-1/2 max-md:w-full dark:text-white text-md font-bold">
                          Slope (slope):
                        </Label>
                        <Select
                          value={form.watch("slope")}
                          onChange={(value) => form.setValue("slope", value)}
                          placeholder="Enter Slope"
                          className="bg-slate-100 w-full rounded-lg h-9 text-neutral-700 focus:border-blue-600"
                        >
                          <Option value="downsloping">Downsloping</Option>
                          <Option value="flat">Flat</Option>
                          <Option value="upsloping">Upsloping</Option>
                        </Select>
                      </div>

                      {/* CA */}
                      <div className="flex max-md:flex-col gap-3 w-full">
                        <Label className="text-white w-1/2 max-md:w-full dark:text-white text-md font-bold">
                          CA (ca):
                        </Label>

                        <Input
                          type="number"
                          {...form.register("ca")}
                          placeholder="Enter CA"
                          className="bg-slate-100 w-full rounded-lg p-2.5 pr-3 text-neutral-700 focus:outline-blue-600"
                          value={form.watch("ca") || ""}
                        />
                      </div>

                      {/* Thalassemia */}
                      <div className="flex max-md:flex-col gap-3 w-full">
                        <Label className="text-white w-1/2 max-md:w-full dark:text-white text-md font-bold">
                          Thalassemia (thal):
                        </Label>
                        <Select
                          value={form.watch("thal")}
                          onChange={(value) => form.setValue("thal", value)}
                          placeholder="Enter Thalassemia"
                          className="bg-slate-100 w-full rounded-lg h-9 text-neutral-700 focus:border-blue-600"
                        >
                          <Option value="fixed defect">Fixed Defect</Option>
                          <Option value="normal">Normal</Option>
                          <Option value="reversable defect">
                            Reversable Defect
                          </Option>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="mx-auto flex justify-center">
                    {/* {showTextEffect && <TextHoverEffectDemo />} */}
                    <button type="submit" className="shadow-[inset_0_0_0_2px_#616467] px-6 py-3 rounded-full tracking-widest uppercase font-bold bg-blue-800 hover:bg-blue-500 text-white dark:text-neutral-200 transition duration-200">
                      submit
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
  </>
)}
</div>
       
      );
      
};
 export default AnalysisFormPage;