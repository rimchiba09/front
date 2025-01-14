import Signup from"@/components/SihnUp/SignUp"
import { signUp } from "@/lib/getters";
const SignUp = () => {
  return (
    <>
      <div className='w-full h-screen'>
        <Signup signUp={signUp} />
      </div>
    </>
  )
}
export default SignUp;