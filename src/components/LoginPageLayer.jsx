import React, { useState } from 'react';
import {
    TextField,
    Button,
    Typography,
    Box,
    Link,
    Divider,
} from '@mui/material';

function LoginPageLayer() {
    // State to hold email and password
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle login
    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div className="min-h-screen bg-hero-gradient flex items-center justify-center px-4">
            <Box className="bg-white glassmorphism shadow-custom-green-lg flex flex-col md:flex-row w-full max-w-5xl rounded-2xl overflow-hidden">

                {/* Left Side - Image */}
                <div
                    className="hidden md:flex w-1/2 items-center justify-center p-8 bg-subtle-green-gradient flex-col text-center"
                    style={{
                        background: 'var(--gradient-subtle-green)',
                    }}
                >
                    <div className="text-primary-gradient font-extrabold text-2xl sm:text-3xl md:text-4xl break-words leading-snug max-w-sm animate-custom-float">
                        Ace Your Interview With One Click
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-8 gap-6 flex flex-col justify-center">
                    <Typography
                        variant="h4"
                        component="h1"
                        className="text-center text-primary-gradient font-semibold mb-2"
                    >
                        Welcome Back
                    </Typography>
                    <Typography
                        variant="body2"
                        className="text-center text-gray-600 mb-6"
                    >
                        Sign in to continue to your dashboard
                    </Typography>

                    <form className="flex flex-col gap-4" onSubmit={handleLogin}>
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            variant="outlined"
                            fullWidth
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            required
                            value={formData.password}
                            onChange={handleChange}
                        />

                        <div className="flex justify-end text-sm">
                            <Link
                                href="#"
                                underline="hover"
                                className="text-custom-green-600 hover:text-custom-green-700"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        <Button
                            variant="contained"
                            type="submit"
                            fullWidth
                            sx={{
                                background:
                                    'linear-gradient(to right, var(--custom-green-500), var(--custom-green-600))',
                           
                                fontWeight: 600,
                                paddingY: 1.2,
                                '&:hover': {
                                    background: 'var(--custom-green-600)',
                                },
                            }}
                        >
                            Login
                        </Button>
                    </form>

                    <Divider className="my-6">OR</Divider>

                    <div className="text-center text-sm">
                        Don’t have an account?{' '}
                        <Link
                            href="/signup"
                            underline="hover"
                            className="text-custom-blue-600 hover:text-custom-blue-700 font-medium"
                        >
                            Create one
                        </Link>
                    </div>
                </div>
            </Box>
        </div>
    );
}

export default LoginPageLayer;
