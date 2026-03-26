export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "hello-world",
    title: "Hello World",
    date: "2026-03-26",
    description: "첫 번째 블로그 포스트입니다.",
    content: `
블로그를 시작합니다. 이 사이트는 Next.js와 Vercel을 사용하여 만들어졌습니다.

앞으로 다양한 주제에 대해 글을 작성할 예정입니다. 개발, 기술, 그리고 일상에 대한 이야기를 나누겠습니다.

읽어주셔서 감사합니다.
    `.trim(),
  },
  {
    slug: "nextjs-blog-setup",
    title: "Next.js로 블로그 만들기",
    date: "2026-03-25",
    description: "Next.js와 Vercel을 활용하여 간단한 블로그를 만드는 방법을 소개합니다.",
    content: `
Next.js는 React 기반의 풀스택 웹 프레임워크입니다. 서버 사이드 렌더링과 정적 사이트 생성을 지원하여 SEO에 유리합니다.

## 왜 Next.js인가?

- 서버 사이드 렌더링(SSR) 지원
- 정적 사이트 생성(SSG) 지원
- 파일 기반 라우팅
- Vercel을 통한 간편한 배포

## 시작하기

\`npx create-next-app@latest\` 명령어로 프로젝트를 생성하고, Vercel에 연결하면 자동으로 배포됩니다.
    `.trim(),
  },
  {
    slug: "web-development-in-2026",
    title: "2026년 웹 개발 트렌드",
    date: "2026-03-24",
    description: "2026년에 주목할 만한 웹 개발 트렌드를 정리합니다.",
    content: `
웹 개발 생태계는 빠르게 변화하고 있습니다. 2026년에 주목할 만한 트렌드를 살펴보겠습니다.

## 주요 트렌드

### 1. AI 기반 개발 도구
AI가 코드 작성과 디버깅을 돕는 도구가 일상화되었습니다.

### 2. Edge Computing
서버리스와 엣지 컴퓨팅이 더욱 보편화되어, 사용자에게 더 빠른 응답을 제공합니다.

### 3. Web Components
프레임워크에 독립적인 웹 컴포넌트가 점점 더 많이 활용되고 있습니다.

이러한 트렌드를 활용하여 더 나은 웹 경험을 만들어 나가길 바랍니다.
    `.trim(),
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
