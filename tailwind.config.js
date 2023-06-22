/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['var(--font-poppins)'],
                mono: ['var(--font-roboto-mono)'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors:{
              'purple-1': '#E2D4F0',
                'purple-2': '#D0B7E6',
                'purple-3': '#A06ECE',
                'purple-4': '#7126B5',
                'purple-5': '#4B1979',
                'purple-6': '#C1BBEB',
                'cream-1': '#FFF8ED',
                'cream-2': '#FFF0DC',
                'cream-3': '#FFE9CA',
                'cream-4': '#D4C2A8',
                'cream-5': '#AA9B87',
                'neutral-1': '#FFF',
                'neutral-2': '#D0D0D0',
                'neutral-3': '#8A8A8A',
                'neutral-4': '#3C3C3C',
                'neutral-5': '#151515',
                'alert-1': '#73CA5C',
                'alert-2': '#F9CC00',
                'alert-3': '#FF0000',
                'blue-1' : '#043A6C',
            },
        },
    },
    plugins: [],
};
