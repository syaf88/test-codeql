export const pem =`-----BEGIN PUBLIC KEY-----
MIICsDCCAhmgAwIBAgIJALwzrJEIBOaeMA0GCSqGSIb3DQEBBQUAMEUxCzAJBgNV
BAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQKExhJbnRlcm5ldCBX
aWRnaXRzIFB0eSBMdGQwHhcNMTEwOTMwMTUyNjM2WhcNMjEwOTI3MTUyNjM2WjBF
MQswCQYDVQQGEwJBVTETMBEGA1UECBMKU29tZS1TdGF0ZTEhMB8GA1UEChMYSW50
ZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKB
gQC88Ckwru9VR2p2KJ1WQyqesLzr95taNbhkYfsd0j8Tl0MGY5h+dczCaMQz0YY3
xHXuU5yAQQTZjiks+D3KA3cx+iKDf2p1q77oXxQcx5CkrXBWTaX2oqVtHm3aX23B
AIORGuPk00b4rT3cld7VhcEFmzRNbyI0EqLMAxIwceUKSQIDAQABo4GnMIGkMB0G
A1UdDgQWBBSGmOdvSXKXclic5UOKPW35JLMEEjB1BgNVHSMEbjBsgBSGmOdvSXKX
clic5UOKPW35JLMEEqFJpEcwRTELMAkGA1UEBhMCQVUxEzARBgNVBAgTClNvbWUt
U3RhdGUxITAfBgNVBAoTGEludGVybmV0IFdpZGdpdHMgUHR5IEx0ZIIJALwzrJEI
BOaeMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADgYEAcPfWn49pgAX54ji5
SiUPFFNCuQGSSTHh2I+TMrs1G1Mb3a0X1dV5CNLRyXyuVxsqhiM/H2veFnTz2Q4U
wdY/kPxE19Auwcz9AvCkw7ol1LIlLfJvBzjzOjEpZJNtkXTx8ROSooNrDeJl3HyN
cciS5hf80XzIFqwhzaVS9gmiyM8=
-----END PUBLIC KEY-----`;

const pg = require("pg");

const client = new pg.Client({
  user: "bob",
  host: "database.server.com",
  database: "mydb",
  password: "correct-horse-battery-staple",
  port: 3211
});
client.connect();

const pg = require("pg");

const client = new pg.Client({

  user: "bob3",
  host: "database.server.com",
  database: "mydb",
  password: "testpassword2",
  port: 3211
});
client.connect();

