import request, { gql } from "graphql-request";
const MASTER_URL = "https://us-west-2.cdn.hygraph.com/content/cm5o6yjf902r007w13joi3lfn/master"
export const getCarsList=async()=> {
  const query = gql`
    query MyQuery {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        updatedAt
        seats
        image {
            url
        }
        carType
        carBrand
      }
    }
  ;
`
  const result=await request(MASTER_URL,query);
  return result;
};


export const getStoreLocations=async()=>{
  const query=gql`
  query storeLocation {
  storesLocations {
    address
  }
}
`

  const result=await request(MASTER_URL,query);
  return result;
}

export const createBooking=async(formValue:any)=>{
  const mutationQuery=gql`
  mutation MyMutation {
  createBooking(
    data: {userName: "", 
      pickUpDate: "", 
      pickUpTime: "", 
      dropOffDate: "", 
      dropOffTime: "", 
      contactNumber: "", 
      carId: {connect: {id: ""}}}
  ) {
    id
  }
}
` 
  
  const result=await request(MASTER_URL,mutationQuery);
  return result;
}