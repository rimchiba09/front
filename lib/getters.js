import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const signinFanction = async (email,password) => {
    'use server'


    try {
        const data = await fetch(`http://101.46.66.167:3001/api/v1/clinic/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const response = await data.json();

        console.log(response, response.statusCode, response.token);

        if (response.token) {
            cookies().set('token', response.token, { secure: true });
            redirect('/welcome');
        } else {
            throw new Error('The information you entered is incorrect');
        }
    } catch (error) {
        console.error("Error during sign-in:", error);
        throw error;
    }
};
  
const signUp = async (email,password,clinic_name) => {
    'use server'
        const data = await fetch(`http://101.46.66.167:3001/api/v1/clinic/register`,{
            method:'POST',
            mode: 'no-cors',
            body: JSON.stringify({
                email: email,
                password: password,
                clinic_name: clinic_name,
               
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const response = await data.json();
        console.log(email,password,clinic_name);
        redirect('/signin');
    };
export {signinFanction,signUp};