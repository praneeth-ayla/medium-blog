import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import {
	blogCreateInput,
	blogUpdateInput,
} from "@praneethaylalvl1/medium-common";

export const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_SECRET: string;
	};
	Variables: {
		userId: string;
	};
}>();

blogRouter.use("/*", async (c, next) => {
	const token = c.req.header("authorization") || "";

	try {
		const user = await verify(token, c.env.JWT_SECRET);
		if (user) {
			c.set("userId", user.id);
			await next();
		} else {
			c.status(403);
			return c.json({
				message: "You are not Authorized",
			});
		}
	} catch (error) {
		console.log("Error", error);
		c.status(400);
		return c.json({
			message: "Internal Server Error",
		});
	}
});

blogRouter.post("/", async (c) => {
	const body = await c.req.json();
	const { success } = blogCreateInput.safeParse(body);

	if (!success) {
		c.status(411);
		return c.json({
			message: "Invalid inputs",
		});
	}

	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	try {
		const blog = await prisma.post.create({
			data: {
				title: body.title,
				content: body.content,
				authorId: c.get("userId"),
			},
		});

		return c.json({
			message: "Blog created: " + blog.id,
		});
	} catch (error) {
		console.log("Error: ", error);
		c.status(403);
		return c.json({
			message: "Internal Server Error",
		});
	}
});

blogRouter.put("/", async (c) => {
	const body = await c.req.json();
	const { success } = blogUpdateInput.safeParse(body);
	if (!success) {
		c.status(411);
		return c.json({
			message: "Invalid inputs",
		});
	}

	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	try {
		const blog = await prisma.post.update({
			where: {
				id: body.id,
				authorId: c.get("userId"),
			},
			data: {
				title: body.title,
				content: body.content,
			},
		});

		return c.json({
			message: "Blog updated Successfully: " + blog.id,
		});
	} catch (error) {
		console.log("Error: ", error);
		c.status(403);
		return c.json({
			message: "Internal Server Error",
		});
	}
});

blogRouter.get("/bulk", async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	try {
		const blogs = await prisma.post.findMany({
			where: { authorId: c.get("userId") },
		});

		return c.json({
			blogs,
		});
	} catch (error) {
		console.log("Error: " + error);
		c.status(403);
		c.json({ message: "Internal Server Error" });
	}
	return c.json({
		msg: "/bulk ",
	});
});

blogRouter.get("/:id", async (c) => {
	const id = c.req.param("id");

	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	try {
		const blog = await prisma.post.findUnique({
			where: {
				id: id,
			},
		});
		return c.json({ blog });
	} catch (error) {
		console.log("Error: ", error);
		c.status(403);
		c.json({
			message: "Internal Server Error",
		});
	}
});
