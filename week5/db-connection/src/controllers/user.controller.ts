import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";

type createUserBody = {
  firstName: string;
  lastName: string;
};
// type updateUserbody = {
// 	id : number;
// 	firstName: string;
//   	lastName: string;

// }

const createUser = async (c: Context) => {
	try {
	  const body = await c.req.json<createUserBody>();
	  if (!body.firstName || !body.lastName)
		return c.json(
		  {
			success: false,
			data: null,
			msg: "Missing required fields",
		  },
		  400,
		);
	  if (await userModel.isDuplicate(body.firstName, body.lastName)) {
		return c.json({
		  success: false,
		  data: null,
		  msg: "firstName or lastName is duplicated",
		});
	  }
	  const newUser = await userModel.createUser(body.firstName, body.lastName);
	  return c.json({
		success: true,
		data: newUser,
		msg: "Created new User!",
	  });
	} catch (e) {
	  return c.json(
		{
		  success: false,
		  data: null,
		  msg: `${e}`,
		},
		500,
	  );
	}
  };
  
const alluser = async (c: Context) => {
	try {
		const user = await userModel.alluser();
		return c.json(user);
	} catch (e) {
		return c.json({
			success: false,
			data: null,
			msg: `${e}`,
		})
	}
}
const getTodouser = async (c: Context) => {
	try {
		const id = Number(c.req.param("id"));
		const todo = await userModel.getTodouser(id);
		return c.json(todo);
	} catch (e) {
		return c.json({
			success: false,
			data: null,
			msg: `${e}`,
		})
	}
}
const updateuser = async (c: Context) => {
	try {
		const {id, firstName, lastName } = await c.req.json();
		const user = await userModel.updateuser(id, firstName, lastName);
		return c.json(user);
	} catch (e) {
		return c.json({
			success: false,
			data: null,
			msg: `${e}`,
		})
	}
}
const deleteTodo = async (c: Context) => {
	try {
	  const id = Number(c.req.param("id"));
		const todo = await userModel.deleteTodo(id);
		return c.json(todo);
	}
	catch (e) {
		return c.json(
			{
				success: false,
				data: null,
				msg: `${e}`,
			},
			500
		);
	}
}
  
  
export { createUser,updateuser,getTodouser,alluser,deleteTodo }; 