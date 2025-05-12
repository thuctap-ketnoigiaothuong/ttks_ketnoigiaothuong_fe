import { useNavigate } from 'react-router';
import { useState } from 'react';
import Cookies from 'js-cookie';
import api from '../lib/axios';
import { API_ENDPOINTS } from '../lib/apiConfig';
import { useToast } from '../context/ToastContext';
import InputFieldNoLabel from '../components/common/InputFieldNoLabel';

export default function LoginPage()  {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { showToast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        
        try {
            const res = await api.post(API_ENDPOINTS.login, {
                email: email,
                password: password,
            });
            const data = res.data;
            console.log(data.response.data);
            const access_token = data.response.data
            Cookies.set('access_token', access_token, { expires: 7 });

            showToast({
                title: 'Success',
                message: data.response.message,
                type: 'success',
            });

            navigate(data.redirect_url);
        } catch (error: string | unknown) {
            console.error(error);
            setError('Invalid email or password');
        }
    };

    return (
        <div className="flex h-screen items-center bg-white">
            <div className="m-auto w-[500px] rounded-lg border-2 border-gray-300 bg-white p-8 shadow-lg">
                <img src="/logo.png" alt="Logo" width={125} height={125} className="mx-auto mb-4 shadow-lg" />
                <h1 className="text-center text-xl font-bold">KẾT NỐI GIAO THƯƠNG - B2B Trading</h1>
                <form onSubmit={handleSubmit} className="my-4 flex flex-col gap-4">
                    <InputFieldNoLabel 
                        type="email"
                        name="Email" 
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <InputFieldNoLabel
                        type="password"
                        name="password" 
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    {error && <p className="text-center text-sm text-red-500">{error}</p>}
                    <button
                        type="submit"
                        className="mx-auto w-1/2 rounded bg-blue-500 px-4 py-2 text-white hover:cursor-pointer hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
