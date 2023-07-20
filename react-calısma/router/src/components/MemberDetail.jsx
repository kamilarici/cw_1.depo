import React from "react";
import { useParams } from "react-router-dom";
const MemberDetail = () => {
  //   const params = useParams();
  //   const memberId = params.memberid;
  const { memberid } = useParams();
  return <div>MemberDetail {memberid}</div>;
};

export default MemberDetail;
