export interface IAuthRepository {
    login: (signIn: SignIn) => Promise<USer | Error>
    register(username, password){
    }
    logOut(username, password){
    }
}
