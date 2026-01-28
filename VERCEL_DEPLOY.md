# Vercel 배포 가이드

이 문서는 GitHub에 올려진 Next.js 프로젝트를 Vercel을 통해 배포하는 방법을 안내합니다.

## 사전 준비사항

1. **GitHub 저장소 확인**
   - 프로젝트가 GitHub에 푸시되어 있어야 합니다
   - 저장소 URL을 확인해두세요

2. **Vercel 계정 생성**
   - [Vercel](https://vercel.com)에 가입하거나 로그인하세요
   - GitHub 계정으로 연동하는 것을 권장합니다

## 배포 단계

### 1단계: Vercel 프로젝트 생성

1. [Vercel 대시보드](https://vercel.com/dashboard)에 로그인
2. **"Add New..."** → **"Project"** 클릭
3. GitHub 저장소 목록에서 프로젝트 선택
4. **"Import"** 클릭

### 2단계: 프로젝트 설정

Vercel이 자동으로 Next.js 프로젝트를 감지합니다. 다음 설정을 확인하세요:

- **Framework Preset**: Next.js (자동 감지됨)
- **Root Directory**: `./` (기본값)
- **Build Command**: `npm run build` (기본값)
- **Output Directory**: `.next` (기본값)
- **Install Command**: `npm install` (기본값)

### 3단계: 환경 변수 설정

`.env.local` 파일에 있는 환경 변수들을 Vercel에 추가해야 합니다:

1. 프로젝트 설정 페이지에서 **"Environment Variables"** 섹션으로 이동
2. 다음 환경 변수들을 추가하세요:

```
CONTACT_EMAIL=sokee.help+muaddib@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=benny.song.011@gmail.com
SMTP_PASS=vnht legr eqrv olik
```

**중요**: 
- 각 환경 변수를 개별적으로 추가하세요
- **Environment**는 **Production**, **Preview**, **Development** 모두 선택하세요
- `SMTP_PASS`는 Gmail 앱 비밀번호입니다 (보안상 중요)

### 4단계: 배포 실행

1. 모든 설정이 완료되면 **"Deploy"** 버튼 클릭
2. 배포가 진행되는 동안 빌드 로그를 확인할 수 있습니다
3. 배포가 완료되면 Vercel이 자동으로 URL을 생성합니다 (예: `your-project.vercel.app`)

## 배포 후 확인사항

### 1. 도메인 확인
- 배포 완료 후 제공되는 Vercel URL로 접속하여 사이트가 정상 작동하는지 확인
- 커스텀 도메인을 사용하려면 **Settings** → **Domains**에서 추가 가능

### 2. 환경 변수 확인
- 배포된 사이트에서 이메일 전송 기능이 정상 작동하는지 테스트
- 문제가 있다면 환경 변수가 제대로 설정되었는지 확인

### 3. 자동 배포 설정
- GitHub에 코드를 푸시하면 자동으로 재배포됩니다
- `main` 브랜치에 푸시하면 Production 환경에 배포
- 다른 브랜치에 푸시하면 Preview 환경에 배포

## 문제 해결

### 빌드 에러가 발생하는 경우
1. **빌드 로그 확인**: Vercel 대시보드에서 상세한 에러 메시지 확인
2. **로컬 빌드 테스트**: `npm run build` 명령어로 로컬에서 빌드가 성공하는지 확인
3. **의존성 확인**: `package.json`의 모든 의존성이 올바른지 확인

### 환경 변수 관련 문제
1. **환경 변수 이름 확인**: 대소문자와 언더스코어가 정확한지 확인
2. **재배포**: 환경 변수를 추가/수정한 후에는 재배포가 필요합니다
3. **Gmail SMTP 설정**: Gmail 앱 비밀번호가 올바른지 확인

### 이미지 도메인 문제
- `next.config.js`에 이미지 도메인 설정이 되어 있지만, 필요시 Vercel 설정에서도 확인

## 추가 설정 (선택사항)

### 커스텀 도메인 연결
1. **Settings** → **Domains**로 이동
2. 도메인 이름 입력
3. DNS 설정 안내에 따라 도메인 제공업체에서 DNS 레코드 추가

### 환경별 설정
- Production: 메인 도메인
- Preview: 각 브랜치/PR별 미리보기 URL
- Development: 개발 환경 (로컬 개발 권장)

## 참고사항

- Vercel은 Next.js를 완벽하게 지원하며, 자동으로 최적화를 수행합니다
- 무료 플랜에서도 충분히 사용 가능합니다
- `.env.local` 파일은 Git에 커밋되지 않으므로, Vercel에서 환경 변수를 직접 설정해야 합니다
- Gmail SMTP를 사용하는 경우, "보안 수준이 낮은 앱 액세스"를 활성화하거나 앱 비밀번호를 사용해야 합니다
