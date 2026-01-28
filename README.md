# SONG MUADDIB - Premium K-Pop Composition Studio

프리미엄 K-Pop 작곡 스튜디오 웹사이트입니다. 미니멀한 럭셔리 디자인과 강력한 관리자 대시보드를 제공합니다.

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Components**: Shadcn UI (커스텀 구현)
- **Icons**: Lucide React
- **Internationalization**: next-intl (한국어, 영어, 일본어, 중국어 지원)
- **Content Management**: JSON 기반 CMS (데이터베이스로 쉽게 마이그레이션 가능)

## 디자인 시스템

- **Background**: #F9F8F6 (Warm Bone White)
- **Primary Color**: #C5A059 (Champagne Gold)
- **Typography**: 
  - Headings: Playfair Display (Serif)
  - Body: Inter (Sans-serif)
- **특징**: 넓은 여백, 부드러운 스크롤 애니메이션, 글래스모피즘 효과

## 주요 기능

### 공개 페이지
- **랜딩 페이지**: 히어로 섹션, 스튜디오 소개, 추천 트랙
- **포트폴리오**: 그리드 레이아웃의 디스코그래피, 장르별 필터링
- **다국어 지원**: 네비게이션 바의 언어 전환기 (KR/EN/JP/CN)
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화

### 관리자 대시보드 (/admin)
- **게시물 관리**: 트랙 추가, 수정, 삭제
- **콘텐츠 편집기**: 텍스트, 이미지, 소셜 링크 업데이트
- **SEO 도구**: 각 페이지별 Meta Title, Description, OpenGraph 이미지 설정
- **테마 설정**: Primary Color 및 Background Color 변경

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 프로젝트 구조

```
├── app/
│   ├── [locale]/          # 다국어 라우팅
│   │   ├── page.tsx       # 홈 페이지
│   │   ├── portfolio/     # 포트폴리오 페이지
│   │   └── admin/         # 관리자 대시보드
│   ├── layout.tsx         # 루트 레이아웃
│   └── globals.css        # 전역 스타일
├── components/
│   ├── ui/                # 기본 UI 컴포넌트
│   ├── admin/             # 관리자 컴포넌트
│   ├── Navigation.tsx     # 네비게이션 바
│   ├── Footer.tsx         # 푸터
│   ├── Hero.tsx           # 히어로 섹션
│   └── ...
├── lib/
│   ├── cms.ts             # JSON 기반 CMS 로직
│   └── utils.ts           # 유틸리티 함수
├── messages/              # 다국어 메시지 파일
│   ├── ko.json
│   ├── en.json
│   ├── ja.json
│   └── zh.json
└── i18n.ts                # i18n 설정
```

## 콘텐츠 관리

모든 콘텐츠는 `lib/cms.ts` 파일에서 관리됩니다. 프로덕션 환경에서는 이 파일의 함수들을 데이터베이스 API 호출로 교체하면 됩니다.

## 라이선스

이 프로젝트는 개인 사용 목적으로 제작되었습니다.
