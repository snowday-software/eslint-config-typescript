import type { Linter } from 'eslint';

type Configs = Linter.Config[];

declare module 'eslint-config-typescript' {
    export = Configs;
}
