import React, { SetStateAction, Dispatch } from "react"
const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, setImage: Dispatch<SetStateAction<string>>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
        const file = files[0];
        const reader = new FileReader()
        reader.onload = (e) => {
            const imagestring = e.target?.result as string
            setImage(imagestring);
            localStorage.setItem("ens_avatar", JSON.stringify(imagestring))
            event.target.value = "";
        };
        reader.readAsDataURL(file);
    }
};

export default handleImageUpload