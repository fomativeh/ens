import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const useLogout = () => {
    const { setUserState } = useContext(UserContext);
    const router = useRouter();

    const logout = () => {
        localStorage.removeItem("access_token");
        router.push("/login");
        setUserState({ isLoggedIn: false, userData: {} });
    }

    return logout;
}

export default useLogout;
