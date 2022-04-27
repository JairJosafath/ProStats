import { Button, Dropdown, FlexboxGrid, IconButton, List } from "rsuite";
import { MdModeEdit, MdDelete, MdExitToApp } from "react-icons/md";
import { useState } from "react";
import ListItemCustom from "../ListCustom";

const PlayerList = ({
  team,
  setUpdateTeam,
  setDeleteTeamMember,
  league,
  setUpdateLeague,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [role, setRole] = useState(false);
  return (
    <>
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={10}>Name</FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={5}>Role</FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={1}></FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={1}></FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={1}></FlexboxGrid.Item>
      </FlexboxGrid>
      <List style={{ height: 600 }}>
        {team?.teamMemberships?.items.map((member) => (
          <ListItemCustom>
            <FlexboxGrid
              justify="space-between"
              style={{ margin: 5, maxWidth: 600 }}
            >
              <FlexboxGrid.Item colspan={10}>
                {member.player.name}
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={5}>
                {member.id === editMode ? (
                  <Dropdown
                    title={
                      role && role.id === member.id ? role.role : "choose role"
                    }
                  >
                    <Dropdown.Item
                      onClick={() => {
                        setRole({ id: member.id, role: "member" });
                      }}
                    >
                      member
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setRole({ id: member.id, role: "moderator" });
                      }}
                    >
                      moderator
                    </Dropdown.Item>
                  </Dropdown>
                ) : team?.moderators?.includes(member.player.username) ? (
                  "Moderator"
                ) : (
                  "Member"
                )}
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={1}></FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={1}>
                {member.id === editMode ? (
                  <Button
                    size="xs"
                    onClick={() => {
                      // console.log(member.player.username);
                      console.log("role", role);

                      if (
                        (role.role === "moderator" &&
                          !team.moderators?.includes(member.player.username)) ||
                        team.moderators.length === 0
                      ) {
                        const mods = [
                          ...(team.moderators ? team.moderators : []),
                          member.player.username ? member.player.username : [],
                        ];
                        if (mods) {
                          setUpdateTeam({ id: team.id, moderators: mods });
                          if (league)
                            setUpdateLeague({
                              id: league.id,
                              moderatornames: mods,
                            });
                        }
                      } else if (
                        role.role === "member" &&
                        team.moderators.includes(member.player.username)
                      ) {
                        const mods = team.moderators.filter(
                          (mod) => mod !== member.player.username
                        );
                        console.log("filter", mods);

                        setUpdateTeam({ id: team.id, moderators: mods });
                        if (league)
                          setUpdateLeague({
                            id: league.id,
                            moderatornames: mods,
                          });
                      }

                      setEditMode(false);
                      setRole(false);
                    }}
                  >
                    Save
                  </Button>
                ) : (
                  <IconButton
                    appearance="subtle"
                    color="blue"
                    size={"xs"}
                    icon={<MdModeEdit size={"1.8em"} />}
                    onClick={() => {
                      console.log("edit");
                      setEditMode(member.id);
                    }}
                  />
                )}
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={1}>
                {member.id === editMode ? (
                  <Button
                    size="xs"
                    onClick={() => {
                      setEditMode(false);
                      setRole(false);
                    }}
                  >
                    Cancel
                  </Button>
                ) : (
                  <IconButton
                    appearance="subtle"
                    color="red"
                    size={"xs"}
                    icon={<MdDelete size={"1.8em"} />}
                    onClick={() => {
                      console.log("remove");
                      setDeleteTeamMember({ id: member.id });
                    }}
                  />
                )}
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </ListItemCustom>
        ))}
      </List>
    </>
  );
};

export default PlayerList;
