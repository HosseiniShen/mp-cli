/**
 * 打开指定项目
 * @param {*} projectPath
 */
export declare function open(projectPath: string | undefined, mode: boolean): Promise<void>;
/**
 * 关闭开发者工具
 * @param projectPath
 * @param mode
 * @param quit
 */
export declare function close(projectPath: string | undefined, mode: boolean, quit: boolean): Promise<void>;
//# sourceMappingURL=devtool.d.ts.map