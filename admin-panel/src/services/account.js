import axios from "axios";

class AccountService {
  async signup(account) {
    const pseudoError = document.querySelector(".pseudo.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    console.log(account);
    return await axios
      .post(`${process.env.REACT_APP_API_URL}api/user/register`, account)
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          pseudoError.innerHTML = res.data.errors.pseudo;
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        }
      });
  }

  async signin(account) {
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    return await axios
      .post(`${process.env.REACT_APP_API_URL}api/user/login`, account, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = `/dashboard`;
        }
      });
  }

  async logout() {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true,
    });
  }
}

export const accountService = new AccountService();
