import * as React from "react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="fixed pt-[20px] left-[20px] flex flex-row-reverse gap-[20px]">
      <div onClick={toggleMenu}>|||</div>
      {isMenuOpen && (
        <div className="w-[300px] bg-white overflow-hidden max-h-screen overflow-y-auto">
          <nav>
            <ul className="list-none p-0 m-0 flex flex-col gap-[20px]">
              {content.map(({ title, slug, items }, title_index) => (
                <li key={title_index}>
                  <a href={`${slug}`} className="block">
                    <div className="font-bold">
                      {title_index + 1}. {title}
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      {items.map((item, item_index) => (
                        <div
                          key={item_index}
                          className="text-sm hover:underline"
                        >
                          {title_index + 1}.{item_index + 1} — {item}
                        </div>
                      ))}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

const content = [
  {
    title: "개요",
    slug: "/overview-of-field-of-work",
    items: [
      "프론트엔드|UI|UX 개발자/엔지니어란 무엇인가?",
      "일반적인 직무 명칭 (섹션 2의 '집중 분야'를 기준으로)",
      "커리어 레벨 및 보상",
      "직업적인 도전",
    ],
  },
  {
    title: "주요 분야",
    slug: "/areas-of-focus",
    items: [
      "웹사이트 개발",
      "웹 애플리케이션 개발 / 소프트웨어 엔지니어링",
      "웹 UX / UI 엔지니어링",
      "웹 테스트 엔지니어링",
      "웹 성능 엔지니어링",
      "웹 접근성 엔지니어링",
      "게임 개발",
    ],
  },
  {
    title: "학습 / 교육 / 훈련",
    slug: "/learning-education-training",
    items: [
      "초기 단계",
      "온라인 강좌",
      "자격증 및 학습 경로",
      "대학/대학원 교육",
    ],
  },
  {
    title: "기본적인 개념",
    slug: "/foundational-aspects",
    items: [
      "월드 와이드 웹 (WWW 또는 웹)",
      "인터넷",
      "IP 주소",
      "도메인 이름",
      "DNS (도메인 네임 시스템)",
      "URL (통합 자원 위치)",
      "서버 및 웹 호스팅",
      "CDN (콘텐츠 전송 네트워크)",
      "HTTP/HTTPS (하이퍼텍스트 전송 프로토콜/보안)",
      "웹 브라우저",
      "자바스크립트 엔진",
    ],
  },
  {
    title: "핵심 역량",
    slug: "/core-competencies",
    items: [
      "코드 편집기",
      "HTML (하이퍼텍스트 마크업 언어)",
      "CSS (종속 스타일 시트)",
      "자바스크립트 프로그래밍 언어 (ECMAScript 262)",
      "DOM (문서 객체 모델)",
      "TypeScript",
      "자바스크립트 웹 API (웹 브라우저 API)",
      "JSON (자바스크립트 객체 표기법)",
      "ES 모듈",
      "명령줄",
      "Node.js",
      "자바스크립트 패키지 관리자",
      "NPM 레지스트리",
      "Git",
      "웹 접근성 - WCAG & ARIA",
      "웹 이미지, 파일 유형 및 데이터 URL",
      "브라우저 개발자 도구",
    ],
  },
  {
    title: "기타 기술 및 패러다임",
    slug: "/other-competencies-and-paradigms",
    items: [
      "A/B 테스트",
      "AI 기반 코딩 도구",
      "적응형 디자인",
      "알고리즘",
      "비동기 프로그래밍",
      "아토믹 CSS",
      "백엔드 서비스 (BaaS)",
      "빅 'O' 표기법",
      "빌드 (웹 번들러)",
      "CI/CD",
      "콘텐츠 관리 시스템 (CMS)",
      "코드 복잡도",
      "코드 커버리지",
      "코드 포매터",
      "CSS in JS",
      "CSS 애니메이션",
      "CSS 프레임워크",
      "CSS 리셋",
      "데이터 API 테스트",
      "데이터 구조",
      "선언적 프로그래밍",
      "디자인 시스템",
      "디바이스 테스트",
      "개발 서버",
      "에뮬레이션을 통한 디바이스 테스트",
      "DOM 스크립팅/조작",
      "프론트엔드 웹 개발 프레임워크 및 라이브러리",
      "풀 스택 웹 개발 프레임워크",
      "함수형 프로그래밍 (FP)",
      "함수형/전체 테스트",
      "GraphQL",
      "헤드리스 CMS",
      "HTML 이메일 개발",
      "명령형 프로그래밍",
      "상호작용 디자인",
      "JAM 스택",
      "자바스크립트 성능",
      "JSX",
      "마이크로 프론트엔드",
      "모노레포",
      "다중 페이지 애플리케이션 (MPA)",
      "웹 기술을 통한 네이티브 애플리케이션 개발",
      "객체지향 프로그래밍 (OOP)",
      "오프라인/로컬 우선 웹 개발",
      "폴리필",
      "프로그레시브 웹 앱 (PWA)",
      "정규 표현식",
      "반응형 디자인 (RWD)",
      "REST API",
      "검색 엔진 최적화 (SEO)",
      "의미론적 버전 관리",
      "의미론적 HTML",
      "서버 사이드 렌더링 (SSR)",
      "싱글 페이지 애플리케이션 (SPA)",
      "상태 및 상태 관리",
      "상태 기계",
      "정적 분석 도구",
      "정적 사이트 생성기 (SSG)",
      "정적 타입 / 타입 주석",
      "스트리밍 SSR",
      "트리 및 그래프 데이터 구조",
      "UI 디자인 패턴",
      "UI 툴킷/라이브러리 (자바스크립트 UI 위젯)",
      "유닛 테스트",
      "사용자 경험 (UX)",
      "유틸리티 퍼스트 CSS 프레임워크",
      "가상 DOM",
      "비주얼 테스트",
      "웹 1.0",
      "웹 2.0",
      "웹 3.0 (개념)",
      "웹 애니메이션 (자바스크립트 애니메이션)",
      "웹 어셈블리 (WASM)",
      "웹 브라우저 테스트",
      "웹 컴포넌트",
      "웹 폰트",
      "웹 호스팅 서비스",
      "웹 성능",
      "웹 보안",
      "웹 소켓",
      "웹 타이포그래피",
      "웹 워커",
      "와이어프레임",
    ],
  },
  {
    title: "프론트엔드 개발 스택",
    slug: "",
    items: [
      "현대적인 프론트엔드 개발 툴박스/스택",
      "현대적인 툴박스/스택",
      "최첨단 풀 스택 개발 툴박스/스택",
    ],
  },
  {
    title: "전문적인 커리어 준비",
    slug: "",
    items: [
      "온라인 존재감 구축",
      "실제 개발 작업 수행",
      "이력서 작성",
      "인터뷰 준비",
      "취업 지원",
    ],
  },
  {
    title: "커뮤니티, 팟캐스트 및 뉴스레터",
    slug: "",
    items: ["온라인 커뮤니티", "지역 커뮤니티", "팟캐스트", "이메일 뉴스레터"],
  },
];
