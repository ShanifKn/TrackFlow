import { ValidationError } from "@/core/interfaces/errors/error.interface";
import { ApiRoutes } from "@/core/routes/allApi.routes";
import axiosInstance from "@/lib/axiosSetup";
import { ApiError } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";
import { DOMAIN_URL } from "../../../config";

export type Data = {
  data?: any;

  error?: any;
};

async function getRequestConfigs(req: any, token: any) {
  let mappedUrl = ApiRoutes[req.url];

  // console.log("headers:",req)

  let queryString = "";

  if (req.query) {
    // Construct the query string from the query object

    queryString = Object.keys(req.query)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(req.query[key])}`)
      .join("&");

    // Append the query string to the URL if it's not empty

    if (queryString) {
      queryString = `?${queryString}`;
    }
  }

  let url = DOMAIN_URL + mappedUrl + (req.params ? "/" + req.params : "") + (req.id ? `/${req.id}` : "") + queryString;

  // Set authorization header with token
  const authCookie = token;

  return { url, method: req.method, authCookie, data: req.data };
}

async function handleError(error: any, res: any) {
  console.log(error.status);

  if (error?.response?.data?.errors) {
    return res.json(
      {
        error: await formulateValidationErrors(error.response.data.errors),
      },
      { status: 400 }
    );
  }

  return res.json(
    {
      error: [
        {
          statusCode: error?.response?.data?.errorCode || 500,

          message: error?.response.data.message || "Internal Server Error",
        },
      ],
    },
    { status: 400 }
  );
}

async function formulateValidationErrors(errors: ValidationError[]) {
  let validationErrors: ApiError[] = [];

  errors.forEach((error) => {
    validationErrors.push({
      statusCode: 422,

      message: error.msg,

      name: error.param,
    });
  });

  console.log(validationErrors);

  return validationErrors;
}

export async function POST(request: any) {
  const cookieHeader = request.cookies.get("token")?.value || "";

  const req = await request.json();

  const { url, method, data, authCookie } = await getRequestConfigs(req, cookieHeader);

  switch (method) {
    case "GET":
      try {
        const response = await axiosInstance.get(url, {
          headers: { [`x-auth-token`]: authCookie },
        });
        return NextResponse.json({ data: response.data });
      } catch (error: any) {
        return handleError(error, NextResponse);
      }

    case "POST":
      try {
        const response = await axiosInstance.post(url, data, { headers: { [`x-auth-token`]: authCookie } });
        return NextResponse.json({ data: response.data });
      } catch (error: any) {
        return handleError(error, NextResponse);
      }

    case "PATCH":
      try {
        const response = await axiosInstance.patch(url, data, {
          headers: { [`x-auth-token`]: authCookie },
        });

        return NextResponse.json({ data: response.data });
      } catch (error: any) {
        return handleError(error, NextResponse);
      }

    case "DELETE":
      try {
        const response = await axiosInstance.delete(url, { data, headers: { [`x-auth-token`]: authCookie } });

        return NextResponse.json({ data: response.data });
      } catch (error: any) {
        return handleError(error, NextResponse);
      }
  }

  return Response.json({ message: "Hello from Next.js!" });
}
