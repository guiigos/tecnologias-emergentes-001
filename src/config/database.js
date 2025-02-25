import { connect } from "mongoose";

const config = async (url) => {
  try {
    const connection = await connect(url);
    console.log(`Mongo DB is connected to ${connection.connection.host}`);
  } catch (err) {
    console.error(`An error ocurred ${err}`);
  }
}

export default {
  config
};
