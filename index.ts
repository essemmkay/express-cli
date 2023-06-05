#!/usr/bin/env node
import { execSync } from 'child_process';
import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

import packageJsonTemplate from './packageJsonTemplate'
import tsconfigJsonTemplate from './tsconfigJsonTemplate'
import srcIndexTemplate from './srcIndexTemplate'
import nodemonTemplate from './nodemonTemplate'
import eslintTemplate from './eslintTemplate'
import eslintIgnoreTemplate from './eslintIgnoreTemplate';
import prettierTemplate from './prettierrcTemplate';
import gitIgnoreTemplate from './gitIgnoreTemplate'

const createExpressApp = (appName: string) => {
  console.log(`Creating Express app: ${appName}`);

  try {
    const appDirectory = join(process.cwd(), appName);

    // Create the app directory
    mkdirSync(appDirectory);

    // Create package.json
    writeFileSync(join(appDirectory, 'package.json'), packageJsonTemplate(appName).trim());

    // Create tsconfig.json
    writeFileSync(join(appDirectory, 'tsconfig.json'), tsconfigJsonTemplate.trim());

    // Create nodemon file
    writeFileSync(join(appDirectory, 'nodemon.json'), nodemonTemplate.trim());

    // Create eslint file
    writeFileSync(join(appDirectory, '.eslintrc'), eslintTemplate.trim());

    // Create eslintignore file
    writeFileSync(join(appDirectory, '.eslintignore'), eslintIgnoreTemplate.trim());

    // Create prettier file
    writeFileSync(join(appDirectory, '.prettierrc'), prettierTemplate.trim());

    writeFileSync(join(appDirectory, '.gitignore'), gitIgnoreTemplate.trim())

    // Create src directory
    mkdirSync(join(appDirectory, 'src'));

    // Create index.ts
    writeFileSync(join(appDirectory, 'src', 'index.ts'), srcIndexTemplate.trimStart());

    // Install dependencies
    execSync(`cd ${appName} && npm install`, { stdio: 'inherit' });

    execSync(`cd ${appName} && git init`);
    
    execSync(`cd ${appName} && npx husky install`);
  } catch (error) {
    console.error('Error creating Express app:', error);
    process.exit(1);
  }

  console.log('Express app created successfully!');
};

const [appName] = process.argv.slice(2);

if (!appName) {
  console.error('Please provide an app name.');
  process.exit(1);
}

createExpressApp(appName);