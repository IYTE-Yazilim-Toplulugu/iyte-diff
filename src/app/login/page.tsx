import React from 'react';
import Logo from "@/images/iyte_logo-eng.png";
import Image from 'next/image';

const Login = () => {
  return (
    <section className='w-full h-full flex justify-center items-center'>
      <div className='container mx-auto max-w-md mx-2 bg-white/65 rounded-xl drop-shadow-2xl'>
        <Image src={Logo} alt='İYTE' className='w-1/2 mx-auto pt-10 drop-shadow-2xl' />

        <form className='w-full h-full p-6 flex flex-col gap-3 text-black'>
          <Input type='email' name='email' placeholder='email' />
          <Input type='password' name='password' placeholder='password' />
          <button type="submit" className='rounded-md bg-iyte-blue text-white p-2 mt-8'>Login</button>
        </form>
      </div>
    </section>
  )
}

const Input = ({type, name, placeholder} : {type: string; name: string; placeholder: string}) => {
  return (
    <input type={type} name={name} placeholder={placeholder}
      className='w-full p-2 border-2 rounded-md' 
    />
  )
}

export default Login