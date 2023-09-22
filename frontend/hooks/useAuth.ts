"use client"
import axios from 'axios';
import { useRouter, usePathname } from 'next/navigation';
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';
import toast from 'react-hot-toast';

const useAuth = () => {
    const pathname = usePathname()
    const { setUserState } = useContext(UserContext)
    const router = useRouter();
    const userID: string = (JSON.parse(localStorage.getItem("userid") as string))
    const fetchUserData = async (token: string) => {
        if (token == null || token == undefined) {
            return
        }
        let loadingToast;
        try {
            const fetchUserDataRes = await axios.post("/api/account/userdata", userID, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            loadingToast = toast.loading("Fetching your details...");
            let userData = fetchUserDataRes.data;
            if (!(userData.email)) {
                toast.dismiss(loadingToast)
                return toast.error("An error occcured. Please reload to fetch your details.")
            }

            setUserState({ isLoggedIn: true, userData: userData })
            console.log(fetchUserDataRes.data)
            toast.dismiss(loadingToast)
        } catch (error) {
            toast.dismiss(loadingToast);
            toast.error("An error occcured. Please reload to fetch your details.");
        }
    }

    useEffect(() => {
        const accessToken = JSON.parse(localStorage.getItem('access_token') as string)
        if (!accessToken && pathname !== "/") {
            return router.push("/login")
        }
        fetchUserData(accessToken)
    }, [])

}

export default useAuth