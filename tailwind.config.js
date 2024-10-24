/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  // html 파일 안에서 tailwind를 사용함
  // 오류 "./src/**/*.html" < src 안의 html에만 적용됨
  theme: {
    extend: {},
  },
  plugins: [],
};
