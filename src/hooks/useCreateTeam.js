import { useState, useEffect } from "react";
import { API } from "aws-amplify";

const createTeamQuery = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      name
      logo
      slogan
    }
  }
`;

const useCreateTeam = (team, create) => {
  const [loadingCreateTeam, setLoadingCreateTeam] = useState(true);
  const [errorCreateTeam, setErrorCreateTeam] = useState(false);
  const [createdTeam, setCreatedTeam] = useState();

  const mutate = async () => {
    console.log("creating team");

    const { data } = await API.graphql({
      query: createTeamQuery,
      variables: {
        name: team.name,
        logo: team.logo,
        slogan: team.slogan,
      },
    }).catch((err) => {
      console.log(err);
      setErrorCreateTeam(true);
    });
    console.log("created team", data);
    setCreatedTeam(data.CreateTeam);
    setLoadingCreateTeam(false);
  };
  console.log("hcejcjing", team);
  useEffect(() => {
    if (team.name !== "") {
      return [null, false, false];
    }
    mutate();
  }, [create]);
  return [createdTeam, loadingCreateTeam, errorCreateTeam];
};

export default useCreateTeam;
