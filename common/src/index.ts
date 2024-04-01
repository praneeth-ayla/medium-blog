import z from "zod";

export const signupInput = z.object({
	email: z.string().email(),
	password: z.string().min(6),
	name: z.string().optional(),
});

export const signinInput = z.object({
	email: z.string().email(),
	password: z.string().min(6),
});

export const blogCreateInput = z.object({
	title: z.string(),
	content: z.string(),
});

export const blogUpdateInput = z.object({
	title: z.string(),
	content: z.string(),
	id: z.string(),
});

export type SigninInput = z.infer<typeof signinInput>;
export type SignupInput = z.infer<typeof signupInput>;
export type BlogCreateInput = z.infer<typeof blogCreateInput>;
export type BlogUpdateInput = z.infer<typeof blogUpdateInput>;
