import bcrypt from "bcrypt";
import {
  addToDbPromise,
  getCredsPromise,
  getPorfilePromise,
} from "../Services/AuthService.js";

// SignUp function
export const clientSignup = async (req, res) => {
  //   console.log("==========Inside Thingy=================");
  const newUser = req.body;
  //   console.log("==========newUser=================", newUser);
  try {
    const [err1, result1] = await getCredsPromise(
      newUser.persona,
      newUser.email
    );
    // console.log("================err1==============", err1);
    // console.log("================result1==============", result1);

    if (err1) {
      res.status(400).json({ msg: "Unable to fetch data from database." });
      return;
    }

    if (result1.length > 0) {
      res.status(204).json({ msg: "Account Already Exists" });
      return;
    }

    let hash = bcrypt.hashSync(newUser.password, 10);

    const [err2, result2] = await addToDbPromise(
      newUser.name,
      newUser.contact_no,
      newUser.gender,
      newUser.email,
      newUser.address,
      hash,
      newUser.persona
    );
    // console.log("================err2==============", err2);
    // console.log("================result2==============", result2);
    if (err2) {
      res.status(400).json({ msg: "Unable to add credentials to database." });
      return;
    }

    const [err3, result3] = await getPorfilePromise(
      newUser.persona,
      result2.insertId
    );
    // console.log("================result3==============", result3);
    // console.log("================err3==============", err3);

    if (err3) {
      res
        .status(400)
        .json({ msg: "Unable to fetch updated data from database." });
      return;
    }

    res.status(200).json(result3);
  } catch (error) {
    // console.log("================error==============", error);
    res.status(400).json({ msg: "Unable to resiter new user." });
  }
};

// SignIn function
export const SignIn = async (req, res) => {
  try {
    const userEmail = req.body.email;
    const userPass = req.body.password;
    const persona = req.body.persona;
    const [err1, result1] = await getUserDetailsPromise(userEmail);
    if (result1) {
      var retPassword = "";
      if (persona === 0) {
        retPassword = result1.owner_pwd;
      } else if (persona === 1) {
        retPassword = result1.emp_password;
      } else if (persona === 2) {
        retPassword = result1.cus_password;
      }
    }
    if (err1) {
      res.status(400).json({ msg: "Unable to fetch data from database" });
    } else if (result1.length === 0) {
      res.status(404).json(result1);
    } else if (bcrypt.compareSync(userPass, result1[0].password)) {
      delete result1[0].password;
      res.status(200).json({ result: result1[0], accessToken: accessToken }); // this part
    } else {
      res.status(401).json({ msg: "Invalid Password" });
    }
  } catch (error) {
    res.status(400).json("Unable to login");
  }
};
