import { loginUseCase, loginWithGithubUseCase } from "@/auth/presentation/injections/createAuthRepository";
import { ref } from 'vue';

export const useLoginController = () => {
  const isLoadingSignIn = ref(false);
  const errorMessage = ref("")
  
  const signInEvent = async (userEmail: string, userPassword: string) => {
    isLoadingSignIn.value = true;
    const signInData= {userEmail, userPassword};
    
    try {
      await loginUseCase.execute(signInData);
    } catch (error) {
      errorMessage.value = "Error while siging in.";
      throw new Error("Error");
    } finally {    
      isLoadingSignIn.value = false;
    } 
  }

  const signInWithGithub = async () => {
    isLoadingSignIn.value = true;
    try {
      await loginWithGithubUseCase.execute();
    } catch (error) {
      errorMessage.value = "Error while siging in with Github.";
      throw new Error("Error");
    } finally {    
      isLoadingSignIn.value = false;
    }
  }

  return {
    isLoadingSignIn,
    errorMessage,
    signInEvent,
    signInWithGithub,
  }
}
