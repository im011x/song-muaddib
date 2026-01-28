# SONG MUADDIB 실행 가이드

## 사전 요구사항

1. **Node.js 설치 확인**
   - Node.js 18.x 이상이 필요합니다
   - 설치되어 있지 않다면 [Node.js 공식 사이트](https://nodejs.org/)에서 다운로드하세요

2. **Node.js 버전 확인**
   ```bash
   node --version
   ```
   - 18.x 이상이어야 합니다

## 설치 및 실행 단계

### 1단계: 의존성 패키지 설치

프로젝트 루트 디렉토리에서 다음 명령어를 실행하세요:

```bash
npm install
```

또는

```bash
npm i
```

이 명령어는 `package.json`에 정의된 모든 패키지를 설치합니다.

### 2단계: 개발 서버 실행

의존성 설치가 완료되면 개발 서버를 실행합니다:

```bash
npm run dev
```

서버가 시작되면 다음과 같은 메시지가 표시됩니다:
```
  ▲ Next.js 14.x.x
  - Local:        http://localhost:3000
  - Ready in Xs
```

### 3단계: 브라우저에서 확인

브라우저를 열고 다음 주소로 접속하세요:

- **한국어**: http://localhost:3000/ko
- **영어**: http://localhost:3000/en
- **일본어**: http://localhost:3000/ja
- **중국어**: http://localhost:3000/zh

**관리자 대시보드**: http://localhost:3000/ko/admin

## 주요 명령어

### 개발 모드 실행
```bash
npm run dev
```
- 핫 리로드 지원
- 개발 중 코드 변경 시 자동 새로고침

### 프로덕션 빌드
```bash
npm run build
```
- 최적화된 프로덕션 빌드 생성
- `.next` 폴더에 빌드 결과물 생성

### 프로덕션 서버 실행
```bash
npm run build
npm start
```
- 빌드 후 프로덕션 모드로 서버 실행

### 린트 검사
```bash
npm run lint
```
- 코드 스타일 및 오류 검사

## 문제 해결

### Node.js가 설치되지 않은 경우

1. [Node.js 공식 사이트](https://nodejs.org/) 방문
2. LTS 버전 다운로드 및 설치
3. 설치 후 터미널 재시작
4. `node --version`으로 설치 확인

### 포트 3000이 이미 사용 중인 경우

다른 포트로 실행하려면:
```bash
npm run dev -- -p 3001
```

또는 `package.json`의 scripts를 수정:
```json
"dev": "next dev -p 3001"
```

### 패키지 설치 오류가 발생하는 경우

1. `node_modules` 폴더 삭제
2. `package-lock.json` 삭제 (있는 경우)
3. 다시 `npm install` 실행

```bash
rm -rf node_modules package-lock.json
npm install
```

Windows PowerShell의 경우:
```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

## 프로젝트 구조

```
muaddib/
├── app/              # Next.js App Router 페이지
├── components/       # React 컴포넌트
├── lib/              # 유틸리티 및 CMS 로직
├── messages/         # 다국어 메시지 파일
└── public/           # 정적 파일 (이미지 등)
```

## 다음 단계

1. **이미지 추가**: `/public/images/` 폴더에 실제 이미지 추가
2. **콘텐츠 수정**: `lib/cms.ts`에서 샘플 데이터 수정
3. **스타일 커스터마이징**: `tailwind.config.ts`에서 디자인 시스템 조정

## 추가 도움말

문제가 발생하면:
1. 터미널 오류 메시지 확인
2. Node.js 버전 확인 (`node --version`)
3. `npm install`이 성공적으로 완료되었는지 확인
