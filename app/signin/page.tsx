import Signin from "@/components/SignIn/SignIn"
import {signinFanction} from "@/lib/getters";
const SignIn = () => {
  return (
    <>
      <div className='w-full h-screen'>
        <Signin signIn={signinFanction}/>
      </div>
    </>
  )
}
export default SignIn;