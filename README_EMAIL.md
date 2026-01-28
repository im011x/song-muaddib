# 이메일 설정 가이드

## 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가하세요:

```env
# 수신 이메일 주소
CONTACT_EMAIL=sokee.help+muaddib@gmail.com

# SMTP 설정 (Gmail 예시)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## Gmail 설정 방법

### 1단계: Google 계정 2단계 인증 활성화

앱 비밀번호를 생성하려면 먼저 2단계 인증이 활성화되어 있어야 합니다.

1. **Google 계정 접속**
   - https://myaccount.google.com/ 접속
   - 또는 Gmail → 프로필 아이콘 → "Google 계정 관리" 클릭

2. **보안 메뉴로 이동**
   - 왼쪽 사이드바에서 "보안" 클릭
   - 또는 직접 https://myaccount.google.com/security 접속

3. **2단계 인증 활성화**
   - "Google에 로그인" 섹션에서 "2단계 인증" 찾기
   - "2단계 인증" 클릭
   - 화면 안내에 따라 2단계 인증 설정 완료
   - 전화번호 인증, Google Authenticator 앱 등으로 설정 가능

### 2단계: 앱 비밀번호 생성

2단계 인증이 활성화되면 앱 비밀번호를 생성할 수 있습니다.

1. **앱 비밀번호 페이지로 이동**
   - 방법 1: 보안 페이지에서 "앱 비밀번호" 검색
   - 방법 2: 직접 https://myaccount.google.com/apppasswords 접속
   - 방법 3: 보안 → 2단계 인증 → 페이지 하단의 "앱 비밀번호" 링크 클릭

2. **앱 비밀번호 생성**
   - "앱 선택" 드롭다운에서 "메일" 선택
   - "기기 선택" 드롭다운에서 "기타(맞춤 이름)" 선택
   - 이름 입력 (예: "SONG MUADDIB Website")
   - "생성" 버튼 클릭

3. **비밀번호 복사**
   - 생성된 16자리 비밀번호가 표시됩니다
   - 형식: `xxxx xxxx xxxx xxxx` (공백 포함)
   - **이 비밀번호는 한 번만 표시되므로 즉시 복사하세요!**
   - 복사 버튼을 클릭하거나 직접 선택하여 복사

4. **환경 변수에 설정**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=xxxxxxxxxxxxxxxx  # 앱 비밀번호 (공백 제거하여 입력)
   ```
   
   **중요**: 
   - 앱 비밀번호의 공백을 모두 제거하고 입력하세요
   - 예: `abcd efgh ijkl mnop` → `abcdefghijklmnop`
   - 일반 Gmail 비밀번호가 아닌 **앱 비밀번호**를 사용해야 합니다

### 3단계: 환경 변수 설정 확인

`.env.local` 파일에 다음과 같이 설정되어 있는지 확인하세요:

```env
# 수신 이메일 주소
CONTACT_EMAIL=sokee.help+muaddib@gmail.com

# SMTP 설정
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com  # 실제 Gmail 주소
SMTP_PASS=abcdefghijklmnop      # 앱 비밀번호 (공백 없이)
```

### 문제 해결

**앱 비밀번호가 보이지 않는 경우:**
- 2단계 인증이 활성화되어 있는지 확인
- Google Workspace 계정의 경우 관리자가 앱 비밀번호를 허용해야 할 수 있음
- 일부 계정은 보안 정책으로 인해 앱 비밀번호 사용이 제한될 수 있음

**이메일 전송 실패 시:**
- `SMTP_USER`에 전체 이메일 주소가 입력되어 있는지 확인
- `SMTP_PASS`에 공백이 없는지 확인
- 앱 비밀번호가 올바르게 복사되었는지 확인
- 방화벽이나 네트워크 설정으로 SMTP 포트(587 또는 465)가 차단되지 않았는지 확인
- 회사 메일 사용 시 IT 부서에 SMTP 서버 접근 권한이 있는지 확인
- 네이버 메일 사용 시 POP3/SMTP 설정이 활성화되어 있는지 확인

## 각 이메일 서비스별 포트 및 보안 설정

| 서비스 | SMTP Host | 포트 | 보안 | 비고 |
|--------|-----------|------|------|------|
| Gmail | smtp.gmail.com | 587 | TLS | 앱 비밀번호 필요 |
| 네이버 | smtp.naver.com | 587 | TLS | POP3/SMTP 설정 활성화 필요 |
| Outlook | smtp-mail.outlook.com | 587 | STARTTLS | 일반 비밀번호 사용 가능 |
| 회사 메일 | IT 부서 문의 | 587/465 | TLS/SSL | 회사 정책에 따라 다름 |
| Office 365 | smtp.office365.com | 587 | STARTTLS | 회사 계정 사용 가능 |

## 다른 이메일 서비스 사용

### 네이버 메일 (Naver Mail)

네이버 메일을 SMTP로 사용할 수 있습니다.

1. **네이버 메일 설정 확인**
   - 네이버 메일 웹사이트에 로그인
   - 환경 설정 → POP3/IMAP 설정에서 "POP3/SMTP 사용" 활성화

2. **환경 변수 설정**
   ```env
   SMTP_HOST=smtp.naver.com
   SMTP_PORT=587
   SMTP_USER=your-email@naver.com
   SMTP_PASS=your-naver-password
   ```

3. **보안 설정**
   - 네이버는 보안을 위해 "2단계 인증" 또는 "앱 비밀번호" 사용을 권장합니다
   - 네이버 계정 보안 설정에서 "앱 비밀번호" 생성 가능
   - 앱 비밀번호를 사용하는 경우 `SMTP_PASS`에 앱 비밀번호 입력

**참고**: 네이버 메일의 경우 일부 계정은 SMTP 사용이 제한될 수 있습니다.

### 회사 메일 (Corporate Email)

회사에서 제공하는 이메일 서버를 사용할 수 있습니다.

1. **IT 부서에 문의**
   - SMTP 서버 주소 (예: `smtp.company.com` 또는 `mail.company.com`)
   - SMTP 포트 번호 (일반적으로 587 또는 465)
   - 인증 방법 (일반 비밀번호 또는 앱 비밀번호)
   - SSL/TLS 사용 여부

2. **일반적인 회사 메일 설정**
   ```env
   SMTP_HOST=smtp.company.com
   SMTP_PORT=587
   SMTP_USER=your-email@company.com
   SMTP_PASS=your-password
   ```

3. **Microsoft Exchange 서버 사용 시**
   ```env
   SMTP_HOST=smtp.office365.com
   SMTP_PORT=587
   SMTP_USER=your-email@company.com
   SMTP_PASS=your-password
   ```

4. **보안이 강화된 회사 메일의 경우**
   - OAuth 2.0 인증이 필요한 경우 추가 설정이 필요할 수 있습니다
   - IT 부서에 SMTP 인증 방법을 문의하세요

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-username
SMTP_PASS=your-mailgun-password
```

## 테스트

문의 폼을 제출하면 `CONTACT_EMAIL`로 이메일이 전송됩니다.

## 주의사항

- `.env.local` 파일은 절대 Git에 커밋하지 마세요
- 프로덕션 환경에서는 보안이 강화된 이메일 서비스를 사용하세요
- 이메일 전송 실패 시 로그를 확인하세요
