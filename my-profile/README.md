# 🔗 마이링크 (MyLink) - 로컬 실행 가이드 (Local Guide)

본 프로젝트는 링크트리(Linktree) 클론 서비스인 **'마이링크(MyLink)'**의 웹 어플리케이션 소스 코드입니다. Next.js 16 (App Router), Tailwind CSS v4, shadcn UI, Base UI, 그리고 파이어베이스 실시간 NoSQL Firestore 데이터베이스를 장착하여 빌드되었습니다.

이 가이드를 따라 로컬 개발 환경에서 프로젝트를 실행하고 실시간 웹 대시보드와 랜딩 페이지를 직접 연동해 보실 수 있습니다.

---

## 🚀 로컬 접속 및 실행 방법 (How to Run Locally)

### 1단계: 프로젝트 경로 이동
터미널을 열고 `my-profile` 폴더 경로로 이동합니다.
```bash
cd my-profile
```

### 2단계: 의존성 패키지 설치
프로젝트 구동에 필요한 라이브러리(Next.js, Tailwind, Firebase 등)를 설치합니다.
```bash
npm install
```

### 3단계: 환경 변수 구성 (`.env.local`)
`my-profile` 루트 폴더 내에 `.env.local` 파일을 생성하고 본인의 파이어베이스 자격 증명 정보를 기입합니다.

```env
# my-profile/.env.local
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=YOUR_FIREBASE_MEASUREMENT_ID
```


### 4단계: 개발 서버 기동 (Turbopack)
Next.js의 초고속 증분 컴파일러인 Turbopack 환경의 로컬 개발 서버를 기동합니다.
```bash
npm run dev
```

---

## 🌐 로컬 웹 브라우저 접속 주소

서버 기동이 완료되면 웹 브라우저를 열고 아래 링크를 통해 실시간 페이지에 액세스하실 수 있습니다.

- **공식 마케팅 랜딩 페이지 (Landing Page):**
  👉 [http://localhost:3000](http://localhost:3000)
  - 마이링크 서비스의 주요 강점 소개, 요금제 테이블 비교, 인터랙티브 아코디언 FAQ 수록.

- **실시간 파이어베이스 대시보드 관리판 (Dashboard):**
  👉 [http://localhost:3000/dashboard](http://localhost:3000/dashboard)
  - 이름/소개글 수정 실시간 반영, 링크 추가/편집/삭제 및 **상하 화살표 드래그 정렬**, 4종 감성 테마 실시간 토글, 폰 목업 내 방문자 시뮬레이션 메시지 실시간 큐잉 수신.

---

## 🛠️ 주요 스크립트 명령어 (Available Scripts)

- **`npm run dev`**: 로컬 개발 서버 기동 (포트 3000)
- **`npm run build`**: 배포 최적화용 프로덕션 컴파일 및 정적 페이지 미리 렌더링 빌드
- **`npm run start`**: 프로덕션 빌드 완료본 로컬 운영 시작
- **`npm run lint`**: ESLint 기반 정적 코드 스타일 및 오류 진단
- **`npm run format`**: Prettier를 통한 코드 자동 줄바꿈 및 포맷팅 정돈
