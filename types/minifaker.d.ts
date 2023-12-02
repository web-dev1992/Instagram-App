declare module "minifaker" {
    export function array(length: number, callback: (i: number) => any): any[];
    export function username(options?: { locale?: string }): string;
    export function email(options?: { domain?: string }): string;
    export function password(options?: { length?: number }): string;
    export function name(options?: { gender?: string }): string;
    export function address(options?: { country?: string }): string;
    export function jobTitle(options?: { title?: string }): string;
}
