// pages/Login.tsx
export default function Login() {
    function handleLogin() {
        window.location.href = 'http://localhost:8080/oauth2/authorization/cognito';
    }

    return (
        <div className="bg-gradient-to-b from-sky-100 to-white min-h-screen flex flex-col items-center justify-center text-center px-6">
            <div style={{ fontFamily: 'Poppins, sans-serif' }}>
                <h1 className="text-4xl font-semibold text-gray-900">Welcome back</h1>
                <p className="mt-3 text-gray-600">
                    Log in to pick up where you left off.
                </p>
            </div>

            <button
                onClick={handleLogin}
                className="mt-8 px-8 py-3 rounded-full bg-emerald-300 hover:bg-emerald-400 transition-colors font-medium"
            >
                Continue with Google
            </button>
        </div>
    );
}