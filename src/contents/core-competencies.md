---
slug: "/core-competencies"
date: "2024-12-27"
title: "핵심 역량"
origin: "https://frontendmasters.com/guides/front-end-handbook/2024/#5"
---

# 5. 핵심 역량

본 섹션은 프론트엔드 개발자와 관련된 핵심 역량을 식별하고 정의합니다.

## 5.1 코드 편집기

코드 편집기는 개발자가 코드를 작성하고 편집하는데 사용되는 소프트웨어 도구입니다. 개발자의 도구 세트에서 필수적인 부분으로, 편리하고 효율적인 환경을 제공함으로써 코딩 과정을 지원할 수 있도록 설계되었습니다. 코드 편집기는 간단하고 가벼운 프로그램부터 다양한 기능을 갖춘 복잡한 통합 개발 환경(Integrated Develpoment Environments, IDEs)까지 범위가 다양합니다.

### 코드 편집기의 주요 특징
- 문법 강조: 다양한 색상과 글꼴로 다른 부분을 강조하여 가독성을 높이고 코드 요소를 구분합니다.
- 코드 완성: IntelliSense 또는 자동 완성으로 알려진 이 기능은 부분적으로 입력된 문자열에 대해 완성된 문자열을 제안합니다.
- 오류 감지: 많은 에디터들이 실시간으로 구문 오류를 감지하여 빠른 디버깅을 할 수 있습니다.
- 파일 및 프로젝트 관리: 파일 및 프로젝트를 관리하는 특징은 자주 포함되어 있어 복잡한 프로젝트를 쉽게 탐색할 수 있게 합니다.
- 커스텀 및 확장: 대부분의 편집기가 커스터마이징을 제공하고 추가적인 기능을 더할 수 있는 확장을 지원합니다.
- 통합 개발 환경(IDE): 코드 편집기의 특징을 디버거, 버전 관리와 같은 추가 도구를 결합합니다.

코드 편집기를 선택하는 기준은 프로그래밍 언어, 프로젝트의 복잡도, 사용자 인터페이스 선호도 및 요구되는 기능과 같은 요인들에 의해 결정됩니다. 몇몇 개발자들은 빠른 편집을 위해 간단한 편집기를 선호하지만, 다른 개발자들은 대규모 개발을 위해 강력한 IDEs를 선택합니다. 코드 편집기는 소프트웨어 개발 과정에서 떼놓을 수 없는 도구입니다.

더 알아보기:
- [코드 편집기](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) on MDN

도구:
- [Visual Studio Code(aka VScode)](https://code.visualstudio.com/)
- [Zed](https://zed.dev/)

## 5.2 HTML (하이퍼텍스트 마크업 언어)
HTML(HyperText Markup Language)은 웹 페이지를 만들고 디자인하기 위해 사용하는 표준 언어입니다. 자바스크림트와 같은 프로그래밍 언어와는 다르게 웹 페이지의 구조와  레이아웃을 정의하는 마크업 언어입니다.

다음은 HTML이 작동하는 기본 방식입니다:
- 요소와 태그: HTML은 '요소(element)'를 사용하여 웹페이지의 다양한 부분을 정의합니다. 각 요소는 꺾쇠 괄호(<>) 안에 작성된 태그로 감싸집니다. 예를 들어, `<p>`태그는 단락을 시작하는 태그이고 `</p>`는 닫는 태그입니다. 콘텐츠는 이 태그들 사이에 위치합니다.
- 문서의 구조: HTML 문서는 `<head>`와 `<body>`로 정의된 구조를 가집니다. `<head>`는 페이지의 제목과 같은 메타 정보를 포함하고 `<body>`는 사용자에게 시각적으로 보이는 실제 콘텐츠를 포함합니다.
- 계층과 중첩: 요소는 서로 중첩되어 계층을 만들어낼 수 있습니다. 이 중첩 구조는 콘텐츠를 체계적으로 구성하고 요소 간의 부모-자식 관계를 정의하는데 도움을 줍니다.
- 속성: 요소들은 해당 요소에 대한 추가 정보를 제공하는 속성을 가질 수 있습니다. 예를 들어, 링크 요소인 `<a>` 태그의 href 속성에 연결되는 링크를 지정합니다. 
- 일반적인 요소: 다음은 자주 사용하는 HTML 요소입니다:
  - `<h1>`부터 `<h6>`: 제목 요소, <h1>이 가장 최상위
  - `<p>`: 단락 요소
  - `<a>`: 링크를 위한 앵커 요소
  - `<img>`: 이미지 요소
  - `<ul>`, `<ol>`, `<li>`: 순서 없는 목록(불릿), 순서 있는 목록(숫자), 목록 요소

HTML은 웹 페이지의 골격으로 볼 수 있습니다. 구조를 정의하지만 시각적인 스타일링(CSS의 역할)이나 상호작용 기능(자바스크립트의 영역)은 처리하지 않습니다. 프론트엔드 엔지니어로써, 동적이고 인터렉티브한 웹페이지를 구축하고 스타일링 하기 위해서 HTML을 CSS와 자바스크립트와 결합합니다.

더 알아보기:
- [HTML 가이드](https://developer.mozilla.org/en-US/docs/Learn/HTML) on MDN
- [Introduction to HTML](https://frontendmasters.com/bootcamp/introduction-html/?utm_source=guides&utm_medium=website&utm_campaign=feh2024)(Part of the Free Bootcamp) from Frontend Masters
- [Complete Intro to Web Development](https://frontendmasters.com/courses/web-development-v3/?utm_source=guides&utm_medium=website&utm_campaign=feh2024)(HTML Section) from Frontend Masters
- [HTML 배우기](https://web.dev/learn/html) on web.dev

사양:
- [HTML 표준](https://html.spec.whatwg.org/multipage/)

참고:
- [htmlreference.io](https://htmlreference.io/)
- [HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

도구:
- [HTML5 Boilerplate](https://html5boilerplate.com/)
- [HTMLLint](https://htmlhint.com/)

## 5.3 CSS (종속 스타일 시트)
CSS(Cascading Style Sheets)는 HTML로 작성된 문서의 표현 방식을 정의하는데 사용하는 웹 개발의 핵심적인 스타일 언어입니다. 개발자와 디자이너가 웹 페이지의 레이아웃, 색상, 글꼴 및 화면 크기에 따른 반응형 등의 시각적 미학을 제어할 수 있도록 합니다. 콘텐츠를 구조화하는 HTML과 달리, CSS는 콘텐츠가 어떻게 전시될 지를 다루며, 보다 효율적이고 유연한 스타일링을 위해 콘텐츠와 디자인을 분리합니다. CSS의 종속성은 여러 스타일 시트가 단일 페이지에 영향을 미칠 수 있게하며, 특정 규칙이 우선순위를 가지도록 하여 웹 전반에 일관되고 시각적으로 매력적인 사용자 경험을 제공합니다.

웹페이지의 골격으로서의 HTML을 상상해보면, `header`, 문단, 이미지와 다른 요소의 위치를 정의합니다. CSS는 옷이나 화장과 같이 이러한 요소가 어떻게 보일지를 결정합니다. 다음은 주요 특징입니다.

- 선택자와 속성: CSS에서는 HTML 요소를 특정하는 규칙을 작성합니다. 이러한 규칙은 요소가 어떠한 방식으로 스타일링할지를 지정합니다. CSS 규칙은 (HTML 요소를 특정하는)선택자와 (스타일을 입히는) 속성으로 구성됩니다. 예를 들어 모든 `<p>` 요소의 텍스트 색성을 빨간색으로 설정하는 규칙을 설정할 수 있습니다.
- 종속성과 우선순위: 스타일은 우선순위에 따라 적용됩니다. 인라인 스타일이 가장 높은 우선순위를 가지며, ID 선택자(#id), 클래스 선택자(.class) 및 태그 선택자(element) 순으로 우선순위를 가집니다.
- 박스 모델: 모든 CSS는 padding, border 및 margin 속성을 가진 박스로 여겨집니다. 이러한 속성은 각 요소의 주변 및 내부 공간을 정의하며 레이아웃과 간에 영향을 미칩니다.
- 외부, 내부, 인라인: CSS는 .css 파일로 외부에서, HTML head 내에서 내부적으로 또는 HTML 요소 내에서 인라인으로 포함될 수 있습니다.
- 반응형 디자인: CSS는 웹페이지가 다양한 디바이스와 화면 크기에서 좋게 보이도록 합니다. 주로 너비와 같은 디바이스의 특징에 따라 다른 스타일을 적용하는 "media queries"를 사용합니다.
- 애니메이션과 상호작용: CSS는 정적인 스타일만 입히지 않습니다. 애니메이션, 전환 효과 및 호버 효과를 만들 웹 페이지의 상호작용성과 시각적인 매력을 강화할 수 있습니다.

CSS를 이해하는 것은 그 구문과 규칙에 익숙해지는 것이며 시각적으로 매력적이고 기능적인 웹 페이지를 만들어야 합니다. 프론트엔드 엔지니어로서 HTML과 자바스크립트와 함께 CSS와 가까워져 웹사이트와 애플리케이션의 사용자 인터페이스 부분을 만듭니다.

더 알아보기:
- [CSS 가이드](https://developer.mozilla.org/en-US/docs/Learn/CSS) on MDN
- [Frontend Masters Introduction to CSS](https://frontendmasters.com/bootcamp/introduction-css/?utm_source=guides&utm_medium=website&utm_campaign=feh2024) (Part of the Free Bootcamp) from Frontend Masters
- [Complete Intro to Web Development](https://frontendmasters.com/courses/web-development-v3/?utm_source=guides&utm_medium=website&utm_campaign=feh2024) (CSS Section) from Frontend Masters
- [Getting Started with CSS](https://frontendmasters.com/courses/getting-started-css/?utm_source=guides&utm_medium=website&utm_campaign=feh2024) from Frontend Masters
- [Learn CSS](https://web.dev/learn/css) on web.dev

사양:
- [CSS specifications](https://www.w3.org/Style/CSS/current-work)

참고:
- [cssreference.io](http://cssreference.io/)
- [css4-selectors.com](http://css4-selectors.com/)
- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) on MDN
- [CSS Selectors Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) on MDN
- [What's next for CSS?](https://cssdb.org/)

## 5.4 자바스크립트 프로그래밍 언어 (ECMAScript 262)

ECMAScript로 잘 알려진 자바스크립트는 웹 개발에 필수적인 동적 프로그래밍 언어이다. HTML과 CSS와 함께 작동하여 상호작용하는 웹 페이지를 만들며 대부분의 웹 애플리케이션에 필수적인 요소입니다.

웹 개발에서의 역할:
- HTML과 CSS와 함께 자바스크립트는 World Wide Web의 근본적인 기술입니다. 자바스크립트는 웹 페이지에 상호작용을 더합니다.
- 주로 클라이언트 사이드 스크립팅에 사용되며, 상호작용 기능을 추가하며 사용자의 웹 브라우저에서 실행됩니다.

웹 페이지를 넘어서:
- Node.js와 함께, 자바스크립트는 서버 사이드에서도 사용될 수 있으며 대규모 웹 애플리케이션 개발도 가능합니다.
- Node.js는 개발자들이 자바스크립트를 사용하여 명령줄 인터페이스(command-line interface, CLI) 도구를 만들 수 있게 합니다. 이를 통해 서버 관리, 자동화 작업 및 개발 도구 등의 자바스크립트의 활용 범위가 확장되었으며 웹 개발자들이 친숙한 언어를 통한 작업을 할 수 있게 했습니다.

주요 특징:
- 자바스크립트는 이벤트 기반의 언어로, 사용자 행동에 반응하여 웹사이트를 동적으로 만듭니다.
- 비동기 프로그래밍을 지원하여 전체 페이지를 새로고침하지 않고 새로운 데이터를 가져오는 작업을 처리할 수 있습니다.
- 프로토타입 기반 객체 지향을 사용하여 유연한 상속 패턴을 제공합니다.

학습 곡선과 커뮤니티:
- 초보자에게 친숙하고 웹 브라우저에서 즉각적으로 시각적인 피드백을 제공하기 대문엥 첫 번째 프로그래밍 언어로 추천되곤 합니다.
- 자바스크립트는 큰 개발자 커뮤니티를 가졌으며, 학습자를 위한 풍부한 자료, 튜토리얼 및 문서를 제공합니다.
- 자바스크립트는 웹 개발에 필수적인 강력한 프로그래밍 언어입니다. 프론트엔드와 백엔드 개발 모두에서 사용할 수 있는 다재다능한 언어이며 이 때문에 웹 개발을 희망하는 사람들이 꼭 배워야 할 언어입니다.

더 알아보기:
- [Guide to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) on MDN
- [Introduction to JavaScript](https://frontendmasters.com/bootcamp/introduction-javascript/?utm_source=guides&utm_medium=website&utm_campaign=feh2024) (Part of the Free Bootcamp) from Frontend Masters
- [JavaScript: From First Steps to Professional](https://frontendmasters.com/courses/javascript-first-steps/?utm_source=guides&utm_medium=website&utm_campaign=feh2024) from Frontend Masters
- [JavaScript Learning Path](https://frontendmasters.com/learn/javascript/?utm_source=guides&utm_medium=website&utm_campaign=feh2024) from Frontend Masters
- [JavaScript Roadmap](https://roadmap.sh/javascript)

사양:
- [ECMAScript 262](https://tc39.es/ecma262/)

참고:
- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) on MDN

## 5.5 DOM (문서 객체 모델)

## 5.6 TypeScript

## 5.7 자바스크립트 웹 API (웹 브라우저 API)

## 5.8 JSON (자바스크립트 객체 표기법)

## 5.9 ES 모듈

## 5.10 명령줄

## 5.11 Node.js

## 5.12 자바스크립트 패키지 관리자

## 5.13 NPM 레지스트리

## 5.14 Git

## 5.15 웹 접근성 - WCAG & ARIA

WCAG(Wide Content Accessibility Guidelines)는 장애를 가진 사람들이 웹에 더 접근할 수 있도록 만들기 위한 국제적인 표준입니다. 이는 청각, 인지, 신경학적, 신체적, 언어적 및 시각적 장애를 가진 사람들을 포함한 넓은 범위의 사람들이 접근할 수 있는 웹 콘텐츠를 만들기 위한 프레임워크를 제공합니다.

WCAG의 주요 요소:

- 네가지 원칙: WCAG는 네 가지의 기본 원칙에 기반을 두고 웹 콘텐츠는 인지 가능(감각을 통해 이용 가능할 수 있어야함), 조작 가능(다양한 디바이스와 방법을 통해 이용 가능해야함), 이해 가능(이해하기 쉬워야함) 및 강력함(현재와 미래의 기술에 호환되어야함)다고 정의됩니다.
- 적합성 단계: WCAG는 접근성 적합성의 세 가지 단계를 정의합니다. A 단계(최소 수준), AA 단계(주요 및 가장 일반적인 장벽 해결) 및 AAA 단계(가장 높은 수준의 접근성)으로 구성되어 있습니다.
- 지침 및 성공 기준: 각 원칙은 지침으로 세분화되어 있으며 접근성을 측정하고 달성하는 것을 돕는 테스트 가능한 성공 기준을 제공합니다. 이러한 기준은 많은 사용자들이 접근할 수 있는 웹사이트와 애플리케이션을 만드는 벤치마크로 사용됩니다.

ARIA(Accessible Rich Internet Application)는 장애를 가진 사람들이 웹 콘텐츠와 웹 애플리케이션에 접근할 수 있도록 만드는 방법을 정의하는 속성 집합입니다. ARIA는 HTML을 보완하고 자바스크립트, Ajax, HTML 및 관련 기술로 개발된 동적 콘텐츠와 복잡한 사용자 인터페이스 요소에 대한 정보를 전달하는데 도움을 줍니다.

접근성에서 ARIA의 역할:

- 시맨틱 HTML의 향상: ARIA 속성은 표준 HTML 요소에 추가적인 정보를 전달하여 스크린 리더와 같은 보조 기술들이 의미를 이해할 수 있도록 도와줍니다.
- 동적 콘텐츠 접근성: ARIA는 자바스크립트로 개발된 동적 콘텐츠와 고급 사용자 인터페이스 컨트롤에 접근하도록 돕는 주요한 역할입니다.
- 사용자 정의 위젯 지원: ARIA는 표준 HTML에서는 이용 불가능한 완전한 접근 가능한 사용자 위젯을 생성할 수 있게 하여 장애가 있는 사람들이 사용할 수 있도록 보장합니다.

WCAG와 ARIA는 장애가 있는 사람들이 접근 가능한 웹을 만드는 데 필수적인 도구입니다. 개발자들이 접근 가능한 웹 콘텐츠와 애니메이션을 생성할 수 있는 프레임워크를 제공하며 누구나 능력과 관계없이 웹을 사용할 수 있도록 보장합니다.

더 알아보기:

- [웹 접근성](https://developer.mozilla.org/ko/docs/Web/Accessibility)
- [접근성 배우기(영어)](https://web.dev/learn/accessibility)
- [Website Accessibility(영어)](https://frontendmasters.com/courses/accessibility-v2/?utm_source=guides&utm_medium=website&utm_campaign=feh2024) from Frontend Masters
- [Web App Accessibility (feat. React)(영어)](https://frontendmasters.com/courses/react-accessibility/?utm_source=guides&utm_medium=website&utm_campaign=feh2024) from Fronted Masters

## 5.16 웹 이미지, 파일 유형 및 데이터 URL

## 5.17 브라우저 개발자 도구
