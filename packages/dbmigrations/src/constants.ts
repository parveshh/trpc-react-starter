export const Tablenames = {
    USERS: "users",
} as const;
export type Tablenames = (typeof Tablenames)[keyof typeof Tablenames];
