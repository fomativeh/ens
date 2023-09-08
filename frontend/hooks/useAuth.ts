import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const useAuth = () => {
    const router = useRouter();
    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        !accessToken && router.push("/login")
    }, [])
}

export default useAuth