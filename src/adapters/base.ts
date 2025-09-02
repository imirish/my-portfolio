import axios from "@/plugins/axios";
import { type Axios } from "axios";

export class BaseAdapter {
  _client: Axios;

  constructor() {
    if (this.constructor == BaseAdapter) {
      throw new Error("Abstract classes can't be instantiated.");
    }

    this._client = axios;
  }
}
