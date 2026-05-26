# 🔗 마이링크 (MyLink) - 통합 레포지토리 (All-in-One Repo)

안녕하세요! 링크트리(Linktree) 클론 서비스인 **'마이링크(MyLink)'**의 기획 및 개발 소스 코드가 모여 있는 통합 저장소입니다. 

본 프로젝트는 이미지 로딩 및 보관 리소스를 일절 낭비하지 않는 **초경량 자동 이니셜 프로필 배지 기술**과 파이어베이스 **실시간 NoSQL Firestore 데이터베이스 동기화** 기술을 기반으로 완벽한 SaaS 제품 설계를 달성했습니다.

---

## 📂 레포지토리 폴더 구조 (Directory Layout)

이 저장소는 체계적인 기획서 관리와 개발 서비스 본체의 분리를 위해 아래와 같은 표준 구조를 채택했습니다.

```text
mylink/ (Root)
│
├── 📂 docs/                     # 📝 서비스 기획 및 제품 도면 폴더
│   ├── prd.md                  # - 제품 요구사항 정의서 (기능 필수/선택 정의)
│   ├── scenarios.md            # - 사용자 시나리오 (방문자 & 소유자 흐름)
│   └── wireframes.md           # - 와이어프레임 설계서 (아스키 뷰포트 도면)
│
├── 📂 my-profile/               # 💻 Next.js 16 + shadcn UI 서비스 본체 코드
│   ├── 📂 app/                 # - App Router 라우팅 (랜딩 페이지 & 대시보드)
│   ├── 📂 lib/                 # - Firebase Firestore & 공통 유틸 모듈
│   ├── 📂 components/          # - UI 구성요소 (shadcn UI, theme-provider)
│   ├── .env.local              # - [보안] 파이어베이스 자격 증명 (로컬 은닉)
│   └── README.md               # - 마이링크 실행 세부 가이드
│
└── LICENSE                      # 📜 오픈소스 MIT 라이선스
```

---

## 💻 로컬 구동 및 접속 방법 (Quick Start)

포트폴리오 랜딩 페이지 및 대시보드 관리판을 내 컴퓨터에서 직접 실시간으로 기동하고 테스트하는 빠른 방법입니다.

### 1. 프로젝트 폴더로 이동 및 패키지 다운로드
```bash
cd my-profile
npm install
```

### 2. 환경 변수 구성 (`my-profile/.env.local` 생성)
보안 자격증명 파일인 `.env.local`을 `my-profile` 폴더 내에 생성하고 아래의 파이어베이스 클라우드 설정을 입력해 저장합니다.
```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyBLbEtgSLIoIG9vYeRDb57Wct7UGfOQzU4
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=my-jm-link.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=my-jm-link
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=my-jm-link.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=688763844028
NEXT_PUBLIC_FIREBASE_APP_ID=1:688763844028:web:25d5097932e2c256e8a7b9
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-CW5G713D77
```

### 3. 개발 서버 기동 (Turbopack)
```bash
npm run dev
```

---

## 🌐 로컬 웹 브라우저 접속 주소

서버가 켜지면 브라우저 주소창에 아래의 주소를 입력하여 곧바로 마이링크의 강력한 실시간 기능을 체험할 수 있습니다.

* **공식 소개 랜딩 페이지 (Landing Page):**
  👉 [http://localhost:3000](http://localhost:3000)
  - 딥퍼플 네온 오로라 디자인 감성, 요금제 테이블 비교, FAQ 아코디언 탑재.
* **실시간 파이어베이스 대시보드 관리판 (Dashboard):**
  👉 [http://localhost:3000/dashboard](http://localhost:3000/dashboard)
  - 이름/소개 편집, 드래그 스왑 순서 재정렬, 4종 감성 프리셋 테마 변환, 실시간 모바일 폰 시뮬레이터 및 메시지 대기열 수신 모니터 탑재.

---

## 📜 커밋 및 이력 확인
모든 문서와 마이그레이션 이력은 깃허브 원격 코드 저장소에 성공적으로 안전하게 동기화되어 배포 가능 상태로 유지되고 있습니다.
- **깃허브 저장소:** [https://github.com/202010804/my-link](https://github.com/202010804/my-link)
