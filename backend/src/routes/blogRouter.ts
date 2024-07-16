import {Hono} from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import { createBlogInput,updateBlogInput } from '@arnavsinghal0906/medium-common'
export const blogRouter = new Hono<{
    Bindings:{
      DATABASE_URL:string,
      JWT_SECRET:string
    }
    Variables:{
      userId:number
    }
  }>()

  blogRouter.use('/*', async (c, next) => {
    const authHeader = c.req.header('authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      c.status(400);
      return c.json({
        msg: 'Token status err 1'
      });
    }
  
    const token = authHeader.split(' ')[1];
  
    try {
      const user = await verify(token, c.env.JWT_SECRET) as {userId:string};
      c.set('userId', Number(user.userId));
      await next();
    } 
    catch (err) {
      c.status(411);
      return c.json({
        msg: 'Token status err 2'
      });
    }
  }); 

blogRouter.post("/post", async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL
  }).$extends(withAccelerate())

  const authorId = c.get('userId')
  const body = await c.req.json()
  if(!createBlogInput.safeParse(body).success){
    c.status(400)
    return c.json({
      msg:"Enter the content in correct format"
    })
  }
  try{
    const blog = await prisma.blog.create({
      data:{
        title:body.title,
        content:body.content,
        authorId:authorId,
        published:true
    }})
    return c.json({
      id:blog.id
    })
  }catch(err){
    return c.json({msg:"Error while creating the blog"})
  }
  
})

blogRouter.put("/post", async(c)=>{
  const prisma =  new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate())
  const body = await c.req.json()

  if(!updateBlogInput.safeParse(body).success){
    c.status(400)
    return c.json({
      msg:"Enter the content in correct format"
    })
  }
  try{
      const blog = await prisma.blog.update({
          where : {
            id:body.id
          },
          data: {
            title :body.title,
            content: body.content
          }
        })
        return c.json({
          id:blog.id
        })
  }catch(e){
    c.status(411)
    return c.json({
      msg: "Error while updating"
    })
  }
})

blogRouter.get("/bulk",async (c)=>{

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())
  
  try{
    const blogs = await prisma.blog.findMany({
      select:{
        content:true,
        title:true,
        id:true,
        author:{
          select:{
            name:true
          }
        }
      }
    })
    return c.json({
      blogs
    })
  }
  catch(err){
    return c.json({
      msg:"Error while fetching"
    })
  }
})

blogRouter.get("/:id", async (c)=>{
  const id =c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL
  }).$extends(withAccelerate())

  try{
    const blog = await prisma.blog.findFirst({
      where:{
        id:Number(id)
      },
      select:{
        title:true,
        content:true,
        id:true,
        author:{
          select:{
            name:true
          }
        }
      }
    })
    return c.json({
      blog
    })
  }catch(e){
    c.status(411)
    return c.json({
      msg: "Error while fetching blog post"
    })
  }
})

//add pagination



