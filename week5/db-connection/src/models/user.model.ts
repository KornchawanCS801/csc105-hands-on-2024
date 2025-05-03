import { db } from "../index.ts";

const isDuplicate = async( firstName: string, lastName: string ) => {
    const user = await db.user.findFirst({
        where: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}

const createUser = async( firstName: string, lastName: string ) => {
    const user = await db.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}

const alluser = async () => {
    const user = await db.user.findMany();
    return user;
}

const getTodouser = (userId: number) => {
    const todo = db.todo.findMany({
        where: {
            userId: userId
        }
    })
    return todo;
}

const updateuser = (id:number, firstName: string, lastName: string) => {
    const user = db.user.update({
        where: {
            id: id,
        },
        data: {
            firstName: firstName,
            lastName: lastName
        }
    })
    return user;
}
const deleteTodo = async (id: number) => {
    const todo = await db.user.delete({
      where: {
        id: id,
      },
    });
    return todo;
  };

export { isDuplicate,createUser,alluser,updateuser,getTodouser,deleteTodo};