"use server";
import { cookies } from "next/headers";
export async function postPredict(
  first_name,
  last_name,
  national_id,
  date_of_birth,
  sex,
  cp,
  trestbps,
  chol,
  fbs,
  restecg,
  thalach,
  exang,
  oldpeak,
  slope,
  ca,
  thal
) {
  const token = cookies().get("token")?.value;

  if (!token) {
    console.error("Token not found!");
    return { error: "Token is required" };
  }

  const bodyData = {
    token, 
    first_name,
    last_name,
    national_id,
    date_of_birth,
    sex,
    cp,
    trestbps,
    chol,
    fbs,
    restecg,
    thalach,
    exang,
    oldpeak,
    slope,
    ca,
    thal,
  };

  console.log("Data to be posted:", bodyData);

  try {
    const response = await fetch(
      `http://101.46.66.167:3001/api/v1/clinic/predict/heart`,
      {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
      }
    );

    const res = await response.json();

    if (response.ok) {
      console.log("Prediction posted successfully!", res.message || res);
      return res.result;
    } else {
      console.error("Failed to post prediction:", res);
      return { error: res.message || "Failed to get prediction" };
    }
  } catch (error) {
    console.error("Error in API call:", error);
    return { error: error.message || "An unknown error occurred" };
  }
}


export async function getUserHistory() {
  const token = cookies().get("token")?.value;

  if (!token) {
    console.error("Token not found!");
    return { error: "Token is required" };
  }

  const apiUrl = `http://101.46.66.167:3001/api/v1/history/all`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const res = await response.json();
      console.error("Failed to retrieve user history:", res);
      return { error: res.message || "Failed to retrieve history" };
    }

    const res = await response.json();
    console.log("User history retrieved successfully!", res);
    return res.history;
  } catch (error) {
    console.error("Error in API call:", error);
    return { error: error.message || "An unknown error occurred" };
  }
}

export async function getUserHistoryByNationalId() {
  const token = cookies().get("token")?.value;

  if (!token) {
    console.error("Token not found!");
    return { error: "Token is required" };
  }

  const apiUrl = `http://101.46.66.167:3001/api/v1/history/all`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const res = await response.json();
      console.error("Failed to retrieve user history:", res);
      return { error: res.message || "Failed to retrieve history" };
    }

    const res = await response.json();
    console.log("User history retrieved successfully!", res);
    return res.history;
  } catch (error) {
    console.error("Error in API call:", error);
    return { error: error.message || "An unknown error occurred" };
  }
}





export async function Exit() {
  cookies().delete("token");
}