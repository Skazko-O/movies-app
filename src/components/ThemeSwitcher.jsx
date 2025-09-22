import { useState, useEffect } from "react"
import { Form } from "react-bootstrap"
import useStorage from "../hooks/useStorage"
import { useCommonStore } from '../store/commonStore';


export default function Themeswitcher() {
    const { getItem: getStorageItem, setItem: setStorageItem } = useStorage();
    const [isDarkTheme, setDarkTheme] = useState(getStorageItem('dark', window.matchMedia('(prefers-color-scheme: dark)').matches))
    const { setColorTheme } = useCommonStore()

    const checkHandler = (e) => {
        setDarkTheme(e.target.checked)
        setStorageItem('dark', e.target.checked)
        const theme = e.target.checked ? 'dark' : 'light'
        document.body.setAttribute('data-bs-theme', theme)
        setColorTheme(theme)
    }

    const mediaHandler = (e) => {
        if (getStorageItem('dark', null) === null) {
            const theme = e.matches ? 'dark' : 'light'
            document.body.setAttribute('data-bs-theme', theme)
            setDarkTheme(e.matches)
            setColorTheme(theme)
        }
    }

    useEffect(() => {
        if (isDarkTheme) {
            document.body.setAttribute('data-bs-theme', 'dark');
            setColorTheme('dark');
        } else {
            document.body.setAttribute('data-bs-theme', 'light');
            setColorTheme('light');
        }

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', mediaHandler);
        return () => {
            mediaQuery.removeEventListener('change', mediaHandler);
        };
    }, []);

    return (
        <Form.Check
            type="switch"
            id="theme-switch"
            label=""
            onChange={checkHandler}
            checked={isDarkTheme}
        />
    )
}