import {Hono} from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import {signUpInput,signInInput} from '@arnavsinghal0906/medium-common'
export const userRouter = new Hono<{
    Bindings:{
      DATABASE_URL:string,
      JWT_SECRET:string
    }
  }>()

  interface signupBody{
    name:string,
    username:string,
    password:string
  }

userRouter.post("/signup",async (c)=>{
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
  
    const body : signupBody = await c.req.json()
    //Zod Validation
    if(!signUpInput.safeParse(body).success){
      c.status(400)
      return c.json({
        msg:"Enter credentials in correct format"
      })
    }
    //Checking for unique user
    const uniqueUserResult = await prisma.user.findUnique({
      where:{
        username:body.username
      }
    })
  
    if (uniqueUserResult){
      return c.json({
        msg: "Enter a unique username"
      })
    }
  
    //Zod schema validation
  
    // Encrypting the password and creating the user
  
    const createUserResult = await prisma.user.create({
      data : body
    }) 
  
    if(!createUserResult){
      c.status(500)
      return c.json({
        msg: "User creation failed "
      });
    }
    
    c.status(200)
    return c.json({
      msg: "User created succesfully",
      token : await sign({userId:createUserResult.id},c.env.JWT_SECRET)
    });
  })
  
  
userRouter.post("/signin", async (c)=>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json()
  
    if(!signInInput.safeParse(body).success){
      c.status(400)
      return c.json({
        msg:"Enter credentials in correct format"
      })
    }

    const findUser = await prisma.user.findFirst({
      where:{
        username:body.username,
        password:body.password
      }
    })
    if (!findUser){
      c.status(400)
      return c.json({
        msg:"Invalid credentials"
      })
    }
    c.status(200)
    return c.json({
      msg:"User signed in succesfully",
      token : await sign({userId:findUser.id},c.env.JWT_SECRET)
    })
  })