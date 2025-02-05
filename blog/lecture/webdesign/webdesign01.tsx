import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Webdesign01() {
  return (
    <div className='details'>
      <h3>소개1</h3>
      <p>
        안녕하세요! 웹스토리보이입니다. 이 강의는 디자인, 코딩, 및 개발을 한번에
        경험할 수 있는 풀스택 도전 튜토리얼을 제공합니다. 개인이 디자인부터
        코딩, 그리고 개발까지 진행하며 전체적인 웹사이트 구조와 흐름을 이해할 수
        있도록 도와줍니다. 디자인 작업은 피그마를 활용하며, 코딩은 HTML5/CSS3를
        사용하고, 개발은 PHP를 활용합니다. 이 프로세스를 통해 풀스택 개발에
        도전하며 전체적인 웹사이트 제작 과정을 이해할 수 있습니다. 또한 PHP를
        사용하여 게시판 및 로그인을 구현함으로써 웹사이트의 활용성을 높일 수
        있습니다.
      </p>
      <h4>1. 기본 구조 만들기</h4>
      <h5>
        1.1 웹 문서 만들기 : VSCODE를 실행하고 C-2.html파일을 만들겠습니다.
      </h5>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인기능사 레이아웃 C-2으로 변경해주겠습니다. 상단에 디자인
        보기 버튼을 누르면 전체적인 레이아웃을 한 눈에 볼 수 있으니
        참고해주세요!
      </p>
      <h5>1.2 전체적인 구조는 왼쪽 메뉴와 콘텐츠로 구성되어 있습니다.</h5>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인기능사 레이아웃 C-2으로 변경해주겠습니다. 상단에 디자인
        보기 버튼을 누르면 전체적인 레이아웃을 한 눈에 볼 수 있으니
        참고해주세요!
      </p>
      <div>
        <SyntaxHighlighter
          language='html'
          style={oneDark}
          wrapLines={true}
          lineProps={{
            style: {
              fontSize: '14px',
              fontFamily: 'NanumSquareNeo, monospace',
              lineHeight: '1.6',
            },
          }}
        >
          {`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>웹디자인기능사 레이아웃</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>`}
        </SyntaxHighlighter>
      </div>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인기능사 레이아웃 C-2으로 변경해주겠습니다. 상단에 디자인
        보기 버튼을 누르면 전체적인 레이아웃을 한 눈에 볼 수 있으니
        참고해주세요!
      </p>
      <h5>1.3 푸터 영역은 두개의 영역으로 나누고 구성되어 있습니다.</h5>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인기능사 레이아웃 C-2으로 변경해주겠습니다. 상단에 디자인
        보기 버튼을 누르면 전체적인 레이아웃을 한 눈에 볼 수 있으니
        참고해주세요!
      </p>
      <div>
        <SyntaxHighlighter
          language='html'
          style={oneDark}
          wrapLines={true}
          lineProps={{
            style: {
              fontSize: '14px',
              fontFamily: 'NanumSquareNeo, monospace',
              lineHeight: '1.6',
            },
          }}
        >
          {`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>웹디자인기능사 레이아웃</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>`}
        </SyntaxHighlighter>
      </div>
      <h3>정리</h3>
      <p>
        안녕하세요! 웹스토리보이입니다. 이 강의는 디자인, 코딩, 및 개발을 한번에
        경험할 수 있는 풀스택 도전 튜토리얼을 제공합니다. 개인이 디자인부터
        코딩, 그리고 개발까지 진행하며 전체적인 웹사이트 구조와 흐름을 이해할 수
        있도록 도와줍니다. 디자인 작업은 피그마를 활용하며, 코딩은 HTML5/CSS3를
        사용하고, 개발은 PHP를 활용합니다. 이 프로세스를 통해 풀스택 개발에
        도전하며 전체적인 웹사이트 제작 과정을 이해할 수 있습니다. 또한 PHP를
        사용하여 게시판 및 로그인을 구현함으로써 웹사이트의 활용성을 높일 수
        있습니다.
      </p>
    </div>
  );
}
