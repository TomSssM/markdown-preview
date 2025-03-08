const Themes = {
    Light: 'vscode-light',
    Dark: 'vscode-dark'
};

class Theme {
    static THEME_KEY = 'theme';

    static getTheme() {
        return window.localStorage.getItem(this.THEME_KEY) || Themes.Light;
    }

    static setTheme(theme) {
        Object.values(Themes).forEach((theme) => {
            document.body.classList.remove(theme);
        });

        document.body.classList.add(theme);
        window.localStorage.setItem(this.THEME_KEY, theme);
    }

    static onThemeChange = () => {
        const theme = document.body.classList.contains(Themes.Dark) ? Themes.Light : Themes.Dark;

        this.setTheme(theme);
    }

    static initTheme = () => {
        this.setTheme(this.getTheme());
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('switch');

    if (!themeSwitch) {
        return;
    }

    themeSwitch.addEventListener('click', Theme.onThemeChange);
});

Theme.initTheme();
