import {test,expect,request} from '@playwright/test'

let token_val=0;
let product_id=0;

test('@api Login To app', async () => {
const context1= await request.newContext()
const res=await context1.post("/api/ecom/auth/login",{data:{"userEmail":"achhu@gmail.com","userPassword":"Pass!1234"}})
const body = await res.json();
token_val = body.token;
//token_val=await res.json().token
console.log(token_val)
})

test('Get Order Details', async () => {

    const context1= await request.newContext()
    const res=await context1.get("/api/ecom/order/get-orders-details",
    {params:{"id":"69a7dbd9415d779f9b565915"},
    headers:{"Authorization":token_val,"content-type":"application/json"}
    })

    console.log("Status:", res.status());
    
    const body = await res.json();
    console.log(body);
    product_id=body.data.productOrderedId
    console.log(product_id)
    

})

test('@api Add item to cart', async () => {
    const testdata={"_id":"691597e15008f6a9091bf4c6","product":{"_id":"6960eae1c941646b7a8b3ed3","productName":"ADIDAS ORIGINAL","productCategory":"electronics","productSubCategory":"mobiles","productPrice":11500,"productDescription":"Apple phone","productImage":"https://rahulshettyacademy.com/api/ecom/uploads/productImage_1767959265156.jpg","productRating":"0","productTotalOrders":"0","productStatus":true,"productFor":"women","productAddedBy":"admin","__v":0}}
    const context1= await request.newContext()
    const res=await context1.post("api/ecom/user/add-to-cart",
    {
    headers:{"Authorization":token_val,"content-type":"application/json"},
    data:testdata
    })

    console.log("Status:", res.status());
    console.log(res.headers()['content-type']);
    const body = await res.json();
    await expect(body.message).toEqual('Product Added To Cart')


})

test('@api Order placed', async () => {
    const testdata={"orders":[{"country":"China","productOrderedId":"6960eae1c941646b7a8b3ed3"}]}
    const context1= await request.newContext()
    const res=await context1.post("api/ecom/order/create-order",
    {
    headers:{"Authorization":token_val,"content-type":"application/json"},
    data:testdata
    })

    console.log("Status:", res.status());
    console.log(res.headers()['content-type']);
    const body = await res.json();
     console.log(body.orders)
    await expect(body.message).toEqual('Order Placed Successfully')


})
