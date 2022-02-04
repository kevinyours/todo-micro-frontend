module.exports = {
  semi: true, // 세미콜론 사용 여부
  arrowParens: 'always', // 화살표 함수 괄호 사용 방식
  trailingComma: 'es5', // 여러 줄을 사용할 때, 후행 콤마 사용 방식
  bracketSpacing: true, // 객체 리터럴에서 괄호에 공백 삽입 여부
  quoteProps: 'as-needed', // 객체 속성에 쿼테이션 적용 방식
  singleQuote: true, // single 쿼테이션 사용 여부
  tabWidth: 2, // 탭 너비
  printWidth: 80, //  줄 바꿈 할 폭 길이
  useTabs: false, // 탭 사용 여부
  rangeStart: 0, // 포맷팅을 부분 적용할 파일의 시작 라인 지정
  rangeEnd: Infinity, // 포맷팅 부분 적용할 파일의 끝 라인 지정,
  jsxBracketSameLine: false, // JSX의 마지막 `>`를 다음 줄로 내릴지 여부
  jsxSingleQuote: false, // JSX에 singe 쿼테이션 사용 여부
};
