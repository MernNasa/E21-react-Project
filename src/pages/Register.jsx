import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [userData,setUserData]=useState({
    username:"",
    email:"",
    password:""
  })
  const navigate=useNavigate()

  const handleForm=async(e)=>{
    e.preventDefault()
    try {
       const {username,email,password}=userData
       if(! username || !email || !password ){
          toast.error("All fields are required",{position:"top-center"})
          return
       }
      const {data}=await axios.post("https://6ac6467fbea0e72cf5c8ccd4.mockapi.io/users",userData)
      setUserData({
        username:"",
        email:"",
        password:""
      })

      toast.success("user register successfully.😀",{position:"top-center"})
      navigate("/login")
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong. Please try later.😀")
    }
  }

  const handleInput=(e)=>{
    const {name,value}=e.target
    setUserData({...userData,[name]:value})
  }
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-8">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Create an account</h1>
        <p className="mt-2 text-sm text-slate-600">
          Register for a ShopEase account.
        </p>

        <form onSubmit={handleForm} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Name
            </label>
            <input
              id="name"
              name="username"
              value={userData.username}
              onChange={handleInput}
              type="text"
              autoComplete="name"
              required
              className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={userData.email}
              onChange={handleInput}
              autoComplete="email"
              required
              className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={userData.password}
              onChange={handleInput}
              autoComplete="new-password"
              
              className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Create account
          </button>
        </form>
      </section>
    </main>
  );
};

export default Register;
