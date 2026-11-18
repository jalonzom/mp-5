const ALLOWED_ALIAS_CHARACTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";
const MAX_ALIAS_LENGTH = 30;

export function validateUrl(input: string): string | null {
    if (!URL.canParse(input)) {
        return "Please enter a valid URL, including http:// or https://";
    }

    const url = new URL(input);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
        return "Only http:// and https:// links can be shortened";
    }
    if (!url.hostname.includes(".")) {
        return "Please enter a valid URL with a full domain name, like example.com";
    }
    return null;
}

export function validateAlias(alias: string): string | null {
    const aliasError = "Aliases can be up to 30 letters, numbers, dashes (-) or underscores (_)";

    if (alias.length === 0 || alias.length > MAX_ALIAS_LENGTH) {
        return aliasError;
    }
    for (const char of alias) {
        if (!ALLOWED_ALIAS_CHARACTERS.includes(char)) {
            return aliasError;
        }
    }
    return null;
}
