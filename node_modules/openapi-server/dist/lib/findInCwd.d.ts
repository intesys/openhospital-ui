/**
 * Searches for files in current working directory, returns the first file found.
 * String returned is the full file path
 *
 * @param files string[]
 * @returns string | undefined full path to file
 */
export declare const findFileInCwd: (files: string | string[]) => string | undefined;
export declare const findDirInCwd: (dir: string) => string | undefined;
