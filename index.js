import { server } from "./dist/esm/index.js";

async function main() {
  const expected = {
    challenge: "2109de8f-6b3e-446c-a269-b48151812f83",
    origin: "http://localhost:3001",
  };

  const authentication = {
    credentialId: 'I5zYtpdZvGrIwg1uVMHIAqA6TKKHEIhftV7RXxBjGf8',
    authenticatorData: 'SZYN5YgOjGh0NBcPZHZgW4_krrmihjLHmVzzuoMdl2MFAAAAAA==',
    clientData: 'eyJ0eXBlIjoid2ViYXV0aG4uZ2V0IiwiY2hhbGxlbmdlIjoiMjEwOWRlOGYtNmIzZS00NDZjLWEyNjktYjQ4MTUxODEyZjgzIiwib3JpZ2luIjoiaHR0cDovL2xvY2FsaG9zdDozMDAxIiwiY3Jvc3NPcmlnaW4iOmZhbHNlfQ==',
    signature: 'MEUCIQDEhpcSbimPyx4VBY_l35zFYYgY_PjllrcTqlHUVjqBuAIgImEVOJHeDrMVNXKkLnBWQOQc0gX5powx3TWbHVaamM0='
  }

  const credentialKey = {
    id: 'I5zYtpdZvGrIwg1uVMHIAqA6TKKHEIhftV7RXxBjGf8',
    publicKey: 'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE30niBzdcIYaelgXLIqSQE4nVxQRPW_sF0YNoMErfKHY0bF0WmCATw3-4o5T3527KBV2zrbgPk1Q4lECRWUHoQw==',
    algorithm: 'ES256'
  }

  const result = await server.verifyAuthentication(authentication, credentialKey, expected);

  console.log(result);
}

main().catch(console.error);
