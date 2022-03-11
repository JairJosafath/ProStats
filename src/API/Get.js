import * as queries from "../graphql/queries";
import { API } from "aws-amplify";

const AllLeagues = await API.graphql({
  query: queries.listLeagues,
});

console.log("all leagues", AllLeagues);
