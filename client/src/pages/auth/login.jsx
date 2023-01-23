import React from "react";
import HomeLayout from "../../components/layouts/home";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../helper/validations";
import { login } from "../../services/auth.service";
import "./style.css";
export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });
  const handleFormSubmit = (data) => {
    console.log(data);
    // login
    const { email, password } = data;
    login({ email, password });
  };

  return (
    <HomeLayout>
      <div className="auth-wrapper pt-5">
        <div className="row">
          <h1 className="text-white text-center">Login to admin account</h1>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card auth-card">
              <div className="card-body">
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                  <div className="form-group mt-3">
                    <label className="text-white">Emal</label>
                    <input
                      type="email"
                      placeholder="enter your email"
                      className="form-control"
                      {...register("email")}
                    />
                  </div>
                  <p className="text-danger">{errors.email?.message}</p>
                  <div className="form-group mt-3">
                    <label className="text-white">Password</label>
                    <input
                      type="password"
                      placeholder="enter your password"
                      className="form-control"
                      {...register("password")}
                    />
                  </div>
                  <p className="text-danger">{errors.password?.message}</p>
                  <div className="form-group mt-3">
                    <button className="btn bg-red text-white">Sign in</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
