import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

interface User {
    username: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    refetch: () => void;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    refetch: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        try {
            const res = await fetch("http://localhost:8080/api/user/me", {
                credentials: "include", // sends the session cookie
            });
            if (res.ok) {
                const data = await res.json();
                setUser(data);
            } else {
                setUser(null);
            }
        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, refetch: fetchUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);