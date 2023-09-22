import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const clearLocalStorage = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token")
    // localStorage.removeItem("userid")
}

const useLogout = () => {
    const { setUserState } = useContext(UserContext);
    const router = useRouter();
    const logout = () => {
        clearLocalStorage()
        router.push("/login");
        setUserState({ isLoggedIn: false, userData: {} });
    }

    return logout;
}

export default useLogout;
