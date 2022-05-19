export const baseTheme = {
    colors: {
        primary: "rgba(24, 24, 24, 1)",
        secondary: 'rgba(39, 39, 39, 1)',
        success: 'rgba(252, 88, 66, 1)',
        text: '#C7C7C7',
        active: 'rgba(5, 193, 104, 1)',
        hold: 'rgba(255, 158, 44, 1)',

    },

    media: {
        extraLarge: '(max-width: 1140px)',
        large: '(max-width: 960px)',
        medium: '(max-width: 720px)',
        small: '(max-width: 540px)',
    },

    // in px
    sizes: {
        header: {height: 122},
        container: {width: 1200},
        footer: {height: 128},
        modal: {width: 540},
    },

    // in ms
    durations: {
        ms300: 300,
    },

    // z-index
    order: {
        header: 50,
        modal: 100,
    },
}