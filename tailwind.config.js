module.exports = {
    content: ["./resources/**/*.blade.php", "./resources/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
          colors: {
            brown: {
              600: '#6F4E37',
              700: '#5C3D2E',
              800: '#4B3621',
            },
          },
        },
      },
    plugins: [
        require("@tailwindcss/forms"),
    ],
};
