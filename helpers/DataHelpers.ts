import * as fs from 'fs';

export function getTasksFromJson(path: string, key: string): string[]{
    const data = fs.readFileSync(path, "utf8");
    const json = JSON.parse(data);
    return json[key];
}