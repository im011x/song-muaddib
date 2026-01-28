# Node.js 설치 가이드

## Windows에서 Node.js 설치하기

### 방법 1: 공식 웹사이트에서 설치 (권장)

1. **Node.js 공식 사이트 방문**
   - https://nodejs.org/ 접속

2. **LTS 버전 다운로드**
   - "LTS" (Long Term Support) 버전 선택
   - Windows Installer (.msi) 다운로드
   - 예: `node-v20.x.x-x64.msi`

3. **설치 실행**
   - 다운로드한 .msi 파일 실행
   - 설치 마법사 따라가기 (기본 설정으로 진행 가능)
   - "Add to PATH" 옵션이 체크되어 있는지 확인

4. **설치 확인**
   - 터미널을 완전히 종료하고 다시 열기
   - 다음 명령어로 확인:
     ```bash
     node --version
     npm --version
     ```

### 방법 2: Chocolatey 사용 (선택사항)

Chocolatey가 설치되어 있다면:
```powershell
choco install nodejs-lts
```

### 방법 3: winget 사용 (Windows 10/11)

```powershell
winget install OpenJS.NodeJS.LTS
```

## 설치 후 확인

터미널에서 다음 명령어들이 정상 작동해야 합니다:

```bash
node --version   # v20.x.x 또는 v18.x.x 같은 버전 번호 표시
npm --version    # 9.x.x 또는 10.x.x 같은 버전 번호 표시
```

## 다음 단계

Node.js 설치가 완료되면 프로젝트 디렉토리에서:

```bash
npm install
```

이 명령어로 모든 프로젝트 의존성을 설치할 수 있습니다.
