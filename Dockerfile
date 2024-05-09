# 현재 노드 버전
FROM node:22.0.0-alpine

# 디렉토리 지정
WORKDIR /src/app

# 의존성 설치를 위해 package.json 복사
COPY package.json ./

# 의존성 설치
RUN npm install

# 필요한 모든 파일을 복사
COPY . .

# next.js 앱 빌드
RUN npm run build

# 컨테이너 포트 3000  설정
EXPOSE 3000

# 애플리케이션 실행
CMD ["npm", "run", "dev"]
