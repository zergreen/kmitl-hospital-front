import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import he from 'he'; 
import { login, autoLogin } from '../function/AuthApi';

const Login = () => {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    autoLogin(navigate)
  },[])
  
  const handleLogin = (e) => {
      e.preventDefault();
      
      const sanitizedUsername = he.encode(username); 
      const sanitizedPassword = he.encode(password); 

      // call login api
      login(sanitizedUsername, sanitizedPassword, navigate);

    // if (sanitizedUsername === "qwerty" && sanitizedPassword === "qwerty") {
    //     navigate("/home");
    // } else {
    //     alert("Login fail");
    // }
    
  };

  return (
    <div className="flex justify-center items-center h-screen ">
        <div className="w-full sm:w-2/3 xl:w-1/3 min-w-[360px] h-auto bg-white shadow-2xl rounded-lg flex justify-center items-center py-16 ">
            <div className="w-2/3 h-2/3 p-4 ">
                <h2 className="text-3xl my-2.5">ยินดีต้อนรับ</h2>
                <h1 className="text-5xl leading-6 my-2.5 pb-4">เข้าสู่ระบบ</h1>
                
                <form onSubmit={handleLogin}>
                    <div className="my-5">
                        <p className=" font-normal font-400 text-base leading-5 text-gray-700 pb-2">Username</p>
                        <input 
                            className="w-full bg-white shadow-lg rounded-lg outline-none border border-gray-300 p-2"
                            type="text"
                            value={username}
                            onChange={(e) => setUser(e.target.value)}
                            // required
                        />
                    </div>
                    <div className="my-5">
                        <p className=" font-normal font-400 text-base leading-5 text-gray-700 pb-2">Password</p>
                        <input
                            className="w-full bg-white shadow-lg rounded-lg outline-none border border-gray-300 p-2"
                            type="password"
                            value={password}
                            pattern="/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g"
                            onChange={(e) => setPassword(e.target.value)}
                            // required
                        />
                    </div>
                    <button className="bg-orange-500 rounded-lg  font-bold font-700 text-lg leading-6 text-white w-full h-12" type="submit">เข้าสู่ระบบ</button>
                </form>
            <a href="/register">คุณยังไม่มีบัญชีใช่หรือไม่? [click]</a>
            </div>
        </div>
    </div>
  );
};

export default Login;