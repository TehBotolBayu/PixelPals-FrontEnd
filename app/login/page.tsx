'use client'
import React, { useState } from 'react'
import Image from 'next/image';

import './login.css';

export default function page () {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [remember, setRemember] = useState<boolean>(false);

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRemember(!remember);
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
   
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(username+'\n'+password+remember);
  }
  return (
    <>
      <section className='bg-login'>
        <div className='login'>
          <div className='form-wrap'>
            <div className='logo'>
              <Image 
              src='/pinterest-logo.png' 
              width={60} 
              height={60} 
              alt='logo'
              />
            </div>
            <div className='font-bold mb-5 text-[16px]'>Sign In</div>
            <form className='login-form' onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder='User Name'
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder='Password'
                />
              </div>
              <div>
                <input 
                  type="checkbox"
                  id="remember"
                  onChange={handleCheckbox}
                />
                <label htmlFor="remember" className='ml-4'>Remember Me</label>
              </div>
              <button type="submit" className='submit-button mt-8'>LOGIN</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}