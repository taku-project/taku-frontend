module.exports = {
  semi: true, // 세미콜론 사용
  singleQuote: true, // 작은따옴표 사용
  trailingComma: 'all', // 여러 줄에서 항상 쉼표 사용
  printWidth: 80, // 한 줄 최대 길이
  tabWidth: 2, // 탭 너비
  useTabs: false, // 스페이스 사용
  bracketSpacing: true, // 객체 리터럴에서 중괄호 사이에 공백 추가
  arrowParens: 'always', // 화살표 함수의 매개변수에 괄호 항상 추가
  endOfLine: 'lf', // Unix 스타일 개행
  importOrder: [
    '^react$', // React는 항상 맨 위에 위치
    '^@?\\w', // 외부 라이브러리
    '^(@/.*)$', // 절대 경로 import
    '^[./]', // 상대 경로 import
  ],
  importOrderSeparation: true, // import 그룹 간 줄바꿈 추가
  importOrderSortSpecifiers: true, // import된 항목 알파벳 순서로 정렬
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ], // Trivago 및 TailwindCSS 플러그인 추가
};