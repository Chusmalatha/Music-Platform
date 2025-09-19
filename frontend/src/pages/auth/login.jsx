import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../components/common/Form';   // ✅ default import
import { loginUser } from '../../app/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await dispatch(loginUser({ email, password }));

      if (data?.payload?.success) {
        toast.success(data.payload.message || "Login successful!", { autoClose: 500 });

        if (data?.payload?.user?.role === 'admin') {
          navigate('/admin/songslist');   // ✅ fixed missing slash
        } else {
          navigate('/user/home');
        }
      } else {
        toast.error(data?.payload?.message || "Login failed!", { autoClose: 500 });
      }
    } catch (e) {
      toast.error("Something went wrong!", { autoClose: 500 });
    }
  };

  const fields = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      value: email,
      onChange: e => setEmail(e.target.value),
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      value: password,
      onChange: e => setPassword(e.target.value),
    },
  ];

  return (
    <div className="mx-auto w-full max-w-md px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2 text-sm sm:text-base text-gray-400">
          Don&apos;t you have an account?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>

      {/* Form */}
      <Form
        fields={fields}
        onSubmit={handleSubmit}
        buttonText={auth.status === 'loading' ? 'Logging in...' : 'Login'}
        errorMessage={auth.error}
      />
    </div>
  );
};

export default Login;
