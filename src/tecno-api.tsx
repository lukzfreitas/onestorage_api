import axios from "axios";

// Anything exported from this file is importable by other in-browser modules.
export async function apiCompany(method: string, url: string, data: any) {
  const baseURL =
    "https://one-administrativo.azurewebsites.net/api/v1/empresa/";
  return await axios({
    method,
    baseURL,
    url,
    data,
  });
}

export async function apiAddressCompany(
  method: string,
  url: string,
  data: any
) {
  const baseURL =
    "https://one-administrativo.azurewebsites.net/api/v1/empresaEndereco/";
  return await axios({
    method,
    baseURL,
    url,
    data,
  });
}
