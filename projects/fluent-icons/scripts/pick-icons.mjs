import { promises as fs, existsSync, mkdirSync } from 'fs'

const INPUT_DIRECTORY = `node_modules/@fluentui/svg-icons/icons/`
const OUTPUT_DIRECTORY = `projects/fluent-icons/icons/`

await fs.rm(OUTPUT_DIRECTORY, { recursive: true, force: true })

if (existsSync(OUTPUT_DIRECTORY) === false) mkdirSync(OUTPUT_DIRECTORY)

const paths = await fs.readdir(INPUT_DIRECTORY)

paths
  .filter((path) => path.includes(`_24_`))
  .forEach((path) => selectIcon(path))

async function selectIcon(svg) {
  const name = getName(svg)
  fs.copyFile(`${INPUT_DIRECTORY}${svg}`, `${OUTPUT_DIRECTORY}${name}`)
}

function getName(path) {
  path = path.replace(`.svg`, ``)

  const segments = path
    .split(`_`)
    .map((segment) => {
      if (segment === `24` || segment === `filled`) return ``
      else if (segment === `regular`) return `outline`

      return segment
    })
    .filter((segment) => segment !== ``)

  return `${segments.join(`-`)}.svg`
}
