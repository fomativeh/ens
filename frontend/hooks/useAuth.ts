import axios from 'axios';
import { useRouter, usePathname } from 'next/navigation';
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import toast from 'react-hot-toast';

const useAuth = () => {
    const pathname = usePathname();
    const { setUserState } = useContext(UserContext);
    const router = useRouter();

    useEffect(() => {
        const fetchUserData = async (token:any) => {
            const userID: string = (JSON.parse(localStorage.getItem("userid") as string))
            if (!token) {
                return;
            }

            let loadingToast;
            try {
                loadingToast = toast.loading("Fetching your details...");

                const fetchUserDataRes = await axios.post("/api/account/userdata", userID, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                let userData = fetchUserDataRes.data;
                if (!userData.email) {
                    toast.dismiss(loadingToast);
                    return toast.error("An error occurred. Please reload to fetch your details.");
                }

                setUserState({ isLoggedIn: true, userData: userData });
                toast.dismiss(loadingToast);
            } catch (error) {
                toast.dismiss(loadingToast);
                toast.error("An error occurred. Please reload to fetch your details.");
            }
        };

        if (typeof window !== 'undefined') {
            const accessToken = JSON.parse(localStorage.getItem('access_token') as string);

            if (!accessToken && pathname !== "/" && pathname !== "/appraisal") {
                router.push("/login");
            } else {
                fetchUserData(accessToken);
            }
        }
    }, [pathname, router, setUserState]);

};

export default useAuth;
