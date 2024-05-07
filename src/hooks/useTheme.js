import { useEffect, useState } from "react";

export default function useTheme() {
    const [theme, setTheme] = useState(window.localStorage.getItem('theme'));

    useEffect(() => {
        window.addEventListener('storage', (e) => {
            e.key === 'theme' && setTheme(e.newValue);
        })
    }, []);

    return [theme, setTheme];
}