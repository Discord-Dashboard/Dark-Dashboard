declare module "dbd-dark-dashboard" {
    import { Express } from "express";

    export default function (themeConfig: Record<string, any>): {
        themeCodename: string,
        viewsPath: string,
        staticPath: string,
        themeConfig: Record<string, any>,
        embedBuilderComponent: string,
        init: (app: Express, config: Record<string, any>) => void;
    }
}