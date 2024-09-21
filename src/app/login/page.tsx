"use client"
import React, { Dispatch, useState } from 'react';
import Logo from "@/images/iyte_logo-eng.png";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import axios from 'axios';
import { useUser } from '@/context/UserContext';

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const { login } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
        username: username, // make sure this field is mapped correctly
        password: password,
    };
    await login(username, password);


  };

  return (
    <section className='w-full h-full flex justify-center items-center'>
      <div className='container mx-auto max-w-md mx-2 bg-white/65 rounded-xl drop-shadow-2xl'>
        <Image src={Logo} alt='İYTE' className='w-1/2 mx-auto pt-10 drop-shadow-2xl' />

        <div className='flex justify-center items-center flex-col text-black font-bold text-xl'>
          <p>İzmir Institute of Technology</p>
          <p>MATH255 Differential Equations Portal</p>
        </div>

        <form onSubmit={handleSubmit} className='w-full h-full p-6 flex flex-col gap-3 text-black'>
          <Input type='text' name='username' placeholder='username' value={username} setter={setUsername} />
          <Input type='password' name='password' placeholder='password' value={password} setter={setPassword} />
          <button type="submit" className='rounded-md bg-iyte-blue text-white p-2 mt-8'>Login</button>
        </form>
      </div>
    </section>
  )
}

const Input = ({type, name, placeholder, setter, value } : {type: string; name: string; placeholder: string; setter: Dispatch<string>; value : string}) => {
  return (
    <input value={value} onChange={(e) => setter(e.target.value)} type={type} name={name} placeholder={placeholder}
      className='w-full p-2 border-2 rounded-md' 
    />
  )
}

export default Login