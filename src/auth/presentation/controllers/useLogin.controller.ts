import { loginUseCase } from "@/auth/presentation/injections/createAuthRepository";
import { ref } from 'vue';

export const useLoginController = () => {
  const isLoadingSignIn = ref(false);
  const errorMessage = ref("")
  
  const signInEvent = async (userEmail: string, userPassword: string) => {
    console.log("Executing signIn event with: ", userEmail, userPassword);
    isLoadingSignIn.value = true;
    const signInData= {userEmail, userPassword};
    
    try {
      console.log("Executing loginUseCase");
      await loginUseCase.execute(signInData);
    } catch (error) {
      console.log(error);
      errorMessage.value = "Error while siging in.";
      throw new Error("Error");
    } finally {    
      isLoadingSignIn.value = false;
    } 
  }

  return {
    isLoadingSignIn,
    errorMessage,
    signInEvent
  }
}