@AGENTS.md

# My-App - Next.js + Supabase 全端應用

## 專案概述

這是一個基於 Next.js 16 (App Router) + TypeScript + Supabase 的現代化網頁應用，主要功能包含：

- 聯絡表單提交與儲存
- 作品/設計展示
- 程式碼片段展示
- 未來規劃：使用者行為追蹤

## 技術棧

| 類別      | 技術         | 版本                         |
| --------- | ------------ | ---------------------------- |
| 框架      | Next.js      | 16.2.4                       |
| UI 函式庫 | React        | 19.2.4                       |
| 語言      | TypeScript   | (從 tsconfig.json 判斷)      |
| 後端服務  | Supabase     | ^2.105.0                     |
| 樣式      | Tailwind CSS | (從 postcss.config.mjs 判斷) |
| 套件管理  | npm          | -                            |

## 專案結構

my-app/
├── .claude/ # Claude 相關配置
├── .next/ # Next.js 建置輸出 (自動生成，忽略)
├── node_modules/ # 相依套件 (忽略)
├── public/ # 靜態資源 (圖片、字型等)
├── src/ # 原始碼目錄
│ ├── app/ # Next.js App Router
│ │ ├── favicon.ico # 網站圖示
│ │ ├── globals.css # 全域樣式 (Tailwind 導入)
│ │ ├── layout.tsx # 根佈局 (所有頁面共用)
│ │ └── page.tsx # 首頁
│ ├── components/ # 可複用 React 元件
│ │ ├── codeSection.tsx # 程式碼區塊元件
│ │ ├── contactSection.tsx # 聯絡表單元件 (需要 Supabase 整合)
│ │ ├── designSection.tsx # 設計展示元件
│ │ └── nav.tsx # 導航列元件
│ └── lib/ # 工具函式與第三方服務配置
│ └── supabase.ts # Supabase 客戶端設定
├── .env.local # 環境變數 (本地/敏感資訊，不提交)
├── .gitignore # Git 忽略規則
├── AGENTS.md # AI Agent 相關說明
├── CLAUDE.md # 本檔案 (Claude AI 指引)
├── eslint.config.mjs # ESLint 設定
├── next-env.d.ts # Next.js TypeScript 型別定義
├── next.config.ts # Next.js 設定檔
├── package-lock.json # 相依套件鎖定版
├── package.json # 專案資訊與套件清單
├── postcss.config.mjs # PostCSS 設定 (Tailwind CSS)
├── README.md # 專案說明文件
└── tsconfig.json # TypeScript 編譯設定
