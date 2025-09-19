import React, { useState } from 'react';
import Form from '../../components/common/form';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../app/authSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const data = await dispatch(registerUser({ userName: username, email, password }));
    if (data?.payload?.success) {
      toast.success((data.payload.message || "Registration successful!"), { autoClose: 500 });
      navigate("/auth/login");
    } else {
      toast.error((data.payload.message || "Registration failed!",{ autoClose: 500 }));
    }
  } catch (e) {
    toast.error("Something went wrong!", { autoClose: 500 });
  }
};



  const fields = [
    {
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      value: username,
      onChange: e => setUsername(e.target.value)
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      value: email,
      onChange: e => setEmail(e.target.value)
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      value: password,
      onChange: e => setPassword(e.target.value)
    }
  ];

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2">
          Already have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
      <Form
        fields={fields}
        onSubmit={handleSubmit}
        buttonText="Register"
      />
    </div>
  );
};

export default Register;
