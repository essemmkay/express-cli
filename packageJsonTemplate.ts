const packageJsonTemplate = (appName: string) => `
{
  "name": "${appName}",
  "version": "1.0.0",
  "description": "",
  "main": "dist/index.js",
  "scripts": {
    "dev": "npx nodemon",
    "build": "npx tsc",
    "start": "node dist/index.js",
    "lint": "eslint . --ext .ts",
    "format": "prettier --config .prettierrc 'src/**/*.ts' --write",
    "precommit": "lint-staged"
  },
  "author": "Syed Murtaz Haider <essemmkay>",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "ts-node": "^10.9.1",
    "typescript": "^5.0.4",
    "@types/express": "^4.17.17",
    "@typescript-eslint/eslint-plugin": "^5.58.0",
    "@typescript-eslint/parser": "^5.58.0",
    "eslint": "^8.38.0",
    "eslint-config-prettier": "^8.8.0",
    "eslint-plugin-no-loops": "^0.3.0",
    "eslint-plugin-prettier": "^4.2.1",
    "husky": "^8.0.3",
    "lint-staged": "^13.2.1",
    "nodemon": "^2.0.22",
    "onchange": "^7.1.0",
    "prettier": "^2.8.7"
  },
  "lint-staged": {
    "src/**/*.ts": [
      "npm run lint",
      "npm run format",
      "git add"
    ]
  }
}
`

export default packageJsonTemplate