#!/usr/bin/env node

import program from 'commander'
import { open, close } from './lib/devtool'

program
  .version('1.0.0', '-V, --version')
  .command('open [project]')
  .option('-D, --dev', 'run in development mode')
  .description('Start wechat devtool')
  .action((project: string | undefined, options) => {
    open(project, options.dev)
  })

program
  .command('close [project]')
  .option('-D, --dev', 'close in development mode')
  .option('-Q, --quit', 'close devtools')
  .description('Close devtool with option')
  .action((project, { dev, quit }) => {
    close(project, dev, quit)
  })
  
program.parse()
