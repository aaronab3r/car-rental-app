import request, { gql } from "graphql-request";

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
      }
    }
  `;

  const result = await request(
    "https://us-west-2.cdn.hygraph.com/content/cm5o6yjf902r007w13joi3lfn/master",
    query
  );
  return result;
};
