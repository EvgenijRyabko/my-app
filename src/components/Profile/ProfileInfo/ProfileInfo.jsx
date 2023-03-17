import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <section>
      <div className={classes["profile-header"]}>
        <img
          alt="none"
          src="https://psv4.userapi.com/c237331/u42036175/docs/d57/acc18c0e20cd/cover2798.jpg?extra=rMHiGk0Cx5LlLY4nrjb5cxhKBfaar-VNDsd5XYnsDrYZ3Oz4Zz_OR7g4Hv-RQNgxO4QHybKKTRSBo1Y4BpWX-YXM7O5tUTn4Uu-utxB_HzpAoW1uNria4xMioLkIgfzKM1J7GhR04rC65Fr8YiwChmYx"
        />
      </div>
      <div className={classes["user-info"]}>
        <div>
          <img id="avatar" src="" alt="none" />
        </div>
        <h1>Username</h1>
      </div>
    </section>
  );
};

export default ProfileInfo;
