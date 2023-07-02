module.exports = {
    mode: 'jit',
    purge: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx}',
      ],
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    theme: {
      extend: {},
    },
    plugins: [{
            preflight: false,
    }],
  }