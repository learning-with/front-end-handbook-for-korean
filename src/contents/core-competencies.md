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
문서 객체 모델(The Document Object Model, DOM)은 계층적인 노드 트리로서 웹페이지를 개념화하는 기본 프로그래밍 인터페이스이며 동적인 상호작용과 조작을 가능하게 합니다. 이 모델은 각 HTML 요소, 속성 및 텍스트 스니펫을 접근가능한 객체로 변환하며 자바스크립트와 같은 프로그래밍 언어가 페이지의 구조, 스타일, 콘텐츠를 효과적으로 변경할 수 있도록 합니다. DOM의 트리 구조는 웹 문서의 탐색과 편집을 단순화할 뿐만 아니라 실시간 업데이트, 이벤트 처리, 상호작용을 용이하게 하여 반응적이고 인터랙티브한 웹 애플리케이션을 만드는데 필수적입니다.

주요 특징:
- 트리 구조: DOM은 웹페이지를 트리로 표현하며 요소, 속성, 텍스트를 각각 노드로 나타냅니다. 예를 들어, HTML 문서는 `<html>`, `<head>`, <body>`와 같은 노드를 포함합니다.
- 조작: 프로그래밍 언어 특히 자바스크립트를 사용하여 DOM을 조작할 수 있습니다. 이를 통해 HTML 요소, 속성, 텍스트를 변경하거나 요소를 추가 및 제거할 수 있습니다.
- 이벤트 처리: DOM은 유저의 상호작용이나 브라우저의 활동으로 인한 이벤트를 처리할 수 있습니다.
- 동적 변경: DOM을 통해, 웹 페이지는 리로드할 필요없이 동적으로 콘텐츠와 구조를 변경할 수 있으며 상호작용적이고 동적인 웹 애플리케이션을 구현할 수 있습니다.

DOM은 웹 개발의 중요한 부분이며, 동적이고 인터랙티브한 웹 페이지를 가능하게 합니다. 이는 웹 페이지의 기초가되는 강력한 인터페이스이자 현대의 웹 브라우저에서 모두 지원합니다.

더 알아보기:
- [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) on MDN
- [DOM Enlightenment](https://domenlightenment.com/)
- [Vanilla JS: You Might Not Need a Framework](https://frontendmasters.com/courses/vanilla-js-apps/?utm_source=guides&utm_medium=website&utm_campaign=feh2024) on Frontend Masters
사양:
- [DOM Living Standard](https://dom.spec.whatwg.org/)
참고:
- [MDN DOM interfaces](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) on MDN

## 5.6 TypeScript
타입스크립트는 마이크로소프트가 개발하고 관리하는 오픈 소스 프로그래밍 언어입니다. 자바스크립트의 상위 집합으로, 유효한 자바스크립트 코드는 모두 타입스크립트 코드로도 유효합니다. 타입스크립트는 자바스크립트에 선택적 정적 타입과 다른 기능들을 더하며 특히 더 크고 복잡한 코드베이스에서의 개발 경험을 향상시킵니다.

타입스크립트의 주요 특징:
- 정적 타입 검사: 타입스크립트는 정적 타입 검사를 제공하여 개발자가 변수, 함수 매개변수 및 반환 값의 타입을 정의할 수 있도록 합니다. 이를 통해 런타임이 아닌 개발 단계에서 오류와 버그를 발견할 수 있습니다.
- 타입 참조: 타입스크립트는 명시적인 타입 주석을 권장하지만, 강력한 타입 추론 기능도 제공합니다. 이를 통해 코드의 문맥에서 타입을 유추할 수 있어 타입 관련 보일러플레이트 코드의 양을 줄일 수 있습니다.
- 고급 타입 시스템: 타입스크립트의 타입 시스템은 제너릭(Generics), 열거형(Enums), 튜플(Tuples) 및 유니온/교차 타입(Union/Intersection Types)과 같은 기능을 포합합니다. 이러한 고급 기능은 복잡하고 체계적인 코드를 작성할 수 있는 강력한 프레임워크를 제공합니다.
- 자바스크립트 라이브러리와의 통합: 타입스크립트는 기존에 존재하는 자바스크립트 라이브러리와 프레임워크와 함께 사용할 수 있습니다. 많은 인기 라이브러리의 타입 정의(Type Definitions)를 사용할 수 있어 타입스크립트 프로젝트는 타입 검사의 이점을 누리면서 사용할 수 있습니다.
- 도구 지원: 타입스크립트는 Visual Studio Code와 같은 통합 개발 환경(IDEs) 및 편집기에서 뛰어난 도구 지원을 제공합니다. 이는 자동완성, 탐색 및 리팩토링과 같은 기능을 포함하고 있습니다. 

타입스크립트 사용의 장점:
- 향상된 코드 품질 및 유지보수성: 정적 타입은 초기 개발 단계에서 쉽게 에러를 감지할 수 있도록 도우며 전반적인 코드 품질을 향상시킵니다.
- 더 쉬운 리팩토링과 디버깅: 타입은 코드가 수행해야 할 작업에 대한 더 많은 정보를 제공하며 코드를 리팩토링하고 디버그하기 쉽게 만들어 줍니다.
- 더 나은 개발자 경험: 자동완성, 코드 탐색 및 문서화 등의 도구 지원은 개발자 경험을 향상시킵니다.
- 확장성: 타입스크립트는 대규모의 코드베이스와 팀에 적합하며 복잡성을 관리하고 코드의 일관성을 유지하는데 도움을 주는 기능을 제공할 수 있습니다.

고려사항:
- 학습 곡선: 정적 타입에 친숙하지 않은 개발자들에게 타입스크립트를 효율적으로 사용하는 데 학습 곡선이 있을 수 있습니다.
- 컴파일 단계: 타입스크립트를 자바스크립트로 변환해야하는 트랜스파일링 과정이 필요하며 이는 빌드 단계에 추가적인 단계를 더합니다.

요약해서, 타입스크립트는 정적 타입과 다른 유용한 특징들을 더해 자바스크립트를 확장시키기 때문에, 대규모 애플리케이션이나 코드 유지보수가 중요한 프로젝트에서 강력한 선택이 됩니다. 개발자들이 강력한 타입 시스템과 도구 지원을 통해 이점을 누릴 수 있는 프로젝트를 포함하여 프론트엔드 커뮤니티에서 널리 채택되고 있습니다.

더 알아보기:
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
- [TypeScript 5+ Fundamentals, v4](https://frontendmasters.com/courses/typescript-v4/?utm_source=guides&utm_medium=website&utm_campaign=feh2024) from Frontend Masters
- [TypeScript Learning Path](https://frontendmasters.com/learn/typescript/?utm_source=guides&utm_medium=website&utm_campaign=feh2024) from Frontend Masters
- [Beginner's TypeScript](https://www.totaltypescript.com/tutorials/beginners-typescript)
- [The Concise TypeScript Book](https://github.com/gibbok/typescript-book)
- [TypeScript Road Map](https://roadmap.sh/typescript)

도구:
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [tsdocs.dev](https://tsdocs.dev/)
- [ts-reset](https://www.totaltypescript.com/ts-reset)

## 5.7 자바스크립트 웹 API (웹 브라우저 API)
JavaScript 웹 플랫폼 API는 웹 브라우저에 내장된 애플리케이션 프로그래밍 인터페이스(API) 모음으로, 현대적인 웹 애플리케이션을 구축하는 데 필요한 구성 요소를 제공합니다. 개발자는 이를 통해 브라우저 및 기본 운영 체제와 상호작용할 수 있으며, 전통적으로 네이티브 애플리케이션에서만 가능했던 다양한 작업을 웹 애플리케이션에서도 수행할 수 있습니다.

주요 카테고리와 예시:
- 그래픽 및 미디어 API: Canvas와 WebGL과 같은 그래픽 API로 2D와 3D 그래픽을 렌더링할 수 있습니다. 미디어 API는 `HTMLMediaElement` 인터페이스와 Web Audio API 등의 오디오와 비디오 콘텐츠를 재생하고 조작할 수 있습니다.
- 통신 API: 웹 애플리케이션의 일부와 애플리케이션 사이의 통신을 용이하게 합니다. 예를 들어 WebSocket과 Fetch API가 있습니다.
- 디바이스 API: 카메라, 마이크, GPS와 같은 사용자의 장치에 접근할 수 있습니다. 예를 들어 Geolocation API, Media Capture와 Stream API 및 배터리 상태 API를 포함합니다. 
- 저장 API: 웹 애플리케이션이 사용자의 장치에 지역적으로 데이터를 저장할 수 있게합니다. 예를 들어 로컬 스토리지 API와 IndexedDB API가 있습니다.
- 서비스 워커 및 오프라인 API: 애플리케이션은 리소스를 캐시하여 오프라인에서 실행될 수 있고 성능을 향상시킬 수 있습니다. 서비스 워커는 네트워크 요청을 가로채고 푸시 메시지를 전달할 수 있습니다.
- 성능 API: 웹 애플리케이션의 성능을 측정하고 최적화하는데 도움을 줍니다. 예를 들어 Navigation Timing API와 Performance Observer API를 포함합니다.

웹 플랫폼 API는 웹 애플리케이션의 기능을 크게 확장하여, 더 인터랙티브하고 반응성이 뛰어나며 기능이 풍부한 애플리케이션을 만들 수 있게 해줍니다. 이 API들은 개발자가 네이티브 코드 없이 다양한 플랫폼과 디바이스에서 작동하는 애플리케이션을 만들 수 있도록 지원하며, 개발 시간과 비용을 절감하는 데 도움을 줍니다. 이러한 API의 사용은 네이티브 애플리케이션과 비교할 수 있는 사용자 경험을 제공하는 현대적인 웹 애플리케이션을 구축하는 데 필수적입니다.

이 API들은 W3C(World Wide Web Consortium)와 WHATWG(Web Hypertext Application Technology Working Group)와 같은 기관에 의해 표준화되었습니다. 그러나 다양한 API에 대한 브라우저의 지원은 다를 수 있습니다.

더 학습하기:
- [Introduction to web APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction) on MDN
- [List of JavaScript Web APIs (Specifications and Interfaces)](https://developer.mozilla.org/en-US/docs/Web/API) on MDN
- [The Web Platform: Browser technologies](https://html-now.github.io/)
- [Browser APIs Learning Path](https://frontendmasters.com/learn/browser-apis/?utm_source=guides&utm_medium=website&utm_campaign=feh2024) from Frontend Masters

## 5.8 JSON (자바스크립트 객체 표기법)
JSON (JavaScript Object Notation)은 사람이 읽고 쓰기 쉽고 기계가 파싱하고 생성하기 쉬운 경량 데이터 교환 형식입니다. 텍스트 기반 형식으로, 이름-값 쌍과 값의 순서가 지정된 목록으로 구성되어 있으며, 웹 개발 및 다양한 프로그래밍 컨텍스트에서 널리 사용됩니다. 주요 특성은 다음과 같습니다.

- 경량 데이터 형식: JSON은 텍스트 기반으로 가볍게하여 데이터 교환에 적합합니다.
- 사람과 기계가 읽을 수 있음: 구조가 간단하고 명확하여 사람이 읽을 수 있고, 기계가 쉽게 파싱할 수 있습니다.
- 언어 독립적: 이름과는 달리, JSON은 JavaScript에 의존하지 않으며, 많은 프로그래밍 언어에서 사용할 수 있습니다.

더 학습하기:
- [JSON's official site](https://www.json.org/json-en.html)
- [Working with JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) on MDN

## 5.9 ES 모듈
ES 모듈(ECMAScript Modules)은 모듈화된 JavaScript 코드의 공식 표준입니다. 이는 JavaScript 코드를 재사용을 위해 효율적으로 구조화하고 조직할 수 있는 방법을 제공합니다.

ES 모듈의 주요 특징:

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
