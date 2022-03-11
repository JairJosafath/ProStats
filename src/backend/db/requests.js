const requests = [
  {
    id: 1,
    from: "team",
    requester: "FCB",
    to: "player",
    responder: "Leo",
    status: "pending",
  },
  {
    id: 2,
    from: "player",
    requester: "Cr",
    to: "team",
    responder: "RMD",
    status: "rejected",
  },
  {
    id: 3,
    from: "team",
    requester: "FCB",
    to: "league",
    responder: "Super",
    status: "accepted",
  },
  {
    id: 4,
    from: "league",
    requester: "PL",
    to: "team",
    responder: "RMD",
    status: "pending",
  },
];

export default requests;
