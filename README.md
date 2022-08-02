# ts-practice
echo "node_modules" > .gitignore

npm init -y
npm install typescript @types/node --save-dev
tsc --init
npm install webpack ts-loader @webpack-cli/generators
npx webpack-cli init

npm run build
npm run serve