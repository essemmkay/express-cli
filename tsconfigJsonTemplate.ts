const tsconfigJsonTemplate = `
{
  "compilerOptions": {
    "target": "es2016",
    "lib": ["es6", "dom"],
    "module": "commonjs",
    "rootDir": "src",
    "resolveJsonModule": true,
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
`

export default tsconfigJsonTemplate