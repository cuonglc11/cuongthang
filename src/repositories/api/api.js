import createApi from "./config";

const getData = async () => {
  let user = {}
  try {
     const response  =await createApi().get('posts/1')
     if(response.status === 200) {
      // TODO: // Handle success
      // console.log(response.data)
      user.body = response.data.body
      user.id = response.data.id
      user.title  = response.data.userId
      }
    } catch (error) {
     console.error(error);
  }
    return user  
};

const putData = async (user , password) => {
    const  data = [
      {
        "title": user,
        "body":password,
        "id": 1
      }
    ]
    const res = await createApi().put('posts/1', data)
    if(res.status === 200){
      console.log(res)
    }
  }


const postData = async (body , title , userId) =>{
  const dataInPost = [
      {
        "title": title,
        "body": body,
        "userId": userId,
        "id": 1
      }
  ]
  const res = await createApi().post('posts', dataInPost)
  // console.log(res)
  let datauser = {}
  if(res.status === 201){
    // console.log(res.data)
    datauser.body =  res.data[0].body
    datauser.title = res.data[0].title
    
  }
    // console.log("cuong"+datauser.title)
  // console.log("gek")
  return datauser
}    
export default {
    getData,putData , postData
}
