import type { ApiResponse } from "@/types/Response";
import { BaseAdapter } from "./base";

class FormsAdapterError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "FormsAdapterError";
  }
}

class FormsAdapter extends BaseAdapter {
  FORMSPREE_URL = "https://formspree.io/f/mnnbzebd";

  async submitForm(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<ApiResponse> {
    try {
      const response = await fetch(this.FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      return {
        success: response.ok,
        data: response.ok ? await response.json() : false,
        errors: response.ok ? [] : ["Failed to submit form"],
      };
    } catch (error) {
      throw new FormsAdapterError("Failed to submit form");
    }
  }
}

export default new FormsAdapter();
